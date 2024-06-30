import Searchbox from "./searchbox";
import Infobox from "./infobox";
import { useState } from "react";

export default function weather(){
    let [weatherinfo,setweatherinfo]=useState({
        city:"delhi",
        feelslike: 24.84,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let updateinfo= (newinfo) => {
        setweatherinfo(newinfo);
    };
    return(
        <div style={{textAlign: "center"}}>
            <h1>weather app by avi</h1>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    )
}