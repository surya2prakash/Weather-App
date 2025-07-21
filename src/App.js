
import {  useEffect, useState } from 'react';
import './App.css';

import axios from "axios";
import Card from './Component/Card';


function App() {

  const[search,setSearch] = useState("");

  const[weather,setWeather] = useState(null);


  function changeHandler(event){
        setSearch(event.target.value);
  }


    async function submitHandler(event){
     event.preventDefault();

    setWeather(search);

}

useEffect(()=>{

  async function fetchWeather(){

  
   let api_key ="acef853debb7464a942122236250606";

     let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${search}`;

     try{
       
      const response = await axios.get(url);

      const result = response.data;

      setWeather(result);

     }catch(error){
       console.log(error);
     }

    }


    fetchWeather();
},[search])
  



  return (
    <div className="App">
    <form  onSubmit={submitHandler}>
            
            <input type='text' placeholder='search weather' onChange={changeHandler} value={search}></input>
            <button>Search</button>
        </form>

       <Card weather={weather}/>
    </div>
  );
}

export default App;
