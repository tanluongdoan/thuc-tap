import { Table } from 'antd';
import React, { useRef, useState } from 'react';
import { itemRender, renderNgayApDung, renderNgayHetHan, renderUpdate } from './config';

import {Column, Props} from './config.type'
import { renderTinhTrang } from '../tableManager/config';
const TableSetting = (props: Props) => {
    const { handleModalUpdate, search,data } = props;
    
    const columns: Array<Column> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text: any) => {
                return text;
            },
        },
        {
            title: 'Mã gói',
            dataIndex: 'maGoi',
            key: 'maGoi',
        },
        {
            title: 'Tên gói vé',
            dataIndex: 'tenGoiVe',
            key: 'tenGoiVe',
            filteredValue:  [''],
            onFilter: (value, record) =>
                record.tenGoiVe
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase()),
        },
        {
            title: 'Ngày áp dụng',
            key: 'ngayApDung',
            dataIndex: 'ngayApDung',
            render: (text) => renderNgayApDung(text),
        },
        {
            title: 'Ngày hết hạn',
            key: 'ngayHetHan',
            dataIndex: 'ngayHetHan',
            render: (text) => renderNgayHetHan(text),
        },
        {
            title: 'Giá vé (VNĐ/Vé)',
            key: 'giaVe',
            dataIndex: 'giaVe',
        },
        {
            title: 'Giá Combo (VNĐ/Combo)',
            key: 'giaCombo',
            dataIndex: 'giaCombo',
        },
        {
            title: 'Tình trạng sử dụng',
            key: 'tinhTrang',
            dataIndex: 'tinhTrang',
            render: (text: any) => renderTinhTrang(text),
        },
        {
            title: '',
            key: 'update',
            dataIndex: 'update',
            render: (text: any, record: any) => renderUpdate(record,handleModalUpdate),
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

export default TableSetting;
