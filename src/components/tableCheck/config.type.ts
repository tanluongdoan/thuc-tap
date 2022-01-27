export interface LocVe {
    dayStart: {
        activeDate: number;
        activeMonth: number;
        activeYear: number;
    };
    dayEnd: {
        activeDate: number;
        activeMonth: number;
        activeYear: number;
        byDate: number;
    };
    doiSoat: number;
}
export interface DT {
    key: number;
    stt: number;
    soVe: string;
    ngaySuDung: string;
    tenVe: string;
    check: string;
    doiSoat: string;
}
export interface Props {
    locVe: LocVe;
    search: string;
    data: Array<DT>;
}
export interface Filter{
    soVe: Array<string>,
    ngaySuDung: Array<string>,
    doiSoat: Array<string>,
}
export interface Column{
    title: string;
    key: string;
    dataIndex: string;
    filteredValue?: Array<string>;
    onFilter?: (value: any, record:  DT) => boolean;
    render?: (text: string) => JSX.Element;
}
export type FilterSoVe =(record: DT, search: string)=>boolean

export type FixDoiSoat=(check:number)=>'Đã đối soát'|'Chưa đối soát'|''

export type SetFixDoiSoat=(doiSoat: number, setLocVe: React.Dispatch<React.SetStateAction<Filter>>, locVe: Filter)=>void

export interface DayEnd {
    activeDate: number;
    activeMonth: number;
    activeYear: number;
    byDate: number;
}
export type FilterNgaySuDung =(record: DT, dayEnd: DayEnd)=>boolean