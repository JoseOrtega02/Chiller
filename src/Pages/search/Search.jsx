import {useEffect,useState,useRef} from 'react'
import Movie from '../../components/movie/Movie'
import { getMovies } from '../../utils/getDataUtils'
import "./search.scss"
    const baseURL = "https://api.themoviedb.org/3/search/movie?&query="
    const key = import.meta.env.VITE_REACT_APP_API_KEY
function Search() {
    const [movies,setMovies] = useState()
    const string =useRef()

    const handleSearch =(value) => {
        Promise.resolve(getMovies(key,baseURL+value))
        .then(res => {
            if(res.results[0]){
                 setMovies(res.results)
            }else{
                setMovies(undefined)
            }
           console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
        
    }

  return (
    <div>
        <div className="input__div">
            <input type="text" name="" id="" placeholder='Movie name' ref={string}/>
            <button onClick={()=>{handleSearch(string.current.value)}}><i class="fi fi-br-search"></i></button>
        </div>
        <div className='movies__div'>
            {movies?.map(movie =>{
                return (<Movie data={movie} />)
            })}
        </div>
        {movies ==undefined? (<h1>Search a movie</h1>):(<></>) }
    </div>
  )
}

export default Search