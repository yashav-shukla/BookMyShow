import React, { useContext } from 'react';
import BsContext from '../Context/BsContext';
import '../Css/SelectSeats.css';
import { seats } from '../data';
import SelectInputs from './SelectInputs';

const SelectSeats = () => {

  const context = useContext(BsContext)

  const {noOfSeat,changeNoOfSeats} = context



  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading' >Select Seats : </h1>
      <div className='SS_main_container'>
        {seats.map ((el,index) => {
          return (
            <SelectInputs key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}  />
          )
        })}
      </div>
    </div>
  )
};

export default SelectSeats;