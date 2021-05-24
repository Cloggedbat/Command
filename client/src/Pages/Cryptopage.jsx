// import necessary packages/modules, components, stylesheets and images
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import {
    Button,
    ButtonGroup,
    Container,
    Jumbotron,
    Row,
    Col,


} from "react-bootstrap";
import Nomics from "nomics";
import Card from '../components/Card'
import SearchForm from '../components/SearchForm'
import nomics from '../Utils/CryP'
import MovieDetail from "../components/cryPdetail";


export class CryP extends React.Component {
    state = {
        result: [],
        search: '',
        id: []
    };
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.searchCryp("");
    }




    searchCryp = query => {
        fetch("https://api.nomics.com/v1/currencies/ticker?key=fffc082c271302b57c140b91af190d16&ids=" + query + "&interval=1d,30d&convert=EUR&per-page=100&page=1")
            .then(response => response.json())
            .then(data => console.log(data))
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchCryp(this.state.search);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card heading={this.state.result.map(result => {
                            console.log(result[0])
                            return (<Card key={result[0]} id={result[0]} />)
                        }) || "Search to display your Crypto"}>

                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container >
        );
    }
}

// export Homepage from Homepage.jsx
export default CryP;