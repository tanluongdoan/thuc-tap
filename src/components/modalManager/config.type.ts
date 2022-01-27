export type List = number | string | boolean;
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

export interface PropsModalManager {
    isModal: boolean;
    modalFilter: ModalFilter;
    setModalFilter: React.Dispatch<React.SetStateAction<ModalFilter>>;
    handleModalClose: () => void;
}
export interface PropsModalManagerCheck {
    modalFilter: ModalFilter;
    setModalFilter: React.Dispatch<React.SetStateAction<ModalFilter>>;
}
export interface PropsModalManagerDate {
    modalFilter: ModalFilter;
    setModalFilter: React.Dispatch<React.SetStateAction<ModalFilter>>;
}
export interface PropsModalManagerTinhTrang {
    modalFilter: ModalFilter;
    setModalFilter: React.Dispatch<React.SetStateAction<ModalFilter>>;
}
export type HandleSubmit = () => void;

export type OnChange = ((list: Array<List>) => void)|undefined

export interface RadioChangeEventTarget  {
    value?: any;
}
export interface RadioChangeEvent {
    target:{
        value?: any;
    };
}
export type OnChangeRadio =(e: RadioChangeEvent) => void