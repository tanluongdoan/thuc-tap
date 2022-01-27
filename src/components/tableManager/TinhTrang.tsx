import React from 'react';
import IconList from '../icons/IconList';
interface Props {
    text: string;
    class: string;
}
const TinhTrang = (props: Props) => {
    return (
        <div className="tinh-trang">
            <div className={props.class}>
                <IconList />
                <span>{props.text}</span>
            </div>
        </div>
    );
};

export default TinhTrang;
