import { Radio } from 'antd';
import React from 'react';
import { OnChangeRadio, PropsModalManagerTinhTrang } from './config.type';

const ModalManagerTinhTrang = (props: PropsModalManagerTinhTrang) => {
    const { modalFilter, setModalFilter } = props;
    //=====================================================================
    // hàm của radio
    //=====================================================================
    const onChangeRadio:OnChangeRadio = (e) => {
        setModalFilter({
            ...modalFilter,
            tinhTrang: e.target.value,
        });
    };
    return (
        <div className="box-modal-tinh-trang">
            <span>Tình trạng sử dụng</span>
            <Radio.Group onChange={onChangeRadio} value={modalFilter.tinhTrang}>
                <Radio value={4}>Tất cả</Radio>
                <Radio value={1}>Đã sử dụng</Radio>
                <Radio value={2}>Chưa sử dụng</Radio>
                <Radio value={3}>Hết hạn</Radio>
            </Radio.Group>
        </div>
    );
};

export default ModalManagerTinhTrang;
