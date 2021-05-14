// import necessary packages/modules, components, stylesheets and images
import React, { useState, useEffect } from "react";
import {
    Button,
    ButtonGroup,
    Container,
    Jumbotron,
} from "react-bootstrap";
import { weatherAPI } from "../Utils/Weather"
import { ScaleLoader } from 'react-spinners';

export function MainP() {
    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('Salt lake city');
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const data = await weatherAPI(city);
            setWeatherData(data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }
    console.log(weatherdata)
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
            <Jumbotron id="main-jumbotron">
                <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
                <div className="search-form">
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name" />
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
                        {weatherdata !== null ? (
                            <div className="main-container">
                                <h4>Live Weather Condition</h4>
                                <div className="weather-icon">
                                    <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon" />
                                </div>
                                <h3>{weatherdata.weather[0].main}</h3>
                                <div className="temprature">
                                    <h1>{parseFloat((weatherdata.main.temp - 273.15) * 1.80 + 32).toFixed(1)}&deg;f</h1>
                                </div>
                                <div className="location">
                                    <h3><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
                                </div>
                                <div className="temprature-range">
                                    <h6>Min: {parseFloat((weatherdata.main.temp_min - 273.15) * 1.80 + 32).toFixed(1)}&deg;f
                || Max: {parseFloat((weatherdata.main.temp_max - 273.15) * 1.80 + 32).toFixed(1)}&deg;f
                || Humidity: {weatherdata.main.humidity}%</h6>
                                </div>
                            </div>
                        ) : null}
                    </>
                )}
            </Jumbotron>
        </Container>
    );
}
// export Homepage from Homepage.jsx

export default MainP;