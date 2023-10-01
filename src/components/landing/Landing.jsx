import react from "react"
import {useState, useEffect} from "react"
import "../landing/landing.css"
import owlPic from "../../owlPic.png"
import NameTitle from "../name/NameTitle"
import Title from "../name/Title"

const Landing = () => {
    return (
        <>
        <div id="picContainer">
            <img id="binaryOwl" src={owlPic} alt="binary owl pic"/>
            </div>
      <div id="nameTitle"><NameTitle text="Joey Matteucci"/></div> 
       <div id="title"><Title text="< Web Developer />"/></div>
    
        
      
        </>
    )
}

export default Landing