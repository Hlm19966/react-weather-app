import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";



export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.temperature.current,
            wind: Math.round(response.data.wind.speed),
            date : new Date(response.data.time * 1000),
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon_url: response.data.condition.icon_url,
            city: response.data.city
        });
        setReady(true);
    }


    function search() {
    const apiKey= "4c05132bc5ac2f372o09eet8a2bb888d";
    const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (ready) { 
        return(
        <div className="weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search a city" className="form-control"  autoFocus="on" onChange={handleCityChange}/></div>
                    <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary" /></div>
                </div>
            </form>
            <WeatherInfo info={weatherData}/>
            <WeatherForcast />
        </div>
    );

    } else {
    search()
    return "loading";
    }
}