import React, { useEffect, useState } from 'react';

const Weatherapp=()=>{

const [city, setCity] = useState("");
const[search, setSearch] = useState("kolkata");

useEffect(()=>{
    const fetchApi= async()=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f9b8f7acf05776a66b298da38454aa3a`;
        const response = await fetch(url);
        const resjson = await response.json();
        setCity(resjson.main);
    }
    fetchApi();
},[search])

    return(
        <>
           <div className="box">
               <div className="inputData">
                   <input type="search" 
                   value={search}
                   className="inputFeild"
                   onChange={(event)=>{
                    setSearch(event.target.value)}}
                    />
               </div>

            {!city ? (
                <p> No data found</p>
            ) : (
            <div>
           <div className="info">
               <h2 className="location">
               <i className="fas fa-street-view"> </i>{search}</h2>
                <h1 className="temp">
                   {city.temp} Cel
                </h1>
                <h3 className="tempmin_max">Min : {city.temp_min} Cel | Max: {city.temp_max} Cel</h3>
           </div>
           <div className="wave"></div>
           <div className="wave -two"></div>
           <div className="wave -three"></div>
           </div>
           )}
           </div>
            
        </>
    )
}

export default Weatherapp;