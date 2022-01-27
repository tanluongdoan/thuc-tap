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
export interface Props {
    onChange: (e: any) => void;
    state: LocVe;
    value: number;
    setDayEnd: (date: number, month: number, year: number) => void;
    locVeClose: () => void;
    setRadio: (e: any) => void;
}
