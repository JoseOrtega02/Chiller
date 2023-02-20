import {useEffect} from 'react'
import { getMovies } from '../utils/getDataUtils'
function useGenres() {
    const key = import.meta.env.VITE_REACT_APP_API_KEY
   


    useEffect(() => {
      
      
      Promise.resolve(getMovies(key,"https://api.themoviedb.org/3/genre/movie/list")).then(result => {
        console.log(result)
        localStorage.setItem("genres", JSON.stringify(result.genres))
      })
    
      
    }, [])
}

export default useGenres