import React from "react"
import me from "../about/me.jpg"

const About = () => {
    
    return (

       
        <div id="aboutDiv">

<p id="joeyTitle">What's Joey About?</p>
            <div id="imgDiv"><img src={me} alt="pic of me" /></div>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Consequuntur voluptas eveniet magni voluptatum ratione in ab reiciendis totam, 
                asperiores minima doloribus! Aliquid, nostrum. 
                Possimus suscipit molestias porro consequuntur esse nemo dolorem laudantium blanditiis labore. 
                Animi quam voluptatem hic temporibus repellendus facilis quos aut, fuga porro amet incidunt illum maxime commodi pariatur?
                In minus tempore error similique qui at porro iusto.</p>

        
        </div>
    )
}

export default About