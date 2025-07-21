
import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
import axios from "axios";


function App() {

  const[search,setSearch] = useState("");
  

  function changeHandler(event){
        setSearch(event.target.value);
  }
  
async function submitHandler(event){
     event.preventDefault();

     try{
       
      const response = await axios.post(url,{
        search:search
      });

      const result = response.data;

      console.log(result);

     }catch(error){
       console.log(error);
     }

}


  return (
    <div className="App">
    <form  onSubmit={submitHandler}>
            
            <input type='text' placeholder='search weather' onChange={changeHandler} value={search}></input>
            <button>Search</button>
        </form>

        <Card search={search}/>
    </div>
  );
}

export default App;
