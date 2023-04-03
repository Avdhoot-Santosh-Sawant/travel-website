import React from 'react';
import './Home.css'


export default function Home() {
    return (
        <>
            <div >
                <div className='img-con'>
                    <img alt='' src='home.png' className='bg-img' />
                    <div class='home-info'>

                        <h1>Explore the best beautiful places</h1>
                        <h3 style={{ margin: '20px' }}>Discover your next adventure with us</h3>
                        <div style={{ margin: '40px' }}>
                            <span id='expore_btn'>Explore</span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}