import React, { useEffect, useState } from "react";
import './PlaceDetail.css'
import { Link } from 'react-router-dom'
import places from '../places/places.json'
import Footer from '../footer/Footer'

const getId = () => {
    let id = window.location.pathname.split('/')[2];
    return id
}

const getPlaceInfo = () => {
    return places[getId()];
}


export default function PlaceDetail() {

    const [data] = useState(getPlaceInfo());
    const [amount, setAmount] = useState(data.amount);

    const [noTicket, setNum] = useState(1)

    const [cheak1, setCheak1] = useState(false)
    const [cheak2, setCheak2] = useState(false)
    const [cheak3, setCheak3] = useState(false)
    const [charges, setcharges] = useState(0)


    useEffect(() => {
        setAmount(data.amount * noTicket + charges);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [noTicket, charges])



    function proceedBook() {
        alert(`Thank you for booking \n total booking amount :- ${amount}`);
        window.location.pathname = '/places'
    }
    return (
        <>
            <div className="back-btn">
                <Link to={`/places`}>
                    <img src={'/back.png'} alt="Back" width={"40px"} title="Back" />
                </Link>
            </div>
            <div className="detail-con">
                <div>

                    <div className="place_detail">
                        <h2>{data.title},{data.place}</h2>
                        <img src={'/' +
                            data.img} alt="." width={'100%'} className='detail_img' />

                        <div className="detail_des">
                            {data.des}
                        </div>
                    </div>
                </div>


                <div className="booking">
                    <div className="booking_con">
                        <div className="booking_head" >
                            <h3>Start from</h3>
                            <h2>₹{data.amount}/person</h2>
                        </div>
                        <div className="booking_input">
                            <span>Number of tickets </span>
                            <input type="number" value={noTicket} onInput={(e) => setNum(Number(e.target.value))} className="no_ticket_input" min={1} max={20} />
                        </div>




                        <div>
                            <h3 style={{ textAlign: 'center', margin: '10px 10px' }}>Additional Service</h3>
                            <div className="additional_service">
                                <div>
                                    <input type='checkbox' style={{ margin: '2px 10px' }} className="cheakbox" checked={cheak1}
                                        onClick={(e) => {

                                            if (!cheak1) {
                                                setcharges(charges + 500)
                                            }
                                            else {
                                                setcharges(charges - 500)
                                            }
                                            setCheak1(!cheak1)

                                        }} />
                                    <span>Additional Guide</span>
                                </div>

                                <span>₹500</span>
                            </div>

                            <div className="additional_service">
                                <div>
                                    <input type='checkbox' style={{ margin: '2px 10px' }} className="cheakbox" checked={cheak2}
                                        onClick={(e) => {
                                            if (!cheak2) {
                                                setcharges(charges + 200)
                                            }
                                            else {
                                                setcharges(charges - 200)
                                            }
                                            setCheak2(!cheak2)
                                        }} />
                                    <span>Internet</span>
                                </div>

                                <span>₹200</span>
                            </div>
                            <div className="additional_service">
                                <div>
                                    <input type='checkbox' style={{ margin: '2px 10px' }} className="cheakbox" checked={cheak3}
                                        onInput={(e) => {
                                            if (!cheak3) {
                                                setcharges(charges + 50)
                                            }
                                            else {
                                                setcharges(charges - 50)
                                            }
                                            setCheak3(!cheak3)

                                        }} />
                                    <span>Photography</span>

                                </div>

                                <span>₹50</span>
                            </div>

                        </div>

                        <hr />
                        <div className="total_amount">
                            <h2>Total</h2>
                            <h2 style={{ color: 'orange' }}>₹{amount}</h2>
                        </div>

                        <h2 className="proceed-btn" onClick={proceedBook}>Proceed To Book</h2>
                    </div>
                </div>
            </div>

            <Footer />


        </>
    )
}