import { useContext, useState } from 'react';
import BsContext from '../Context/BsContext';
import '../Css/Header.css';
import '../Css/Home.css';


const Header = () => {

  const context = useContext(BsContext)
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context

  const handleBookNow = () => {
    if(!movie) {
      setErrorPopup(true)
      setErrorMessage("Please select a movie")
    } else {
      handlePostBooking()
    }
  }


    const [city, setCity] = useState("Kanpur - UP ");
  return (
    <header className='header'>
        <img src="logo.svg" alt="logo" className='logo' />
      <div className="search-container">
        <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" className="search-input" />
      </div>

      <div className="city-dropdown">
        <select value={city} onChange={(e) => setCity(e.target.value)} className="city-select">
            <option value="Kanpur - UP">Kanpur - UP</option>
          <option value="Delhi-NCR">Delhi-NCR</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
      <div className='actions-container'>
                <a href="https://support.bookmyshow.com/support/home" target="_blank" rel="noopener noreferrer" className="help-support">
                    Help & Support
                </a>
            </div>
        
        <div className='book_now_button_container'>
            <button className='book_now_button' onClick={() => {
              handleBookNow()
            }}>Book Now</button>
        </div>
    </header>
  )
};

export default Header;