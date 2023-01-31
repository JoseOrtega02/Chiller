import React from 'react'
import "./hero.scss"
import img1 from "../../assets/img.jpeg"
import { useEffect,useState } from 'react'
import { getMovies } from '../../utils/getDataUtils'
import DetailBtn from '../detail-btn/DetailBtn'
function Hero() {
  const [movie,setMovie] = useState()
    const key = import.meta.env.VITE_REACT_APP_API_KEY
  useEffect(() => {
    Promise.resolve(getMovies(key,"https://api.themoviedb.org/3/discover/movie")).then(result=>{
      let num = Math.floor(Math.random() * (20 - 0 + 1) + 0)
      setMovie(result.results[num])
    })
  },[])

   function setIMG(img) {
    let url
    if (img !==null) {
      return url = `https://image.tmdb.org/t/p/w500`+img
    }else{
      return url = img1
    }
   }
  return (
    <div className="hero__container">
        {movie !== undefined? (<>
        
        <img src={setIMG(movie.poster_path)} alt="" />
        <h1>{movie.title}</h1>
        <div className="hero__buttons">
            <DetailBtn data={movie}/>
            <span><i class="fa-regular fa-star"></i></span>
        </div></>):(<h1>Loading</h1>)}
        
    </div>
  )
}

export default Hero