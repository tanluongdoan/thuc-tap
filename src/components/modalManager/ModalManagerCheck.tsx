import { Checkbox, Col, Row } from 'antd';
import React, { useState } from 'react';
import { List, OnChange, PropsModalManagerCheck } from './config.type';

const ModalManagerCheck = (props: PropsModalManagerCheck) => {
    //=======================================
    // props
    //=======================================
    const { modalFilter, setModalFilter } = props;
    //=======================================
    // state
    //=======================================
    const [disAbled, setDisAbled] = useState<boolean>(true);
     //=======================================
    // function
    //=======================================
    const onChange:OnChange = (list) => {
        let all = list.find((e: List) => e === 'all');
        if (all || list.length === 5) {
            setModalFilter({
                ...modalFilter,
                checkIn: ['all'],
            });
            setDisAbled(true);
        } else {
            setDisAbled(false);
            setModalFilter({
                ...modalFilter,
                checkIn: list,
            });
        }
    };
     //=======================================
    // render
    //=======================================
    return (
        <div className="box-modal-check">
            <span>Cổng Check-in</span>
            <Checkbox.Group
                style={{ width: '100%' }}
                value={modalFilter.checkIn}
                onChange={onChange}
            >
                <Row className="row1">
                    <Col span={8}>
                        <Checkbox value="all">Tất cả</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="c1" disabled={disAbled}>
                            Cổng 1
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="c2" disabled={disAbled}>
                            Cổng 2
                        </Checkbox>
                    </Col>
                </Row>
                <Row className="row2">
                    <Col span={8}>
                        <Checkbox value="c3" disabled={disAbled}>
                            Cổng 3
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="c4" disabled={disAbled}>
                            Cổng 4
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="c5" disabled={disAbled}>
                            Cổng 5
                        </Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
        </div>
    );
};

export default ModalManagerCheck;
