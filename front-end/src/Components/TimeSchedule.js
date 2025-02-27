import React, { useContext } from 'react';
import BsContext from '../Context/BsContext';
import '../Css/TimeSchedule.css';
import { slots } from '../data';
import RadioComponent from './RadioComponent';

const TimeSchedule = () => {

  const context = useContext(BsContext)

  const {time,changeTime} = context

  const handleChangeItem = (val) => {
    changeTime(val)

    window.localStorage.setItem("slot",val)
  }

  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main_container'>
        {slots.map ((el,index) => {
        return (
            <div>
                <RadioComponent text={el} key={index} data={time} changeSelection={handleChangeItem} />
            </div>
        )
    })}
      </div>
    </div>
    </>
  )
};

export default TimeSchedule;