import {useEffect, useState} from 'react'
import Movie from '../../components/movie/Movie'
import useSessionId from '../../hooks/useSessionId'
import "./favourites.scss"
const key = import.meta.env.VITE_REACT_APP_API_KEY
function Favourites() {
   const [movies,setMovies] = useState()
    useEffect(() => {
        const id = useSessionId()
        fetch(`https://api.themoviedb.org/3/account/${id}/favorite/movies?api_key=${key}&session_id=${id}`)
        .then(res=>res.json())
        .then(res => setMovies(res?.results))
        
      
    
      
    }, [])
    
  return (
    <div className="container">
        <h1>Favourites</h1>
        {movies?.map(movie =>{
            return <Movie data={movie} key={movie.id}/>
        })}
    </div>
  )
}

export default Favourites