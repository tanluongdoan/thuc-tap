import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import {
    itemRender,
    setFixCheckIn,
    setFixTinhTrang,
    filterSuKien,
    renderTinhTrang,
    filterNgaySuDung,
    filterNgayXuatVe,
} from './config';

import { PropsTableManager, Filter, TableItem, Column } from './config.type';
const TableManager = (props: PropsTableManager) => {
    //=========================================
    // props
    //=========================================
    const { modalFilter, search, data } = props;
    const { dayStart, dayEnd } = modalFilter;
    //=========================================
    // state
    //=========================================
    const [filter, setFilter] = useState<Filter>({
        tenSuKien: [''],
        tinhTrang: [''],
        ngaySuDung: [''],
        ngayXuatVe: [''],
    });
    const [check, setCheck] = useState(['']);
    //========================================
    // useEffect
    //========================================

    const isUseEfect = [
        modalFilter,
        modalFilter?.checkIn,
        modalFilter?.tinhTrang,
    ];
    useEffect(() => {
        const boolean = modalFilter?.checkIn && modalFilter?.tinhTrang;
        if (boolean) {
            const { checkIn, tinhTrang } = modalFilter;
            setFixCheckIn(checkIn, setCheck);
            setFixTinhTrang(tinhTrang, setFilter, filter);
        }
    }, isUseEfect);
    //========================================
    // columns
    //========================================
    const columns: Array<Column> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Booking code',
            dataIndex: 'bookingCode',
            key: 'bookingCode',
        },
        {
            title: 'Số vé',
            dataIndex: 'soVe',
            key: 'soVe',
        },
        {
            title: 'Tên sự kiện',
            key: 'tenSuKien',
            dataIndex: 'tenSuKien',
            filteredValue: filter.tenSuKien,
            onFilter: (value, record) => filterSuKien(record, search),
        },
        {
            title: 'Tình trạng sử dụng',
            key: 'tinhTrang',
            dataIndex: 'tinhTrang',
            render: (text: string) => renderTinhTrang(text),
            filteredValue: filter.tinhTrang,
            onFilter: (value, record) => record.tinhTrang.includes(value),
        },
        {
            title: 'Ngày sử dụng',
            key: 'ngaySuDung',
            dataIndex: 'ngaySuDung',
            filteredValue: filter.ngaySuDung,
            onFilter: (value, record) => filterNgaySuDung(record, dayStart),
        },
        {
            title: 'Ngày xuất vé',
            key: 'ngayXuatVe',
            dataIndex: 'ngayXuatVe',
            filteredValue: filter.ngayXuatVe,
            onFilter: (value, record) => filterNgayXuatVe(record, dayEnd),
        },
        {
            title: 'Cổng check-in',
            key: 'check',
            dataIndex: 'check',
            filteredValue: check,
            onFilter: (value, record) => record.check.includes(value),
        },
    ];

    return (
        <div className="box-table">
            <Table
                //    scroll={{ x: 1500 }}
                columns={columns}
                dataSource={data}
                rowClassName={'helo'}
                loading={false}
                pagination={{
                    position: ['bottomCenter'],
                    itemRender: itemRender,
                }}
            />
        </div>
    );
};

export default TableManager;
