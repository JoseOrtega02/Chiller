import {useEffect, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import useSessionId from '../../hooks/useSessionId'
import { DeleteList } from '../../utils/getDataUtils'
import ListForm from './listForm/ListForm'
import "./lists.scss"
const key = import.meta.env.VITE_REACT_APP_API_KEY
function Lists() {
    const [movies,setMovies] = useState()
    useEffect(() => {
        const id = useSessionId()
        fetch(`https://api.themoviedb.org/3/account/${id}/lists?api_key=${key}&session_id=${id}`)
        .then(res=>res.json())
        .then(res => setMovies(res?.results))
        
      
    
      
    }, [])

    const handleDel = (id) =>{
      const sessId = useSessionId()
      console.log(sessId)
      DeleteList(id,sessId)
      .then(() =>{
        fetch(`https://api.themoviedb.org/3/account/${sessId}/lists?api_key=${key}&session_id=${sessId}`)
        .then(res=>res.json())
        .then(res => setMovies(res?.results))
      })
      
    }
   const updateState= (id,key) => {
    fetch(`https://api.themoviedb.org/3/account/${id}/lists?api_key=${key}&session_id=${id}`)
        .then(res=>res.json())
        .then(res => setMovies(res?.results))
   }
  return (
    <>
    <h1 style={{marginBottom: '10px',textAlign:"center"}}>Your Lists</h1>
    <div style={{marginBottom: '20px',minHeight: "60vh"}}>
      <ListForm updateState={updateState}/>
         {movies?.map(list =>{
        
        return (
        <>
        
        <div className="list-container">
        <h3>{list.name}</h3>
        <h3>Items: {list.item_count}</h3>
        <Link to={"/lists/"+list.id}><button>Details</button></Link>
        <i class="fi fi-br-trash" onClick={()=>{handleDel(list.id)}}></i>
         </div> 
         
         </>

    )
    })}
    </div>
   
    
    <Outlet/>
    </>
  )
}

export default Lists