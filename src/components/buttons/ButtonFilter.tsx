import React from 'react';

import IconFilter from '../icons/IconFilter';

const ButtonFilter:React.FC = () => {
    return (
        <button className="btn-filter">
            <IconFilter />
            <span>Lọc vé</span>
        </button>
    );
};

export default ButtonFilter;
