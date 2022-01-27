import IconPrev from '../icons/IconPrev';
import IconNext from '../icons/IconNext';
import { FilterNgaySuDung, FilterSoVe, FixDoiSoat, SetFixDoiSoat } from './config.type';
export const itemRender = (
    current: number,
    type: string,
    originalElement: any
) => {
    if (type === 'prev') {
        return (
            <button>
                <IconPrev />
            </button>
        );
    }
    if (type === 'next') {
        return (
            <button>
                <IconNext />
            </button>
        );
    }
    return originalElement;
};
//========================================
// filter so ve
//========================================
export const filterSoVe: FilterSoVe = (record, search) => {
    return record.soVe.toString().toLowerCase().includes(search.toLowerCase());
};

//===========================================================
// hàm tinh trang
//===========================================================

const fixDoiSoat:FixDoiSoat = (check) => {
    switch (check) {
        case 1:
            return '';

        case 2:
            return 'Đã đối soát';

        case 3:
            return 'Chưa đối soát';
        default:
            return '';
    }
};
export const setFixDoiSoat:SetFixDoiSoat = (doiSoat, setLocVe, locVe) => {
    const array = [];
    const d = fixDoiSoat(doiSoat);
    array.push(d);
    setLocVe({
        ...locVe,
        doiSoat: array,
    });
};
//=============================================
//
//=============================================

export const filterNgaySuDung: FilterNgaySuDung = (record, dayEnd) => {
    const ngaySuDung: string = record.ngaySuDung;
    const d: Date = new Date();
    const arrayNgaySuDung: Array<string> = ngaySuDung.split('/');
    const dateNgaySuDung: number = d.setFullYear(
        Number(arrayNgaySuDung[2]),
        Number(arrayNgaySuDung[1]),
        Number(arrayNgaySuDung[0])
    );
    const boolean =
        dayEnd.activeDate === 0 &&
        dayEnd.activeMonth === 0 &&
        dayEnd.activeYear === 0;
    if (!boolean) {
        const dt = d.setFullYear(
            dayEnd.activeYear,
            dayEnd.activeMonth,
            dayEnd.activeDate
        );
        if (dt >= dateNgaySuDung) {
            return true;
        }
    } else return true;
    return false;
};
