import {useEffect,useState } from 'react'
import "./genres.scss"
function Genres(props) {
    const [genresFiltered,setGenres] = useState()
   
    useEffect(() => {
     const genres = JSON.parse(localStorage.getItem('genres'));
     
     let filgenres = []
      props.Genres.map((id) =>{
        
        genres.find((item) => {
            
            if(item.id === id) {
                filgenres= [...filgenres,item]
            };
        })
     })
   
    setGenres(filgenres)
     
    }, [])
    

  return (
    <>
    {genresFiltered !== undefined ?(<div className='genres__div'>
        {genresFiltered.map((genres) =>{
            return (<h3>{genres.name}</h3>)
        })}
    </div>):(<></>)}
    </>
  )
}

export default Genres