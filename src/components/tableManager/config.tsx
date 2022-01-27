import IconPrev from '../icons/IconPrev';
import IconNext from '../icons/IconNext';
import TinhTrang from './TinhTrang';
import {
    FixCheckIn,
    SetFixCheckIn,
    SetFixTinhTrang,
    FilterSuKien,
    RenderTinhTrang,
    FilterNgaySuDung,
    FilterNgayXuatVe,
} from './config.type';
//===========================================================
// hàm prev và next
//===========================================================
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
//===========================================================
// hàm check in
//===========================================================

const fixCheckIn: FixCheckIn = (check) => {
    switch (check) {
        case 'c1':
            return 'Cổng 1';

        case 'c2':
            return 'Cổng 2';

        case 'c3':
            return 'Cổng 3';

        case 'c4':
            return 'Cổng 4';

        default:
            return '';
    }
};

export const setFixCheckIn: SetFixCheckIn = (checkIn, setCheck) => {
    const array = [];
    const length = checkIn.length;
    for (let i = 0; i < length; i++) {
        const d = fixCheckIn(checkIn[i]);
        array.push(d);
    }
    setCheck(array);
};

//===========================================================
// hàm tinh trang
//===========================================================

const fixTinhTrang = (check: any) => {
    switch (check) {
        case 1:
            return 'daSuDung';

        case 2:
            return 'chuaSuDung';

        case 3:
            return 'hetHan';
        case 4:
            return '';

        default:
            return '';
    }
};
export const setFixTinhTrang: SetFixTinhTrang = (
    tinhTrang,
    setFilter,
    filter
) => {
    const array = [];
    const d = fixTinhTrang(tinhTrang);
    array.push(d);
    setFilter({
        ...filter,
        tinhTrang: array,
    });
};
//===========================================================
// filter sự kiện
//===========================================================

export const filterSuKien: FilterSuKien = (record, search) => {
    return record.tenSuKien
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase());
};
//===========================================================
// render tinh trang
//===========================================================

export const renderTinhTrang: RenderTinhTrang = (text) => {
    switch (text) {
        case 'daSuDung':
            return <TinhTrang class={'da-su-dung'} text={'Đã sử dụng'} />;
        case 'chuaSuDung':
            return <TinhTrang class={'chua-su-dung'} text={'Chưa sử dụng'} />;
        default:
            return <TinhTrang class={'het-han'} text={'Hết hạn'} />;
    }
};
//===========================================================
// filter ngay su dung
//===========================================================

export const filterNgaySuDung: FilterNgaySuDung = (record, dayStart) => {
    const ngaySuDung: string = record.ngaySuDung;
    const d: Date = new Date();
    const arrayNgaySuDung: Array<string> = ngaySuDung.split('/');
    const dateNgaySuDung: number = d.setFullYear(
        Number(arrayNgaySuDung[2]),
        Number(arrayNgaySuDung[1]),
        Number(arrayNgaySuDung[0])
    );
    const boolean: boolean =
        dayStart.activeDate === 0 &&
        dayStart.activeMonth === 0 &&
        dayStart.activeYear === 0;
    if (!boolean) {
        const dt = d.setFullYear(
            dayStart.activeYear,
            dayStart.activeMonth,
            dayStart.activeDate
        );
        if (dt <= dateNgaySuDung) {
            return true;
        }
    } else return true;
    return false;
};
//===========================================================
// filter ngay xuat ve
//===========================================================

export const filterNgayXuatVe: FilterNgayXuatVe = (record, dayEnd) => {
    const ngayXuatVe: string = record.ngayXuatVe;
    const d: Date = new Date();
    const arrayNgayXuatVe: Array<string> = ngayXuatVe.split('/');
    const dateNgayXuatVe: number = d.setFullYear(
        Number(arrayNgayXuatVe[2]),
        Number(arrayNgayXuatVe[1]),
        Number(arrayNgayXuatVe[0])
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
        if (dt >= dateNgayXuatVe) {
            return true;
        }
    } else return true;
    return false;
};
