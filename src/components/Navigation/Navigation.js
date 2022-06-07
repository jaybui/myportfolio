import React from "react";
import Headroom from "react-headroom";
import './Navigation.css';

const Navigation = () => {
    return (
        <Headroom>
            <header>
                <a href="/" className="logo">
                    <span className="grey-color"> &lt;</span>
                    <span className="logo-name">Jb. </span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <nav>
                    <ul className="navlinks">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Headroom>
    )
}

export default Navigation;