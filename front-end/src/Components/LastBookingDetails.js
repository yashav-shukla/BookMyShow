import React, { useContext, useEffect } from 'react';
import BsContext from '../Context/BsContext';
import '../Css/LastBookingDetails.css';
import { seats } from '../data';


const LastBookingDetails = () => {

  const context = useContext(BsContext)

  const {LastBookingDetails,handleGetBooking}= context
  useEffect(() => {
    handleGetBooking()
    
  },[])

  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking Details : - </h2>
      {
        LastBookingDetails ? (
          <>
          <div className='seats_container'>
        <p className='seats_header'>Seats : - </p>
        <ul className='seats'>
          {seats.map((seat, index) => (
            <li key={index} className='seat_value'>
              {seats} : {Number(LastBookingDetails.seats[seat])}
            </li>
          ))}
        </ul>
      </div>
      <p className='slot' style={{textAlign: 'left'}}>Slot : <span> {LastBookingDetails} </span></p>
      <p className='movie'>Movie : <span>{LastBookingDetails.movie}</span></p>
      <p className='theatre'>Theatre : <span>PVR Cinemas</span></p>
          </>
        ) : (
          <p className='no_previous'>No previous booking</p>
        )
      }

      
    </div>
  )
}

export default LastBookingDetails;