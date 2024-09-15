import React from "react";
import WeatherIcon from "./WeatherIcon";
 
export default function WeatherForcastDay(props) {


    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        return days[day];
    }
    return(
    <div>
         
                <div className="WeatherForcast-day">{day()}</div>
                <WeatherIcon code={props.data.condition.icon_url} size={36} />
                <div className="WeatherForcast-temperatures">
                 <span className="WeatherForcast-temperature-max">{Math.round(props.data.temperature.maximum)}°</span>
                 <span className="WeatherForcast-temperature-min">{Math.round(props.data.temperature.minimum)}°</span>
              </div>  
    </div>
    );
}