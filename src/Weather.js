import React from "react";
import "./Weather.css"

export default function Weather() {
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
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6 d-flex align-items-centerd ">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly_cloudy" className="mr-4" />
            <span className="temperature">6</span>
            <span className="unit">°c</span> 
            </div>
            <div className="col-6">
                <ul>
                    <li>precipitation: 15%</li>
                    <li>humidity: 72%</li>
                    <li>wind: 13km/h</li>
                </ul>
            </div>
        </div>
        
        </div>
    );
}