import React, { useState } from "react";
import WeatherForcastDay from "./WeatherForcastDay";
import"./WeatherForcast.css";
import axios from "axios";



export default function WeatherForcast(props) {
    const[loaded, setLoaded] = useState(false);
    const[forcast, setForcast] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setForcast(response.data.daily);
        setLoaded(true);

    } 

    if (loaded) {
          return(
        <div className="weatherForcast">
         <div className="row">
            {forcast.map(function(dailyForcast, index){
                if (index <6) {
                   return (
           <div className="col" key={index}>
           <WeatherForcastDay data={dailyForcast} />
            </div>
                );
            }
            })}
            
         </div>
        </div>
    );

    } else {
    let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null; 
    }
}