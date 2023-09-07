import React from "react";
import "../css/TechStack.css";

import BlenderImage from "../images/tech_logo/Logo_Blender.svg";
import ZBrushImage from "../images/tech_logo/ZBrush.svg";
import Image3dsMax from "../images/tech_logo/3ds max.svg";
import UnityLogo from "../images/tech_logo/Unity_logo.svg";
import MudboxLogo from "../images/tech_logo/mudbox_logo.svg";

export default function TechStack(): React.JSX.Element {
    return (
        <div className="stack-container">
            <div className="tech-place">
                <div className="technology">
                    <img src={BlenderImage} alt=""/>
                    <h2> Blender</h2>
                    <p> Professional free and open source software for 3D computer graphics</p>

                </div>
            </div>
            <div className="tech-place">
                <div className="technology">
                    <img src={Image3dsMax} alt=""/>
                    <h2> 3ds MAX</h2>
                    <p> Professional 3D animation and visualization software for game creation and design.
                    </p>
                </div>
            </div>
            <div className="tech-place">
                <div className="technology">
                    <img src={ZBrushImage} alt=""/>
                    <h2> ZBrush</h2>
                    <p> A 3D modeling program created by the company.
                        A distinctive feature of this software is the simulation of the process of
                        “sculpting” a three-dimensional sculpture</p>
                </div>
            </div>
            <div className="tech-place">
                <div className="technology">
                    <img src={UnityLogo} alt=""/>
                    <h2> Unity</h2>
                    <p> Unity is a cross-platform computer development environment developed by the American company
                        Unity Technologies.
                        Unity allows you to create applications that run on more than 25 different platforms</p>
                </div>
            </div>
            <div className="tech-place">
                <div className="technology">
                    <img src={MudboxLogo} alt=""/>
                    <h2> Autodesk Mudbox</h2>
                    <p> A professional graphics program designed for digital sculpting and texture coloring of 3D
                        models.</p>
                </div>
            </div>


        </div>
    )
}