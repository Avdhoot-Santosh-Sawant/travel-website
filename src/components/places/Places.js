import React from "react";
import './Places.css'
import places from './places.json'
import Partner from '../sponsor/Partner'
import Footer from '../footer/Footer'

export default function Places() {



    return (
        <>
            <div id="places">
                <div>
                    <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Best Places To Visit</h2>
                </div>
                <div className="places__con">
                    {
                        places.map((place, index) => {
                            return <PlaceCard data={place} />
                        })
                    }
                </div>

                <Partner />
                <Footer />
            </div>
        </>
    )
}


const PlaceCard = (props) => {
    return (
        <>
            <div class="place__card">
                <img src={props.data.img} alt="" class="place__img" />

                <span class="place__rating">
                    <span><img alt="" src="./rating_icon.png" width={'20px'} /></span>
                    <span class="place__rating-number">{props.data.rating}</span>
                </span>

                <div class="place__data">
                    <h3 class="place__title">{props.data.title}</h3>
                    <span class="place__subtitle">{props.data.place}</span>
                    <span class="place__price">₹{props.data.amount}</span>
                </div>



            </div>

        </>
    )
}
