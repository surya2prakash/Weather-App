import React from 'react'

export default function Card(props) {
   console.log(props.weather);



   
        let country = props.weather.location.country;
   let name =props.weather.location.name;
   let newTime = props.weather.location.localtime;
   let state = props.weather.location.region;
   let cloud = props.weather.current.cloud;
   let feelsLike = props.weather.current.feelslike_c;
   let temprature = props.weather.current.temp_c;
   let isDay = props.weather.current.is_day;
   let windSpeed = props.weather.current.wind_kph;
   let windDir = props.weather.current.wind_dir;
   let humidity = props.weather.current.humidity;
   let image= props.weather.current.condition.icon;
   let text = props.weather.current.condition.text;

   
  
   
  return (
    <div>
     
       <div>{name}</div>
     <div>{country}</div>
     <div>{newTime}</div>
     <div>{state}</div>
     <div>{cloud}</div>
     <div>{feelsLike}</div>
     <div>{temprature}</div>
     <div>{isDay}</div>
     <div>{windSpeed}</div>
     <div>{windDir}</div>
     <div>{humidity}</div>
     <div>{image}</div>
     <div>{text}</div>
     
    
     
   </div>
    
  )
}
