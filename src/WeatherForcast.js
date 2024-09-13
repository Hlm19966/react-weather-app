import React from "react";
import WeatherIcon from "./WeatherIcon";
import"./WeatherForcast.css";



export default function WeatherForcast() {
    return(
        <div className="weatherForcast">
         <div className="row">
            <div className="col">
                <div className="WeatherForcast-day">Thu</div>
                <WeatherIcon code="clear-sky-day" size={36} />
                <div className="WeatherForcast-temperatures">
                 <span className="WeatherForcast-temperature-max">19°</span>
                 <span className="WeatherForcast-temperature-min">10°</span>
                </div>
            </div>
         </div>
        </div>
    );
}