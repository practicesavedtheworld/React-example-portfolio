import React, {useState, useEffect} from 'react';

import Logo from "../images/logo.png";
import Burger from "../images/buttons/burger.svg";

import "../css/Header.css";

export default function Header(): React.JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        const header: HTMLElement | null = document.querySelector('.main-header');

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (header) {
                if (prevScrollPos > currentScrollPos) {
                    header.style.transform = 'translateY(0)';
                } else {
                    header.style.transform = 'translateY(-100%)';
                }
            }

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="main-header">
            <a href=""><img src={Logo} alt=""/></a>
            <div className={`menu__header ${isMenuOpen ? 'show' : ''}`}>
                <nav>
                    <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
                        <li><a href="#about"><h2>About</h2></a></li>
                        <li><a href="#info-container"><h2>Educ and experience</h2></a></li>
                        <li><a href="#container"><h2>Works and skills</h2></a></li>
                        <li><a href="#contacts"><h2>Contacts</h2></a></li>
                    </ul>
                </nav>
                <button className="burger-button" onClick={toggleMenu}>
                    <img src={Burger} className="burger-icon" alt="Burger Icon"/>
                </button>
            </div>
        </div>
    );
}