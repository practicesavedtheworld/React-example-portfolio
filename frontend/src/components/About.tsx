import "../css/About.css";
import Image from "../images/my_photo.jpg";
import React from "react";

export default function About(): React.JSX.Element {
    return (
        <div id="about" className="about">
            <img src={Image} alt=""/>
            <div className="info"><p>Hi, I am Nick.
                I posted information about myself and my projects on the site.
                The main goal is to show the portfolio of a beginner 3D artist. Currently actively looking for a job
            </p>
                <p>I am a 3D artist and I create impressive and painterly 3D models, animations and renderings.
                    My passion for art and computer graphics allows me to turn ideas into amazing visual works.

                    My creativity is based on the use of specialized software tools and technologies that allow me to
                    create three-dimensional objects, environments and characters. I can work with a variety of styles
                    and genres,
                    from realistic and detailed models to fantastic and abstract compositions.

                    My work involves a process of modeling, texturing, lighting and animation that all work together
                    to create impressive visual effects. I also have rendering skills to give my work a photorealistic
                    look.</p></div>


        </div>
    )
}