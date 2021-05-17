// import necessary packages/modules, components, stylesheets and images
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    Button,
    ButtonGroup,
    Container,
    Jumbotron,
} from "react-bootstrap";
import { crypAPI } from "../Utils/CryP"
import { SearchForm } from '../components/SearchForm'

import { ScaleLoader } from 'react-spinners';
import Project from "../components/navCard";
import { render } from "react-dom";

export class CryP extends React.
    Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    async handleSearch(event) {
    
    }
    render() {
        return (

            <div className="search-form">
                <SearchForm />
            </div>



        );
    }
}
// export Homepage from Homepage.jsx

export default CryP;