import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../../search/Search';
import TableCheck from '../../tableCheck/TableCheck';
import Title from '../../title/Title';
import { LocVe } from './config.type';
import TicketCheckLocVe from './TicketCheckLocVe';

const TicketCheck: React.FC = () => {
    //===========================================
    // state redux
    //===========================================
    const dataCheck = useSelector((state: any) => state.dataFirebase.check);
    //===========================================
    // state 
    //===========================================
    const [search, setSearch] = useState<string>('');
    const [locVe, setLocVe] = useState<LocVe>({
        dayStart: {
            activeDate: 1,
            activeMonth: 0,
            activeYear: 2000,
        },
        dayEnd: {
            activeDate: 0,
            activeMonth: 0,
            activeYear: 0,
            byDate: 1,
        },
        doiSoat: 1,
    });
    const [isLocVe, setIsLocVe] = useState<boolean>(false);
    //=====================================
    // function
    //=====================================
    const onChange = (e: any) => {
        setLocVe({
            ...locVe,
            doiSoat: e.target.value,
        });
    };
    const setDayEnd = (date: number, month: number, year: number) => {
        setLocVe({
            ...locVe,
            dayEnd: {
                ...locVe.dayEnd,
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    const setRadio = (e: any) => {
        setLocVe({
            ...locVe,
            dayEnd: {
                ...locVe.dayEnd,
                byDate: e,
            },
        });
    };
    //=====================================================================
    // loc ve
    //=====================================================================
    const locVeOpen = () => {
        setIsLocVe(true);
    };
    const locVeClose = () => {
        setIsLocVe(false);
    };
    return (
        <Row id="tick-check" wrap={false}>
            <Col flex="auto" className="page-content">
                <Title children={'Đối soát vé'} />

                <Row className="tick-check-header" justify="space-between">
                    <Col span={8}>
                        <Search
                            children={'Tìm bằng số vé'}
                            background={'#F7F7F8'}
                            search={search}
                            setSearch={setSearch}
                        />
                    </Col>
                    <Col>
                        <div className="tick-check-buttons">
                            <button className="btn-primary" onClick={locVeOpen}>
                                Chốt đối soát
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <TableCheck
                        data={dataCheck}
                        locVe={locVe}
                        search={search}
                    />
                </Row>
            </Col>
            <Col
                flex="450px"
                className={`page-content ${isLocVe ? '' : 'd-none'}`}
            >
                <TicketCheckLocVe
                    onChange={onChange}
                    value={locVe.doiSoat}
                    state={locVe}
                    setRadio={setRadio}
                    setDayEnd={setDayEnd}
                    locVeClose={locVeClose}
                />
            </Col>
        </Row>
    );
};

export default TicketCheck;
