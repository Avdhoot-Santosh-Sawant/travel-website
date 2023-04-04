import React from 'react';
import './Home.css'
import '../About/About.css'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <div >
                <div className='img-con'>
                    <img alt='' src='home.png' className='bg-img' />
                    <div className='home-info'>

                        <h1>Explore the best beautiful places</h1>
                        <h3 style={{ margin: '20px' }}>Discover your next adventure with us</h3>
                        <div style={{ margin: '40px' }}>
                            <span id='expore_btn'>
                                <Link to={'/places'} style={{ textDecoration: 'none', color: 'white' }}>
                                    Explore</Link>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <h2>With Our Experience
                        We Will Serve You</h2>

                    <div className="exp_data">
                        <div>
                            <h2>10</h2>
                            <h3>Year
                                Experience</h3>
                        </div>
                        <div>
                            <h2>50</h2>
                            <h3>Complete
                                tours</h3>
                        </div>
                        <div>
                            <h2>100+</h2>
                            <h3>Tourist
                                Destination</h3>
                        </div>
                    </div>
                </div>

                <Footer />



            </div>
        </>
    );
}