import {useEffect,useState} from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Slider from '../slider/Slider'
import { getMovies } from '../../utils/getDataUtils'
import useMoviesDef from '../../hooks/useMoviesDef'
import useGenres from '../../hooks/useGenres'
function Home() {
  const movies = useMoviesDef()
  const genres = useGenres()

  return (<>
      <Hero/>
    {movies !== undefined ? (<>
    <Slider data={movies[0].results} title="Popular"/>
    <Slider data={movies[1].results} title="Top Rated"/>
    <Slider data={movies[2].results} title="Upcoming"/>
    
    </>):(<h1>loading</h1>)}
  </>
  )
}

export default Home