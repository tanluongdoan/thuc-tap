import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Search from '../search/Search';
import HeaderMessage from './HeaderMessage';
import HeaderNotification from './HeaderNotification';
import HeaderUser from './HeaderUser';

const Header: React.FC = () => {
    const [search, setSearch] = useState('');
    return (
        <div id="header">
            <Row>
                <Col flex="410px">
                    <Search children={'Search'} search={search} setSearch={setSearch} background={'#EDEDED'} />
                </Col>
                <Col flex="auto">
                    <div className="header-right">
                        <div className="header-right-item">
                            <HeaderMessage />
                        </div>
                        <div className="header-right-item">
                            <HeaderNotification />
                        </div>
                        <div className="header-right-item">
                            <HeaderUser />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
