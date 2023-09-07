import "../css/Skills.css";
import React from "react";

export default function Skills(): React.JSX.Element {
    return (
        <div className="skills__levels">
            <div className="skills-wrapper">
                <h2> Skills and Technologies </h2>
            </div>

            <div className="skills__level models">
                <div className="skills__level-header">
                    <h3 className="skills__level-title label">Models creating</h3>
                    <p className="skills__level-digit">90%</p>
                </div>
                <div className="skills__level-scale">
                    <div
                        className="skills__level-fill reveal-in reveal-in-left"
                        style={{
                            width: "90%",
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                        }}
                    ></div>
                </div>
            </div>
            <div className="skills__level soft-skills">
                <div className="skills__level-header">
                    <h3 className="skills__level-title label">Soft skills</h3>
                    <p className="skills__level-digit">95%</p>
                </div>
                <div className="skills__level-scale">
                    <div
                        className="skills__level-fill reveal-in reveal-in-left"
                        style={{
                            width: "95%",

                        }}
                    ></div>
                </div>
            </div>
            <div className="skills__level music">
                <div className="skills__level-header">
                    <h3 className="skills__level-title label">Music</h3>
                    <p className="skills__level-digit">100%</p>
                </div>
                <div className="skills__level-scale">
                    <div
                        className="skills__level-fill reveal-in reveal-in-left"
                        style={{
                            width: "100%",
                        }}
                    ></div>
                </div>
            </div>
            <div className="skills__level design">
                <div className="skills__level-header">
                    <h3 className="skills__level-title label">Design creating</h3>
                    <p className="skills__level-digit">70%</p>
                </div>
                <div className="skills__level-scale">
                    <div
                        className="skills__level-fill reveal-in reveal-in-left"
                        style={{
                            width: "70%",
                        }}
                    ></div>
                </div>
            </div>
            <div className="skills__level origination">
                <div className="skills__level-header">
                    <h3 className="skills__level-title label">Creativity</h3>
                    <p className="skills__level-digit">85%</p>
                </div>
                <div className="skills__level-scale">
                    <div
                        className="skills__level-fill reveal-in reveal-in-left"
                        style={{
                            width: "85%",
                        }}
                    ></div>
                </div>
            </div>
            <div className="skills__level self-presentation">
                <div className="skills__level-header">
                    <h3 className="skills__level-title label">
                        Skill to demonstrate skills
                    </h3>
                    <p className="skills__level-digit">50%</p>
                </div>
                <div className="skills__level-scale">
                    <div
                        className="skills__level-fill reveal-in reveal-in-left"
                        style={{
                            width: "50%",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}