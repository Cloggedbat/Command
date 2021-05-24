// import necessary packages/modules, components, stylesheets and images
import React, { useState, useEffect } from "react";
import {
    Button,
    ButtonGroup,
    Container,
    Jumbotron,
} from "react-bootstrap";
import Card from '../components/Card'
import { crypAPI } from "../Utils/CryP"
import { ScaleLoader } from 'react-spinners';

export function MainP() {
    const [cryData, setcryData] = useState(null);
    const [priceData, getPrice] = useState('null')
    const [Coin, setCryp] = useState(' ');
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const data = await crypAPI(Coin);
            setcryData(data[0].id);
            getPrice(data[0].price)

            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }
    console.log(priceData)
    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    useEffect(() => {
        getData();
    }, []);
    return (
        <Container id="main-container">
            <h2 className="title"><i className="fa fa-money"></i>   Daily Crypto</h2>
            <div className="search-form">
                <input type="text" value={Coin} onChange={(e) => setCryp(e.target.value)} placeholder="Enter your coin name" />
                <button type="button" onClick={() => getData()}>Search</button>
            </div>
            {loading ? (
                <div className="loader-container">
                    <ScaleLoader
                        css={override}
                        size={200}
                        color={"#fff"}
                        loading={loading}
                    />
                </div>
            ) : (
                <>
                    {cryData !== null ? (
                        <Card className="main-container">
                            <h4>Live Price Data</h4>
                            <h4>{cryData}</h4>
                            <h4>{priceData}</h4>
                        </Card>
                    ) : null}
                </>
            )}
        </Container>
    );
}
// export Homepage from Homepage.jsx

export default MainP;