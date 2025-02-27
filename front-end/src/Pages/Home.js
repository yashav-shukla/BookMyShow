import React from 'react';
import Header from '../Components/Header';
import LastBookingDetails from '../Components/LastBookingDetails';
import SelectMovie from '../Components/SelectMovie';
import SelectSeats from '../Components/SelectSeats';
import TimeSchedule from '../Components/TimeSchedule';
import '../Css/Home.css';


const Home = () => {
  return (
    
    <div className='container'>
      <Header />
        <div className='wrapper'>
        <div className='select_movie_component'>
      <SelectMovie />
        </div>
        <div className='last_booking_details_container'>
            <LastBookingDetails />
        </div>
        </div>

        <div className='time_seats_container'>
          <TimeSchedule />
          <SelectSeats />
          
        </div>
    </div>
  )
}

export default Home;