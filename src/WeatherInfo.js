import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    console.log(props.info.icon_url);
    return (
        <div className="weatherInfo">
             <h1>{props.info.city}</h1>
        <ul>
            <li>
                <FormattedDate date={props.info.date} />
            </li>
            <li className="text-capitaliyaze">{props.info.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6 d-flex align-items-centerd ">
            <WeatherIcon code={props.info.icon_url}/>
            <WeatherTemperature  celsius={props.info.temperature} />
            </div>
            <div className="col-6">
                <ul>
                    <li>humidity: {props.info.humidity}%</li>
                    <li>wind: {props.info.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
}