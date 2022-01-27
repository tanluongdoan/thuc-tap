export type List = string|number|boolean
export interface ModalFilter {
    dayStart: {
        activeDate: number;
        activeMonth: number;
        activeYear: number;
        byDay: number;
    };
    dayEnd: {
        activeDate: number;
        activeMonth: number;
        activeYear: number;
        byDay: number;
    };
    tinhTrang: number;
    checkIn: Array<List>;
}

export interface TableItem {
    key: number;
    stt: number;
    bookingCode: string;
    soVe: string;
    tenSuKien: string;
    tinhTrang: string;
    ngaySuDung: string;
    ngayXuatVe: string;
    check: string;
}
export type DataTable = Array<TableItem> | [];

export interface PropsTableManager {
    modalFilter: ModalFilter;
    search: string;
    data: DataTable;
}
export interface Filter {
    tenSuKien: Array<string>;
    tinhTrang: Array<string>;
    ngaySuDung: Array<string>;
    ngayXuatVe: Array<string>;
}

export type FixCheckIn = (
    check: string
) => 'Cổng 1' | 'Cổng 2' | 'Cổng 3' | 'Cổng 4' | '';

export type SetFixCheckIn = (checkIn: any, setCheck: any) => void;

export type SetFixTinhTrang = (
    tinhTrang: number,
    setFilter: React.Dispatch<React.SetStateAction<Filter>>,
    filter: Filter
) => void;

export type FilterSuKien = (record: TableItem, search: string) => boolean;

export type RenderTinhTrang = (text: string) => JSX.Element;

interface DayStart {
    activeDate: number;
    activeMonth: number;
    activeYear: number;
    byDay: number;
}

export type FilterNgaySuDung = (
    record: TableItem,
    dayStart: DayStart
) => boolean;

export type FilterNgayXuatVe = (record: TableItem, dayEnd: DayStart) => boolean;

export interface Column {
    title: string;
    key: string;
    dataIndex: string;
    filteredValue?: Array<string>;
    onFilter?: (value: any, record: TableItem) => boolean;
    render?: (text: string) => JSX.Element;
}
export type Columns = Array<Column>;
