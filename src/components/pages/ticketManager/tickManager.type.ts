
export type TypeSearch = string;
export type List = number|string|boolean
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
