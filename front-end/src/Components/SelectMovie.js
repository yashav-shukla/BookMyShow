import React, { useContext } from 'react';
import BsContext from '../Context/BsContext';
import '../Css/SelectMovie.css';
import { movieslist } from '../data';
import RadioComponent from './RadioComponent';

const SelectMovie = () => {

  const context  = useContext(BsContext)

  const {movie,changeMovie} = context

  const handleChangeMovie = (val) => {
    changeMovie(val)

    window.localStorage.setItem("movie", val)
  }

  return (
    <>
    <h1 className='SM_heading'>Select A Movie : - </h1>
     <div className='SM_main_container'>
     {movieslist.map ((el,index) => {
        return (
            <div>
                <RadioComponent text={el} key={index}  data={movie} changeSelection={handleChangeMovie}/>
            </div>
        )
    })}
     </div>
    </>
  )
};

export default SelectMovie;