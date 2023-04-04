import React, { useState } from "react";
import './Places.css'
import places from './places.json'
import Partner from '../sponsor/Partner'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'


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
                            return <PlaceCard data={place} id={index} />
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

    const [id] = useState(props.id);

    return (
        <>
            <div className="place__card">
                <Link to={`/places/${id
                    }`}>
                    <img src={props.data.img} alt="" className="place__img" />

                    <span className="place__rating">
                        <span><img alt="" src="./rating_icon.png" width={'20px'} /></span>
                        <span className="place__rating-number">{props.data.rating}</span>
                    </span>

                    <div className="place__data">
                        <h3 className="place__title">{props.data.title}</h3>
                        <span className="place__subtitle">{props.data.place}</span>
                        <span className="place__price">₹{props.data.amount}</span>
                    </div>
                </Link>
            </div>

        </>
    )
}
