/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css'

export default function Footer() {
    return (

        <>
            <footer className="footer">
                <hr />
                <div className="footer__content">
                    <div className="footer__data">
                        <h3 className="footer__title">
                            <img alt='logo' src={'/logo.png'} />
                        </h3>
                        <p className="footer__description">
                            Travel you choose the <br />
                            destination, we offer you the <br />
                            experience.
                        </p>
                        <div>
                            <a
                                href=""
                                className="footer__social"
                                target='_blank'

                            >
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                className="footer__social"
                            >
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                className="footer__social"
                            >
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                className="footer__social"
                            >
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">New & Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Plan y Pricing</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Become a member</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">
                        &#169; All rigths reserved.
                    </p>
                    <div className="footer__terms">

                        <a href="" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>

            </footer>

        </>
    )
}