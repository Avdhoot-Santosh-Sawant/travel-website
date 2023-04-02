import React from "react";
import './Places.css'
import places from './places.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Places() {



    return (
        <>
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
        </>
    )
}


const PlaceCard = (props) => {
    return (
        <>
            <div class="place__card">
                <img src={props.data.img} alt="" class="place__img" />

                <span class="place__rating">
                    <FontAwesomeIcon icon="fa-regular fa-star" />
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
