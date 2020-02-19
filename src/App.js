import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./Picture";
import Date from "./Date";
import Explanation from "./Explanation";
import Title from "./Title";




function App() {

  const [ data, setData ] = useState([]);

 useEffect( () => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=PIBqTAFiTKERrk90I64dzwUgNoZJoeBqQJKAcOk4')
   .then( res => {
     setData(res.data);
    console.log(res)
   })
  .catch( res => console.log('error'))}
 , [])

  return (
    <div className="App">
        <Title title={data.title} />
        <Picture data={data.hdurl}/>
        <Date date={data.date} />
        <Explanation bio={data.explanation} />

    </div>
  );
}

export default App;
