import { Col, Radio, Row, Space } from 'antd';
import React from 'react';
import DatePiker from '../../tickDatePiker';
import { Props } from './config.type';
const TicketCheckLocVe = (props: Props) => {
    const { onChange, state, value, setDayEnd, locVeClose, setRadio } = props;
    const setDayStart =()=>{

    }
    const setRadioStart=()=>{
        
    }
    return (
        <div className="tick-check-box">
            <span className="box-title">Lọc vé</span>
            <Row className="radio">
                <Col span={12}>
                    <span className="text">Tình trạng đối soát</span>
                </Col>
                <Col span={12}>
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>
                                {' '}
                                <span className="text-value"> Tất cả</span>
                            </Radio>
                            <Radio value={2}>
                                <span className="text-value"> Đã đối soát</span>
                            </Radio>
                            <Radio value={3}>
                                <span className="text-value">
                                    {' '}
                                    Chưa đối soát
                                </span>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Col>
            </Row>
            <Row className="radio">
                <Col span={12}>
                    <span className="text">Loại vé</span>
                </Col>
                <Col span={12}>
                    <span className="text-value"> Vé cổng</span>
                </Col>
            </Row>
            <Row className="start-date">
                <Col span={12}>
                    <span className="text">Từ ngày</span>
                </Col>
                <Col span={12}>
                    <DatePiker
                        activeDate={state.dayStart}
                        module={3}
                        setActiveDate={setDayStart}
                        valueRadio={1}
                        setValueRadio={setRadioStart}
                    />
                </Col>
            </Row>
            <Row className="end-date">
                <Col span={12}>
                    <span className="text">Đến ngày</span>
                </Col>
                <Col span={12}>
                    <DatePiker
                        activeDate={state.dayEnd}
                        setActiveDate={setDayEnd}
                        valueRadio={state.dayEnd.byDate}
                        setValueRadio={setRadio}
                        module={4}
                    />
                </Col>
            </Row>
            <Row className="box-bottom" justify="center">
                <button
                    className="btn-modal"
                    type="submit"
                    onClick={locVeClose}>
                    {' '}
                    Lọc
                </button>
            </Row>
        </div>
    );
};

export default TicketCheckLocVe;
