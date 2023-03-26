import {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Movie from '../../components/movie/Movie'
import useSessionId from '../../hooks/useSessionId'
import "./watchlist.scss"
const key = import.meta.env.VITE_REACT_APP_API_KEY
function Watchlist() {
    const location = useLocation()
    const [movies,setMovies] = useState()
    useEffect(() => {
        console.log(location)
        const sessId = useSessionId()
      fetch(`https://api.themoviedb.org/3/account/${location.id}/watchlist/movies?api_key=${key}&session_id=${sessId}&sort_by=created_at.asc&page=1`)
      .then(response => response.json())
      .then(res => setMovies(res?.results))
    },[])
    

  return (
    <div className="container">
        <h1>Watchlist</h1>
        {movies?.map(movie =>{
            return <Movie data={movie} key={movie.id}/>
        })}
    </div>
  )
}

export default Watchlist
