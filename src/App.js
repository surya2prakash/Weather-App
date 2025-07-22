
import {   useState } from 'react';
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


  



  return (
    <div className="App">
    <form  onSubmit={submitHandler} className='form'>
            
            <input type='text' placeholder='search weather' onChange={changeHandler} value={search} className='input-box'></input>
            <button className='search-button'>Search</button>
        </form>

       {weather === null ? (
        <p className='shownothing'>Please search a location...</p>  // or show nothing or loading
                           ) : (
                                  <Card weather={weather} />
)}
    </div>
  );
}

export default App;
