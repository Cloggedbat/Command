import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import GlobalProvider from './Utils/GlobalContext';
import { MainP } from './Homepage';
import { CryP } from './Cryptopage';
import Header from '../components/CrypNavbar'


// import Navbar from './components/Navbar';

function land() {
    return (
        <>
            <Header />
            <br />
            <br />

            {/* <MainP></MainP> */}
            {/* <CryP></CryP> */}
        </>


    );
}


export default land;