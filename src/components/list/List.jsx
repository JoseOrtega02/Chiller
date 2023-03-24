import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Movie from '../movie/Movie'
import "./list.scss"

const key = import.meta.env.VITE_REACT_APP_API_KEY
function List() {
    const {ListId} = useParams()
    const [list,setList] = useState()
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/list/${ListId}?api_key=${key}`)
      .then(response => response.json())
      .then(response =>setList(response))
    
    
    }, [])
    
  return (
    <div className="list-container-2">
    {console.log(list)}
    <h1>{list?.name}</h1>
    <p>{list?.description}</p>
    <h4>Created by: {list?.created_by}</h4>
    <div className="movie__container" >{list?.items.map(movie =>{return <Movie data={movie}/>})}</div>
    
    </div>
    
    
  )
}

export default List