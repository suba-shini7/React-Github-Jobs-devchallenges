import React from "react";
import { data } from "../data";
import { Link, useParams} from "react-router-dom";


export const Cards = (props) => {

    
  return (

    <div className="main-cards">
      <div className="image-container">
        <img className="company-logo" src={props.logo} alt="logo"></img>
      </div>
      <div>
       <Link to={`/desc`}><h2>{props.name}</h2></Link> 
        <p>{props.title}</p>
       
      </div>
    </div>
    
  );
};
