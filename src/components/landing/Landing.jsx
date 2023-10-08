import React from "react"
import {useState, useEffect} from "react"
import "../landing/landing.css"
import owlPic from "../../owlPic.png"
import NameTitle from "../name/NameTitle"
import Title from "../name/Title"
import About from "../about/About"
import Tools from "../tools/Tools"
import me from "../about/me.jpg"
import Carousel from "../carousel/Carousel"
// import {images} from "../carousel/data"


const Landing = () => {
    return (
        <>
        <div className="centered">
        <div id="picContainer">
            <img id="binaryOwl" className="binaryOwl" src={owlPic} alt="binary owl pic"/>
            </div>
            <div className="nameTitleContainer">
                <div className="nameTitle"><NameTitle text="Josephine Matteucci" /></div>
            </div>
            <div className="imgContainer">
            <div id="imgDiv"><img src={me} alt="pic of me" /></div>
            </div>
            <div className="titleContainer">
       <div id="title"><Title text="< Web Developer />"/></div>
       </div>
       
       <div id="aboutDiv"><About /></div>
     
       <Tools/>
        
       <div id="carouselDiv">
        <h2 id="projectDiv">My Projects</h2>
        <Carousel />
      </div> 


      </div>

     


    
        </>
    )
}

export default Landing