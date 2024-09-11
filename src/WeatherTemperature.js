import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
     event.preventDefault();
     setUnit("Fahrenheit")
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    if (unit === 'celsius') {
        return (
     <div className="col-6 d-flex align-items-centerd">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit d-inline-flex">°c / <a href="/" onClick={convertToFahrenheit}>°F</a></span> 
     </div>
    );
    } else {
        let Fahrenheit= (props.celsius * 9/5) + 32;
        return (
            <div className="col-6 d-flex align-items-centerd">
            <span className="temperature">{Math.round(Fahrenheit)}</span>
            <span className="unit d-inline-flex"><a href="/" onClick={convertToCelsius}>°c </a> / °F</span> 
         </div>
        );
    }
    
}