import React, {useState} from "react";
import Headroom from "react-headroom";
import './Navigation.css';

const Navigation = () => {
    const [active, setActive] = useState('nav-menu');
    const [navHamburgerToggle, setHamburgerToggle] = useState('nav-hamburger');

    const navHamburger = () => {
        active === 'nav-menu' 
            ? setActive('nav-menu nav-active')
            : setActive('nav-menu');

        navHamburgerToggle === 'nav-hamburger'
            ? setHamburgerToggle('nav-hamburger nav-hamburger-toggle')
            : setHamburgerToggle('nav-hamburger');
    };


    return (
        <Headroom>
            <header>
                <a href="/" className="logo">
                    <span className="logo-signs">&lt;</span>
                    <span className="logo-name">Jb.</span>
                    <span className="logo-signs">/&gt;</span>
                </a>
                <nav>
                    <ul className={active}>
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                    <div onClick={navHamburger} className={navHamburgerToggle}>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                    </div>
                </nav>
            </header>
        </Headroom>
    )
}

export default Navigation;