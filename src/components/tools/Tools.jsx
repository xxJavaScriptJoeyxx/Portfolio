import React from "react"

import mySass from "../tools/sassSVG.svg"
import myBoot from "../tools/bootstrapSVG.svg"
import myCSS from "../tools/cssSVG.svg"
import myHTML from "../tools/htmlSVG.svg"
import myEXP from "../tools/expressSVG.svg"
import myGH from "../tools/gh.svg"
import myJavaScript from "../tools/javascriptSVG.svg"
import myjQuery from "../tools/jquerySVG.svg"
import myMongo from "../tools/mongodbSVG.svg"
import myNodejs from "../tools/nodejsSVG.svg"
import myReact from "../tools/reactSVG.svg"

const Tools = () => {

    const svgStyle = {
        height: '95px',
        width: '95px',
    };

    return (
        <div>

            <h2 id="toolTitle">Tools and Languages</h2>
        <div className="iconContainer">
        
        <img style={svgStyle}src={mySass} alt="Sass Icon" />

        <img style={svgStyle}src={myBoot} alt="Bootstrap Icon" />

        <img style={svgStyle}src={myCSS} alt="CSS Icon" />

        <img style={svgStyle}src={myHTML} alt="HTML Icon" />

        <img style={svgStyle}src={myJavaScript} alt="JS Icon" />

        <img style={svgStyle}src={myNodejs} alt="Node Icon" />

        <img style={svgStyle}src={myEXP} alt="Expresscon" />
        <img style={svgStyle}src={myMongo} alt="Mongo Icon" />
        <img style={svgStyle}src={myReact} alt="React Icon" />
        <img style={svgStyle}src={myjQuery} alt="JQ Icon" />
        <img style={svgStyle}src={myGH} alt="GH Icon" />
         
         
        
        </div>
        
        
        </div>
    )
}

export default Tools