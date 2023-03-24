import React from 'react'
import DetailBtn from '../detail-btn/DetailBtn';
import Plus from '../plus-btn/Plus';
import "./Movie.scss";
function Movie(props) {
  const data = props.data
  return (
    <div className="movie-container">
        <img src={`https://image.tmdb.org/t/p/w500`+data.poster_path} alt="" />
        <div className="movie-buttons">
            <DetailBtn data={data}/>

           <Plus id={data.id}/>
        </div>
    </div>
  )
}

export default Movie