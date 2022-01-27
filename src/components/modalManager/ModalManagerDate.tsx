import { Col, Row } from 'antd';
import React, { useState } from 'react';
import DatePiker from '../tickDatePiker';
import { PropsModalManagerDate } from './config.type';

const ModalManagerDate = (props: PropsModalManagerDate) => {
    //======================================
    //props
    //======================================
    const { modalFilter, setModalFilter } = props;
    //===================================================
    // state
    //===================================================
    const [message, setMessage] = useState<boolean>(false);
    //===================================================
    // set day start
    //===================================================
    const setDayStart = (date: number, month: number, year: number) => {
        const { dayEnd, dayStart } = modalFilter;
        const bl:boolean =
            dayEnd.activeYear === 0 &&
            dayEnd.activeMonth === 0 &&
            dayEnd.activeDate === 0 &&
            dayStart.activeYear === 0 &&
            dayStart.activeMonth === 0 &&
            dayStart.activeDate === 0;
        const d:Date = new Date();

        const end:number = d.setFullYear(
            dayEnd.activeYear,
            dayEnd.activeMonth,
            dayEnd.activeDate
        );

        const start:number = d.setFullYear(year, month, date);
        if (end > start || bl) {
            setMessage(false);
            setModalFilter({
                ...modalFilter,
                dayStart: {
                    ...modalFilter.dayStart,
                    activeDate: date,
                    activeMonth: month,
                    activeYear: year,
                },
            });
        } else {
            setMessage(true);
        }
    };
    //===================================================
    // set day end
    //===================================================
    const setDayEnd = (date: number, month: number, year: number) => {

        const { dayStart, dayEnd } = modalFilter;

        const bl:boolean =
            dayEnd.activeYear === 0 &&
            dayEnd.activeMonth === 0 &&
            dayEnd.activeDate === 0 &&
            dayStart.activeYear === 0 &&
            dayStart.activeMonth === 0 &&
            dayStart.activeDate === 0;

        const d:Date = new Date();
        const start:number = d.setFullYear(
            dayStart.activeYear,
            dayStart.activeMonth,
            dayStart.activeDate
        );
        const end:number = d.setFullYear(year, month, date);

        if (end > start || bl) {
            setMessage(false);
            setModalFilter({
                ...modalFilter,
                dayEnd: {
                    ...modalFilter.dayEnd,
                    activeDate: date,
                    activeMonth: month,
                    activeYear: year,
                },
            });
        } else {
            setMessage(true);
        }
    };
    //===================================================
    // set radio start
    //===================================================
    const setValueRadioStart = (e: number) => {
        setModalFilter({
            ...modalFilter,
            dayStart: {
                ...modalFilter.dayStart,
                byDay: e,
            },
        });
    };
    //===================================================
    // set radio end
    //===================================================
    const setValueRadioEnd = (e: number) => {
        setModalFilter({
            ...modalFilter,
            dayEnd: {
                ...modalFilter.dayEnd,
                byDay: e,
            },
        });
    };

    return (
        <div className="box-modal-day">
            <Row>
                <Col span={12}>
                    <div className="box-modal-day-content">
                        <span>Từ ngày</span>

                        <DatePiker
                            activeDate={modalFilter.dayStart}
                            setActiveDate={setDayStart}
                            module={2}
                            valueRadio={modalFilter.dayStart.byDay}
                            setValueRadio={setValueRadioStart}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="box-modal-day-content ">
                        <span>Đến ngày</span>
                        <DatePiker
                            activeDate={modalFilter.dayEnd}
                            setActiveDate={setDayEnd}
                            module={2}
                            valueRadio={modalFilter.dayEnd.byDay}
                            setValueRadio={setValueRadioEnd}
                        />
                    </div>
                </Col>
            </Row>
            <span className={message ? 'red' : 'd-none'}>
                Bạn cần nhập đến ngày lớn hơn từ ngày
            </span>
        </div>
    );
};

export default ModalManagerDate;
