import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    return(
     <div>
    <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#1de6ef8"
    size={65}
    animate={true}
  />
    </div>
    );
}