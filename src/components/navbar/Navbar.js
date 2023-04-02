import React from "react";
import './Navbar.css';

export default function Navbar() {


    return (
        <>
            <header class="header" id="header">
                <nav class="nav_container">
                    <img alt="Explore" src="logo.png" id='logo' />

                    <div class="nav__menu" id="nav-menu">
                        <i class=" nav__close" id="nav-close">
                            <img src="close.png" alt="X" />
                        </i>
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">Home</a>
                            </li>
                            <li class="nav__item">
                                <a href="#about" class="nav__link">About</a>
                            </li>
                            <li class="nav__item">
                                <a href="#discover" class="nav__link">Discover</a>
                            </li>
                            <li class="nav__item">
                                <a href="#place" class="nav__link">Places</a>
                            </li>
                        </ul>



                    </div>

                    <div class="nav__toggle" id="nav-toggle">
                        <img src="menu.png" alt=".." />
                    </div>
                </nav>
            </header>
        </>
    );
}