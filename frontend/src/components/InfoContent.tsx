import React from "react";

import Student from "../images/student.svg";
import Strength from "../images/str.png";

import "../css/InfoContent.css"

export default function InfoContent(): React.JSX.Element {

    return (
        <div id="info-container" className="info-container">
            <div className="graduation-container">
                <div className="main-col1">
                    <p>Education</p>

                </div>
            </div>
            <div className="experience-container">
                <div className="main-col2">
                    <p>Experience</p>

                </div>
            </div>
            <div className="graduation-container">
                <div className="graduation">
                    <p><img src={Student} alt=""/>Oxford. Great Britain | 2014-2018</p>
                    <p>Math faculty. Undergraduate education</p>

                </div>
            </div>
            <div className="experience-container">
                <div className="experience">
                    <p><img src={Strength} alt=""/>Math background and familiar with</p>
                    <p>I can work in industry and engineering companies, applying mathematical
                        methods and modeling to solve various problems.
                        Engage in process optimization, data analysis, forecasting,
                        algorithm development and other tasks.</p>

                </div>
            </div>
            <div className="graduation-container">
                <div className="graduation">
                    <p><img src={Student} alt=""/>Oxford. Great Britain | 2014-2018</p>
                    <p>Math faculty. Undergraduate education</p>

                </div>
            </div>
            <div className="experience-container">
                <div className="experience">
                    <p><img src={Strength} alt=""/>Math background and familiar with</p>
                    <p>I can work in industry and engineering companies, applying mathematical
                        methods and modeling to solve various problems.
                        Engage in process optimization, data analysis, forecasting,
                        algorithm development and other tasks.</p>

                </div>
            </div>
            <div className="graduation-container">
                <div className="graduation">
                    <p><img src={Student} alt=""/>Oxford. Great Britain | 2014-2018</p>
                    <p>Math faculty. Undergraduate education</p>

                </div>
            </div>
            <div className="experience-container">
                <div className="experience">
                    <p><img src={Strength} alt=""/>Math background and familiar with</p>
                    <p>I can work in industry and engineering companies, applying mathematical
                        methods and modeling to solve various problems.
                        Engage in process optimization, data analysis, forecasting,
                        algorithm development and other tasks.</p>

                </div>
            </div>
            <div className="graduation-container">
                <div className="graduation">
                    <p><img src={Student} alt=""/>Oxford. Great Britain | 2014-2018</p>
                    <p>Math faculty. Undergraduate education</p>

                </div>
            </div>
            <div className="experience-container">
                <div className="experience">
                    <p><img src={Strength} alt=""/>Math background and familiar with</p>
                    <p>I can work in industry and engineering companies, applying mathematical
                        methods and modeling to solve various problems.
                        Engage in process optimization, data analysis, forecasting,
                        algorithm development and other tasks.</p>

                </div>
            </div>

            <div className="graduation-container">
                <div className="graduation">
                    <p><img src={Student} alt=""/>Oxford. Great Britain | 2014-2018</p>
                    <p>Math faculty. Undergraduate education</p>

                </div>
            </div>
            <div className="experience-container">
                <div className="experience">
                    <p><img src={Strength} alt=""/>Math background and familiar with</p>
                    <p>I can work in industry and engineering companies, applying mathematical
                        methods and modeling to solve various problems.
                        Engage in process optimization, data analysis, forecasting,
                        algorithm development and other tasks.</p>

                </div>
            </div>
        </div>
    )
}