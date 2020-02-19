import React from "react";
import "../src/picture.css"






function Picture (props) {

//const data1 = props.data;


//console.log(props);
    
    return (
        <div className="pic-container">
            <img src={props.data} />

        </div>

    )






}


export default Picture;