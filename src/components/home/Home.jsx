import {useEffect,useState} from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Slider from '../slider/Slider'
import { getMovies } from '../../utils/getDataUtils'
function Home() {
  const [movies,setMovies] = useState()
  const key = import.meta.env.VITE_REACT_APP_API_KEY

  useEffect(() => {
    
    
    Promise.all([getMovies(key,"https://api.themoviedb.org/3/movie/popular"),getMovies(key,"https://api.themoviedb.org/3/movie/top_rated"),getMovies(key,"https://api.themoviedb.org/3/movie/upcoming")]).then(result => {
      
      setMovies(result)
    })
  
    
  }, [])
  

  return (<>
  <Navbar/>
      <Hero/>
    {movies !== undefined ? (<>
      {movies.map(call =>{
        return <Slider data={call.results}/>
      })}
    </>):(<h1>loading</h1>)}
  </>
  )
}

export default Home