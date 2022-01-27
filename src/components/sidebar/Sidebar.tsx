import React from 'react';
import logo from '../../assets/images/logo.png';
import { lists } from './Sidebar.types';
import { renderLists } from './module';
const Sidebar: React.FC = () => {
    return (
        <div id="sidebar">
            <div id="logo">
                <img src={logo} alt="" width="133px" height="58px" />
            </div>
            <ul id="menu">{renderLists(lists)}</ul>
        </div>
    );
};

export default Sidebar;
