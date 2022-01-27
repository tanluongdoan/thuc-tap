import React from 'react';
import IconUpdate from '../icons/IconUpdate';
const Update = (props: any) => {
    const { handleModalUpdate, record } = props;
    return (
        <button
            className="btn-update"
            onClick={() => handleModalUpdate(record)}
        >
            <IconUpdate />
            <span>Cập nhật</span>
        </button>
    );
};

export default Update;
