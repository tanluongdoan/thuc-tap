import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonFilter from '../../buttons/ButtonFilter';
import ButtonImport from '../../buttons/ButtonImport';
import ModalManager from '../../modalManager/ModalManager';
import Search from '../../search/Search';
import TableManager from '../../tableManager/TableManager';
import Title from '../../title/Title';
import { TypeSearch, ModalFilter, DataTable } from './tickManager.type';
const TickManager: React.FC = () => {
    //========================================
    // state reducer
    //========================================
    const dataManger: DataTable = useSelector(
        (state: any) => state.dataFirebase.manager
    );
    //========================================
    // state
    //========================================
    const [search, setSearch] = useState<TypeSearch>('');
    const [modalFilter, setModalFilter] = useState<ModalFilter>({
        dayStart: {
            activeDate: 0,
            activeMonth: 0,
            activeYear: 0,
            byDay: 1,
        },
        dayEnd: {
            activeDate: 0,
            activeMonth: 0,
            activeYear: 0,
            byDay: 1,
        },
        tinhTrang: 4,
        checkIn: ['all'],
    });
    const [isModal, setIsModal] = useState<boolean>(false);
    const [dataTable, setDataTable] = useState<DataTable>([]);
    useEffect(() => {
        if (dataManger) {
            setDataTable(dataManger);
        }
    }, [dataManger]);
    //========================================
    // state modal
    //========================================
    const handleModalOpen = () => {
        setIsModal(true);
    };
    const handleModalClose = () => {
        setIsModal(false);
    };
    return (
        <div id="tick-manager" className="page-content">
            <Title children={'Danh sách vé'} />

            <Row className="tick-manager-header">
                <Col span={8}>
                    <Search
                        children={'Tìm bằng số vé'}
                        background={'#F7F7F8'}
                        search={search}
                        setSearch={setSearch}
                    />
                </Col>
                <Col span={8} offset={8}>
                    <div className="tick-manager-buttons">
                        <div onClick={() => handleModalOpen()}>
                            <ButtonFilter />
                        </div>
                        <div>
                            <ButtonImport />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <TableManager
                    data={dataTable}
                    modalFilter={modalFilter}
                    search={search}
                />
            </Row>
            <ModalManager
                isModal={isModal}
                modalFilter={modalFilter}
                setModalFilter={setModalFilter}
                handleModalClose={handleModalClose}
            />
        </div>
    );
};

export default TickManager;
