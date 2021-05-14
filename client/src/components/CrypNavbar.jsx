import React from 'react';
import cryCard from '../Pages/Cryptopage'
import CryP from '../Pages/Cryptopage'
import {
    Row,
    Col,

} from "react-bootstrap";

function handleClick(e) { e.preventDefault(); console.log('The link was clicked.'); }

export const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-black-transparent shadow">
            <div></div>
            <Row>
                <Col>
                    <h1>Command Center</h1>
                </Col>



                <div className="search-form">
                    <Col>

                        <CryP />
                    </Col>
                </div>
            </Row>

            <cryCard></cryCard>
        </nav>
    );
};

export default Header;
