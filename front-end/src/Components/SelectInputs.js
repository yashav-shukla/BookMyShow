import React from 'react';
import '../Css/SelectInputs.css';

const SelectInputs = ({key,text,noOfSeat,changeNoOfSeats}) => {

  const change_seats = (e) => {
    changeNoOfSeats({...noOfSeat,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,[e.target.name]:Number(e.target.value)
      })
    )
  }


  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
        <input name ={text} type="number" className='seats-input' placeholder='0' max={30} min={0} onChange={change_seats} value={noOfSeat[text]} />

    </div>
  )
};

export default SelectInputs;