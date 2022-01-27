import { Col, Row } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//=================================================
// component
//=================================================
import Header from '../components/header/Header';
import Home from '../components/pages/home/Home';
import TicketCheck from '../components/pages/ticketCheck/TicketCheck';
import TickManager from '../components/pages/ticketManager/TickManager';
import TickService from '../components/pages/tickSetting/TickService';
import Sidebar from '../components/sidebar/Sidebar';
//=================================================
//=================================================
const TicketApp: React.FC = () => {
    return (
        <Router>
            <Row justify="center" wrap={false}>
                <Col flex="312px">
                    <Sidebar />
                </Col>
                <Col flex="auto">
                    <Header />
                    <div className="content">
                        <Routes>
                            <Route path="" element={<Home />} />
                            <Route path="manager" element={<TickManager />} />
                            <Route path="check" element={<TicketCheck />} />
                            <Route
                                path="setting/service"
                                element={<TickService />}
                            />
                        </Routes>
                    </div>
                </Col>
            </Row>
        </Router>
    );
};

export default TicketApp;
