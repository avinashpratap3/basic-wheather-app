import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";

import { useState } from 'react';
export default function searchbox({ updateinfo }){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    const url="https://api.openweathermap.org/data/2.5/weather";
    const api_key= "e46cac149906945982aaab7abf93ce47";
    let getweatherinfo = async()=>{
       try{
        let response= await fetch(`${url}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        
        let result={city:city,temp: jsonResponse.main.temp,temp_min: jsonResponse.main.temp_min ,temp_max: jsonResponse.main.temp_max ,humidity: jsonResponse.main.humidity,feelslike: jsonResponse.main.feelslike,weather: jsonResponse.weather[0].description };
        
        return result;
       }catch(err){
        throw err;
       }
    
    };
    
    let handlechange= (event)=>{
        setcity(event.target.value);

    }
    let handlesubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo= await getweatherinfo();
        updateinfo(newinfo);
        }catch(err){
            seterror(true);
        }
        
        

    };
    return(
        <div className='search'>
            <form onSubmit={handlesubmit}>
            <TextField onChange={handlechange} required value={city} id="city" label="City Name" variant="outlined" /><br /><br />
            <Button type='submit' variant="contained">Search</Button>
            {error && <p>No such place exist</p>};

            </form>
           
        </div>
    );
}