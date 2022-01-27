import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { HandleSubmit, PropsModalManager } from './config.type';
import ModalManagerCheck from './ModalManagerCheck';
import ModalManagerDate from './ModalManagerDate';
import ModalManagerTinhTrang from './ModalManagerTinhTrang';

const ModalManager = (props: PropsModalManager) => {
    const { isModal, modalFilter, setModalFilter, handleModalClose } = props;
    const handleSubmit:HandleSubmit = () => {
        handleModalClose();
    };
    return (
        <Modal visible={isModal} width={634}>
            <form
                className="box-modal"
                onSubmit={(e: any) => e.preventDefault()}
            >
                <div className="box-modal-title">
                    <span>Lọc vé</span>
                </div>
                <ModalManagerDate
                    modalFilter={modalFilter}
                    setModalFilter={setModalFilter}
                />
                <ModalManagerTinhTrang
                    modalFilter={modalFilter}
                    setModalFilter={setModalFilter}
                />
                <ModalManagerCheck
                    modalFilter={modalFilter}
                    setModalFilter={setModalFilter}
                />
                <div className="box-modal-button">
                    <button
                        onClick={() => handleSubmit()}
                        className="btn-modal"
                        type="submit"
                    >
                        {' '}
                        Lọc
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ModalManager;
