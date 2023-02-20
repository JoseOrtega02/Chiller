import {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Genres from '../../components/genres/Genres'
import Slider from '../../components/slider/Slider'
import Trailer from '../../components/Trailer/Trailer'
import useSimilarMovies from '../../hooks/useSimilarMovies'
import { getMovies } from '../../utils/getDataUtils'
import "./details.scss"
function Details() {
    const location = useLocation()
    const  [info,setInfo] = useState()
    const  [similars,setSimilars] = useState()
    const key = import.meta.env.VITE_REACT_APP_API_KEY
    useEffect(() => {
        if(location.state){
          
          Promise.resolve(getMovies(key,`https://api.themoviedb.org/3/movie/${location.state.id}/similar`)).then(result => {
  setInfo(location.state)
          setSimilars(result.results)
        })
        }
      
    },[location])
    
  return (
    <div className="details-container">
      {console.log(info)}
      {info !== undefined? (<><div className="details-basic-info">
        <img src={`https://image.tmdb.org/t/p/w500`+info.poster_path} alt="" />
        <div className="details-info-text">
          <h2>{info.title}</h2>
          <h3>Realease date: {info.release_date}</h3>
          <h3 className="Rate">{Math.round(info.vote_average * 10) / 10}</h3>
        </div>
      </div>
      <Genres Genres={info.genre_ids} />
      <p><h3>Overview: </h3>{info.overview}</p>
        <Trailer id={info.id}/>
      <Slider data={similars} title="Similars" />
       </>):(<h1>return</h1>)}
      

    </div>
  )
}

export default Details