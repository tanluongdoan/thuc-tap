import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import IconCalendar from '../icons/IconCalendar';
import TickDatePiker from './TickDatePiker';
import { State, TypeDay } from './type';
import {Props} from './type'
const DatePiker = (props: Props) => {
    const { activeDate, setActiveDate, module, valueRadio, setValueRadio } =
        props;
        const { activeDate: activeD, activeMonth, activeYear } = activeDate;
    const [state, setState] = useState<State>({
        date: 0,
        month: 0,
        year: 0,
        day: 0,
    });
    const [show, setShow] = useState<boolean>(false);
    const { month, year } = state;
   
    useEffect(() => {
        let dt:Date = new Date();
        setState({
            date: dt.getDate(),
            month: dt.getMonth(),
            year: dt.getFullYear(),
            day: dt.getDay(),
        });
    }, []);
    //======================================================
    //===================================================
    // sự kện nút button nhấn next hoặc prev
    const monthPrevNext = (boolean: boolean) => {
        const { month, year } = state;
        if (boolean) {
            setState({
                ...state,
                month: month + 1 > 11 ? 0 : month + 1,
                year: month + 1 > 11 ? year + 1 : year,
            });
        } else {
            setState({
                ...state,
                month: month - 1 < 0 ? 11 : month - 1,
                year: month - 1 < 0 ? year - 1 : year,
            });
        }
    };
    //===========================================================
    //===========================================================
    //===========================================================
    // băt sự kiên chọn ngày và xét lai ngày hiện tại
    const handleClick = (e: TypeDay) => {
        const { number, monthSate } = e;
        if (monthSate + month > 11) {
            setState({
                date: number,
                month: 0,
                year: year + 1,
                day: 0,
            });
            setActiveDate(number, 0, year + 1);
        }
        if (monthSate + month < 0) {
            setState({
                date: number,
                month: 11,
                year: year - 1,
                day: 0,
            });
            setActiveDate(number, 11, year - 1);
        }
        if (monthSate + month >= 0 && monthSate + month <= 11) {
            setState({
                date: number,
                month: month + monthSate,
                year: year,
                day: 0,
            });
            setActiveDate(number, month + monthSate, year);
        }

        setShow(false);
    };
    //=========================================================
    // hàm nút radio
    //====================================================
    const onChange = (e: any) => {
        setValueRadio(e.target.value);
    };
    ///================================================
    ///================================================
    ///================================================
    // set giá trị input
    ///================================================
    let inputDate:string|number = activeD < 10 ? `0${activeD}` : activeD;
    let inputMonth:string|number =
        activeMonth + 1 < 10 ? `0${activeMonth + 1}` : activeMonth + 1;
    let inputModule2:string = `${inputDate}/${inputMonth}/${activeYear}`;
    let inputModule1:string = `Tháng ${activeMonth + 1}, ${activeYear}`;
    let classModule:string='';
    let inputValue:string ='';
    switch (module) {
        case 1:
            inputValue = inputModule1;
            classModule = 'module1';
            break;
        case 2:
            const boolean =
                activeMonth === 0 && activeYear === 0 && activeD === 0;

            inputValue = boolean ? '' : inputModule2;
            classModule = 'module2';
            break;
        case 3:
            inputValue = inputModule2;
            classModule = 'module3';
            break;
        case 4:
            const bl = activeMonth === 0 && activeYear === 0 && activeD === 0;

            inputValue = bl ? '' : inputModule2;
            classModule = 'module4';
            break;
        case 5:
            inputValue = 'dd/mm/yy';
            classModule = 'module2';
            break;

        default:
            inputValue = inputModule1;
            break;
    }
    //=========================================================
    let classShow:string = module === 3 ? 'd-none' : show ? '' : 'd-none';

    //======================================================
    return (
        <div className={`date-piker ${classModule}`}>
            <Input value={inputValue} placeholder="dd/mm/yy" />

            <span onClick={() => setShow(!show)}>
                <IconCalendar />
            </span>
            <div className={classShow}>
                <TickDatePiker
                    state={state}
                    active={activeDate}
                    monthPrevNext={monthPrevNext}
                    handleClick={handleClick}
                    onChange={onChange}
                    valueRadio={valueRadio}
                />
            </div>
        </div>
    );
};

export default DatePiker;
