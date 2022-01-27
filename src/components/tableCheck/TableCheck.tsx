import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import {
    filterSoVe,
    itemRender,
    setFixDoiSoat,
    filterNgaySuDung,
} from './config';
import {Column, Filter, Props} from './config.type'
const TableCheck = (props: Props) => {
    //======================================
    // props
    //======================================
    const { locVe, search, data } = props;
    //======================================
    // state
    //======================================
    const [filter, setFilter] = useState<Filter>({
        soVe: [''],
        ngaySuDung: [''],
        doiSoat: [''],
    });
    //======================================
    // useEffect
    //======================================
    const isUseEfect = [locVe, locVe?.dayEnd, locVe?.doiSoat];
    
    useEffect(() => {
        const boolean = locVe?.dayEnd && locVe?.doiSoat;
        if (boolean) {
            const { doiSoat } = locVe;
            setFixDoiSoat(doiSoat, setFilter, filter);
        }
    }, isUseEfect);
    const columns:Array<Column>= [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Số vé',
            dataIndex: 'soVe',
            key: 'soVe',
            filteredValue: filter.soVe,
            onFilter: (value: any, record: any) => filterSoVe(record, search),
        },

        {
            title: 'Ngày sử dụng',
            key: 'ngaySuDung',
            dataIndex: 'ngaySuDung',
            filteredValue: filter.ngaySuDung,
            onFilter: (value: any, record: any) =>
                filterNgaySuDung(record, locVe.dayEnd),
        },
        {
            title: 'Tên loại vé',
            key: 'tenVe',
            dataIndex: 'tenVe',
        },
        {
            title: 'Cổng check-in',
            key: 'check',
            dataIndex: 'check',
        },
        {
            title: '',
            key: 'doiSoat',
            dataIndex: 'doiSoat',
            filteredValue: filter.doiSoat,
            onFilter: (value: any, record: any) =>
                record.doiSoat.includes(value),
        },
    ];
    return (
        <div className="box-table">
            <Table
                // scroll={{ x: 1500 }}
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

export default TableCheck;
