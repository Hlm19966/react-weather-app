import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.temperature.current,
            wind: Math.round(response.data.wind.speed),
            date : new Date(response.data.time * 1000),
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon_url: "http://shecodes-assets.s3.amazonaws.com",
            city: response.data.city
        });
        setReady(true);
    }

    if (ready) { 
        return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search a city" className="form-control"  autoFocus="on"/></div>
                    <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary" /></div>
                </div>
            </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitaliyaze">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6 d-flex align-items-centerd ">
            <img src={weatherData.icon_url} alt={weatherData.description} className="mr-4" />
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°c</span> 
            </div>
            <div className="col-6">
                <ul>
                    <li>humidity: {weatherData.humidity}%</li>
                    <li>wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
        
        </div>
    );

    } else {
    const apiKey= "4c05132bc5ac2f372o09eet8a2bb888d";
    const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
    }
}