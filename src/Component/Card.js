import React from 'react'
import './Card.css'
export default function Card(props) {
   console.log(props.weather);

  if(!props.weather){
    return <div>loading</div>
  }

   
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

   let time = newTime.split(" ")[1];
  let day ;

  if(isDay){
    day='Day';
  }else{
    day="Night";
  }
   
  return (
    <div className='main_container'>
     
       <div className='name'><span>City </span>{name}</div>
     <div className='country'><span>Country </span>{country}</div>
     <div className='time'><span>Time </span>{time}</div>
     <div className='state'><span>State </span>{state}</div>
     <div className='cloud'><span>Cloud </span>{cloud}</div>
     <div className='feels-like'><span>FeelsLike </span>{feelsLike}</div>
     <div className='temp'><span>Temprature </span>{temprature}<span>°C</span></div>
     <div className='day'>{day}</div>
     <div className='wind_speed'><span>Wind Speed </span>{windSpeed}</div>
     <div className='wind_dir'><span>Wind Direction </span>{windDir}</div>
     <div className='humidity'><span>Humidity </span>{humidity}</div>
     <img src={image} alt='no' className='img'></img>
     <div className='text'>{text}</div>
     
    
     
   </div>
    
  )
}
