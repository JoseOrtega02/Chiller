
import {useState,useEffect} from 'react'
import { getMovies } from '../utils/getDataUtils'
function useSimilarMovies(props) {
    const [movies,setMovies] = useState()
    const key = import.meta.env.VITE_REACT_APP_API_KEY
   


    useEffect(() => {
      
      
      Promise.Resolve(getMovies(key,`https://api.themoviedb.org/3/movie/${props.movie_id}/similar`)).then(result => {

        setMovies(result)
      })
    
      
    }, [])
  
    return (movies)
}

export default useSimilarMovies