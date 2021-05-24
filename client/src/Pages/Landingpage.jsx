import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import GlobalProvider from './Utils/GlobalContext';
import { MainP } from './Homepage';
import { CryP } from './Cryptopage';
import Header from '../components/CrypNavbar'
import { Row, Col } from 'react-bootstrap';
import './Landingpage.css'

// import Navbar from './components/Navbar';

function land() {
    return (
        <>
            <Row>
                <Col>
                    <div className='header'>
                        <Header />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <MainP></MainP>
                </Col>
            </Row>
            {/* <CryP></CryP> */}
        </>


    );
}


export default land;