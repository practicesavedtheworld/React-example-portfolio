import './App.css';
import About from "./components/About";
import Info from "./components/Info";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import React from "react";


function App(): React.JSX.Element {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className="info-box">
                <div className="left-col"></div>
                <About/>
                <div className="right-col"></div>
            </div>

            <div className="info-box">
                <div className="left-col"></div>
                <Info/>
                <div className="right-col"></div>
            </div>
            <Slider/>
            <div className="info-box">
                <div className="left-col"></div>
                <Skills/>
                <div className="right-col"></div>
            </div>

            <div className="info-box">
                <div className="left-col"></div>
                <TechStack/>
                <div className="right-col"></div>
            </div>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
