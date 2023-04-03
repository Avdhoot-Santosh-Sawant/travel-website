import React from "react";
import './About.css'
import Footer from '../footer/Footer'

export default function About() {


    return (
        <>
            <div id="explore-about">

                <h2 id='about'>   Welcome to EXPLORE</h2>

                <div className="about-data">
                    <div>
                        <p className="about_info">
                            Are you ready to discover new places, make unforgettable memories, and experience the world like never before? You've come to the right place! At <span style={{ fontWeight: '700' }}>EXPLORE</span>, we love travel and we're here to help you plan your next adventure.
                        </p>

                        <p className="about_info">
                            We can help you find the best places to go, the most fun things to do, and the best places to stay. We've got lots of helpful tips and information to make planning your trip easy and stress-free.
                        </p>
                    </div>

                    <div>
                        <div className="img-holder">
                            <img alt="." loading="lazy" src="about_img1.jpg" id="about-img1" />
                            <img alt="." loading="lazy" src="about_img2.jpg" id="about-img2" />
                        </div>
                    </div>
                </div>


                <h2 id="why">
                    Why Travel with Us?
                </h2>

                <div className="why">
                    <h3>
                        Here are some reasons to choose us as your travel partner:

                    </h3>

                    <div>
                        <ul>
                            <li>
                                We can give you advice from people who love to travel and know a lot about different places.

                            </li>
                            <li>


                                We have lots of information about destinations, activities, and places to stay, so you can make good choices.</li>

                            <li>


                                We can help you plan a trip that is just right for you and your interests.

                            </li>
                            <li>


                                We have good prices and special deals on travel packages.
                            </li>

                        </ul>
                    </div>

                </div>


                <h2 id="mission">

                    Our Mission
                </h2>

                <div className="mission">

                    <p>
                        At <span style={{ fontWeight: '700' }}>EXPLORE</span>, our goal is to help people explore the world and make connections with new people and cultures. We believe that travel is a great way to learn new things, have fun, and make memories that last a lifetime.

                    </p>

                    <p>
                        We want to provide you with information, resources, and inspiration to help you plan and enjoy your travels. We also care about the environment and the people who live in the places we visit, so we try to be responsible and respectful travelers.

                    </p>

                    <p>
                        Thank you for choosing <span style={{ fontWeight: '700' }}>EXPLORE</span> as your travel partner. We're excited to help you plan your next adventure!

                    </p>

                </div>
                <Footer />
            </div>
        </>
    );
}