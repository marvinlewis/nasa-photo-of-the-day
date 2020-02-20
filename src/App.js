import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./Picture";
import Date from "./Date";
import Explanation from "./Explanation";
import Title from "./Title";
import MediaType from "./MediaType";
import NavBar from "./NavBar";
import TopPageStyle from "./TopPageStyle";




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
        <NavBar />
        <Title title={data.title} />
        <Picture data={data.hdurl}/>
        <Date date={data.date} />
        <Explanation bio={data.explanation} />
        <MediaType media={data.media_type} />

    </div>
  );
}

export default App;
