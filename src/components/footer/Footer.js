/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css'

export default function Footer() {
    return (

        <>
            <footer class="footer">
                <hr />
                <div class="footer__content">
                    <div class="footer__data">
                        <h3 class="footer__title">
                            <img alt='logo' src={'logo.png'} />
                        </h3>
                        <p class="footer__description">
                            Travel you choose the <br />
                            destination, we offer you the <br />
                            experience.
                        </p>
                        <div>
                            <a
                                href=""
                                class="footer__social"
                                target='_blank'

                            >
                                <i class="ri-facebook-box-fill"></i>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                class="footer__social"
                            >
                                <i class="ri-twitter-fill"></i>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                class="footer__social"
                            >
                                <i class="ri-instagram-fill"></i>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                class="footer__social"
                            >
                                <i class="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div class="footer__data">
                        <h3 class="footer__subtitle">About</h3>
                        <ul>
                            <li class="footer__item">
                                <a href="" class="footer__link">About Us</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__link">Features</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__link">New & Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__data">
                        <h3 class="footer__subtitle">Company</h3>
                        <ul>
                            <li class="footer__item">
                                <a href="" class="footer__link">Team</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__link">Plan y Pricing</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__link">Become a member</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__data">
                        <h3 class="footer__subtitle">Support</h3>
                        <ul>
                            <li class="footer__item">
                                <a href="" class="footer__link">FAQs</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__link">Support Center</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer__rights">
                    <p class="footer__copy">
                        &#169; All rigths reserved.
                    </p>
                    <div class="footer__terms">

                        <a href="" class="footer__terms-link">Terms & Agreements</a>
                        <a href="#" class="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>

            </footer>

        </>
    )
}