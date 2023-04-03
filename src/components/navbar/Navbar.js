import React, { useEffect } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom'

export default function Navbar() {

    const openMenu = () => {
        try {
            let e = document.getElementById('nav-menu')
            let menuIcon = document.getElementById('nav-toggle')

            e.style.display = 'inline-block'
            menuIcon.style.visibility = 'hidden'

        } catch (e) {

        }

    }

    const closeMenu = () => {
        let e = document.getElementById('nav-menu')
        let menuIcon = document.getElementById('nav-toggle')
        e.style.display = 'none'
        menuIcon.style.visibility = 'visible'

    }

    const setActiveLink = () => {
        let active = window.location.pathname;
        let navItems = document.getElementsByClassName('nav__item')

        for (let e of navItems) {
            if (e.classList.contains('active-link')) {
                e.classList.remove('active-link')
            }
        }


        if (active === '/') {
            navItems[0].classList.add('active-link')
        }
        else if (active === '/about') {
            navItems[1].classList.add('active-link')
        }
        else if (active === '/places') {
            navItems[2].classList.add('active-link')
        }

        if (window.innerWidth < 700) {
            closeMenu()
        }
    }



    useEffect(() => {
        try {
            setActiveLink();
        }
        catch (e) {

        }
    })

    return (
        <>
            <header className="header" id="header">
                <nav className="nav_container">
                    <img alt="Explore" src="logo.png" id='logo' />

                    <div className="nav__menu" id="nav-menu">
                        <i className=" nav__close" id="nav-close" onClick={closeMenu}>
                            <img src="close.png" alt="X" />
                        </i>
                        <ul className="nav__list">
                            <li className="nav__item " onClick={setActiveLink}>
                                <Link to={'/'} className="nav__link">
                                    Home
                                </Link>

                            </li>
                            <li className="nav__item" onClick={setActiveLink}>

                                <Link to={'/about'} className="nav__link">
                                    About
                                </Link>
                            </li>
                            {/* <li className="nav__item">
                                <a href="#discover" className="nav__link">Discover</a>
                            </li> */}
                            <li className="nav__item" onClick={setActiveLink}>

                                <Link to={'/places'} className="nav__link">
                                    Places
                                </Link>
                            </li>
                        </ul>



                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={() => { openMenu() }}>
                        <img src="menu.png" alt=".." />
                    </div>
                </nav>
            </header>
        </>
    );
}