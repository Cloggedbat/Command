import React from 'react';
import cryCard from '../Pages/Cryptopage'
import CryP from '../Pages/Cryptopage'
import Project from '../components/navCard'

import {
    Row,
    Col,

} from "react-bootstrap";

export const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-black-transparent shadow">
            <div></div>

            <Col>
                <h1>Command Center</h1>
            </Col>


            <Row>
                <div className="search-form">
                    <Col>

                        <CryP />
                    </Col>
                </div>
            </Row>



        </nav>
    );
};

export default Header;
