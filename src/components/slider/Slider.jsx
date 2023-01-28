import React from 'react'
import Movie from '../movie/Movie'
import "./slider.scss"
function Slider(props) {

  return (
    <div className="slider-container">
        <h1>Topics</h1>
        <div className='slider-Movies'>
         {props.data.map(movie =>{
          return (<Movie data={movie}/>)
         })}
        </div>
    </div>
  )
}

export default Slider