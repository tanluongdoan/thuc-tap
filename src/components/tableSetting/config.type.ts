export interface DT {
    key: number,
    stt: number,
    maGoi: string,
    tenGoiVe: string,
    ngayApDung: string,
    ngayHetHan: string,
    giaVe: string,
    giaCombo: string,
    tinhTrang: string,
    update: number
}
export interface Props {
    handleModalUpdate:(e:DT)=>void
    search:string
    data :Array<DT>
}
export interface Column {
    title: string;
    key: string;
    dataIndex: string;
    filteredValue?: Array<string>;
    onFilter?: (value: any, record: DT) => boolean;
    render?: (value: any, record: DT) => JSX.Element;
}