// import necessary packages/modules, components, stylesheets and images
import React, { useState, useEffect } from "react";
import {
    Button,
    ButtonGroup,
    Container,
    Jumbotron,
} from "react-bootstrap";
import { crypAPI } from "../Utils/CryP"
import SearchForm from '../components/SearchForm'

import { ScaleLoader } from 'react-spinners';
import Project from "../components/navCard";

export function CryP() {
    const [crydata, setCryData] = useState(null);
    const [cryPIn, setCry] = useState('');

    const getData = async () => {

        const data = await crypAPI(cryPIn);
        setCryData(data[0].price);
        console.log(data, "aj")
    }
    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    useEffect(() => {
        getData();
    }, []);
    function handleClick(e) { e.preventDefault(); console.log('The link was clicked.'); }


    return (
        <>


            <div className="search-form">

                <SearchForm />
            </div>



        </>
    );
}
// export Homepage from Homepage.jsx

export default CryP;