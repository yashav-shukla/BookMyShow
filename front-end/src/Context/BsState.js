import React, { useEffect, useState } from 'react';
import BsContext from '../Context/BsContext';
import '../Css/LastBookingDetails.css';


const BsState = (props) => {

    const[errorPopup, setErrorPopup] = useState(false)

    const[errorMessage,setErrorMessage] = useState("")

    const [movie,changeMovie] = useState(' ')

    const [time,changeTime] = useState(' ')

    const [noOfSeat,changeNoOfSeats] = useState( {
    A1:"",
    A2:"",
    A3:"",
    A4:"",
    A5:"",
    A6:"",
    A7:"",
    A8:"",
    A9:"",
    A10:"",
    })

    const [lastBookingDetails,setLastBookingDetails] = useState(null)

const handlePostBooking = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/booking', {
      method: "POST",  // ✅ Fixed method name
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: movie,
        slot: time,
        seats: noOfSeat,
      }),
    });

    // ✅ Check if response is OK before parsing JSON
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    // ✅ Show success message
    setErrorPopup(true);
    setErrorMessage(data.message);

    // ✅ Clear state & local storage if successful
    if (response.status === 200) {
      changeTime("");
      changeMovie("");
      setLastBookingDetails(data.data || {});
      handleGetBooking();
      window.localStorage.clear();
    }
  } catch (error) {
    console.error("Error posting booking details:", error);
    setErrorPopup(true);
    setErrorMessage("Booking failed! Check console for details.");
  }
};


const handleGetBooking = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/booking', {
        method: "GET",
      });
  
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const data = await response.json();
      setLastBookingDetails(data?.data || {});  // Use optional chaining to prevent crashes
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  };
  

    useEffect(() => {
        const movie = window.localStorage.getItem("movie")
        const slot = window.localStorage.getItem("slot")
        const seats = JSON.parse(window.localStorage.getItem("seats"))

        if(movie) {
            changeMovie(movie)
        }
        if(slot) {
            changeTime(slot)
        }
        if(seats) {
            changeNoOfSeats(seats)
        }
    },[])




    return (
        <BsContext.Provider value={{movie,changeMovie,time,changeTime,noOfSeat,changeNoOfSeats,lastBookingDetails,handleGetBooking,handlePostBooking,errorMessage,errorPopup,setErrorMessage,setErrorPopup}} >
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState;
