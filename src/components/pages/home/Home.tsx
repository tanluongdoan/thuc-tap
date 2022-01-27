import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../title/Title';
import HomeBottom from './HomeBottom';
import HomeTop from './HomeTop';
import { StateLine, StatePie } from './home.type';
const Home: React.FC = () => {
    //========================================
    // state reducer
    //========================================
    const dataHome = useSelector((state: any) => state.dataFirebase.home);
    //========================================
    // state home
    //========================================
    const [stateLine, setStateLine] = useState<StateLine>({
        dayLine: {
            activeDate: 1,
            activeMonth: 0,
            activeYear: 2022,
        },
        line: {
            byDay: 1,
            data: [],
        },
        danhThu: 0,
    });

    const [statePie, setStatePie] = useState<StatePie>({
        dayPie: {
            activeDate: 1,
            activeMonth: 0,
            activeYear: 2022,
        },
        pie: {
            byDay: 1,
            dataEvent: [],
            dataFamily: [],
        },
    });
    //========================================
    // component start
    //========================================
    useEffect(() => {
        const d: Date = new Date();
        setStateLine({
            ...stateLine,
            dayLine: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
        });
        setStatePie({
            ...statePie,
            dayPie: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
        });
    }, []);

    //==========================================
    // chart line
    //==========================================
    const setDayLine = (date: number, month: number, year: number) => {
        setStateLine({
            ...stateLine,
            dayLine: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    const setRadioLine = (number: number) => {
        setStateLine({
            ...stateLine,
            line: {
                ...stateLine.line,
                byDay: number,
            },
        });
    };
    //==========================================
    // chart pie
    //==========================================
    const setDayPie = (date: number, month: number, year: number) => {
        setStatePie({
            ...statePie,
            dayPie: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };

    const setRadioPie = (number: number) => {
        setStatePie({
            ...statePie,
            pie: {
                ...statePie.pie,
                byDay: number,
            },
        });
    };
    //===============================================
    return (
        <div id="home" className="page-content">
            {/* title home */}
            <Title children={'Thống kê'} />
            {/* home top */}
            <HomeTop
                state={stateLine}
                setState={setStateLine}
                setDayLine={setDayLine}
                setRadioLine={setRadioLine}
                dataHome={dataHome}
            />

            <div className="home-chart-pie">
                <HomeBottom
                    state={statePie}
                    dataHome={dataHome}
                    setDayPie={setDayPie}
                    setRadioPie={setRadioPie}
                    setState={setStatePie}
                />
            </div>
        </div>
    );
};

export default Home;
