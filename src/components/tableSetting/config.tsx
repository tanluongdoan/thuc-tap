import IconPrev from '../icons/IconPrev';
import IconNext from '../icons/IconNext';
import TinhTrang from './TinhTrang';
import Update from './Update';
import { DT } from './config.type';

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

export const renderNgayApDung = (text: string) => {
    const array = text.split('-');
    return (
        <div>
            <div>
                <span className="d-content-end">{array[0]}</span>
            </div>
            <div>
                <span className="d-content-end">{array[1]}</span>
            </div>
        </div>
    );
};
export const renderNgayHetHan = (text: string) => {
    const array = text.split('-');
    return (
        <div>
            <div>
                <span className="d-content-end">{array[0]}</span>
            </div>
            <div>
                <span className="d-content-end">{array[1]}</span>
            </div>
        </div>
    );
};

export const renderTinhTrang =(text:string)=>{
    switch (text) {
        case 'daSuDung':
            return (
                <TinhTrang
                    class={'da-su-dung'}
                    text={'Đã sử dụng'}
                />
            );
        case 'chuaSuDung':
            return (
                <TinhTrang
                    class={'chua-su-dung'}
                    text={'Đang áp dụng'}
                />
            );
        default:
            return <TinhTrang class={'het-han'} text={'Tắt'} />;
    }
}

export const renderUpdate =(record:DT, handleModalUpdate:(e:DT)=>void)=>{
    return (
        <Update
            handleModalUpdate={handleModalUpdate}
            record={record}
        />
    );
}