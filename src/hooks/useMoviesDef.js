import {useState,useEffect} from 'react'
import { getMovies } from '../utils/getDataUtils'
function useMoviesDef() {
    const [movies,setMovies] = useState()
    const key = import.meta.env.VITE_REACT_APP_API_KEY
   


    useEffect(() => {
      
      
      Promise.all([getMovies(key,"https://api.themoviedb.org/3/movie/popular"),getMovies(key,"https://api.themoviedb.org/3/movie/top_rated"),getMovies(key,"https://api.themoviedb.org/3/movie/upcoming")]).then(result => {

        setMovies(result)
      })
    
      
    }, [])
  
    return (movies)
}

export default useMoviesDef