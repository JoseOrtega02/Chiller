import React, { useEffect, useRef, useState } from 'react'
import useSessionId from '../../hooks/useSessionId'
import { addList } from '../../utils/getDataUtils'
import "./list-pop-up.scss"
const key = import.meta.env.VITE_REACT_APP_API_KEY

function ListPopUp({id,closePopUp}) {
    const [Movies, setMovies] = useState()
    const wrapperRef = useRef(null);
    useEffect(() => {
        const id = useSessionId()
        fetch(`https://api.themoviedb.org/3/account/${id}/lists?api_key=${key}&session_id=${id}`)
        .then(res=>res.json())
        .then(res => setMovies(res?.results))
    
       
    }, [])
    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                closePopUp()
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
    const handle = (listId,id) => {
        const sessId = useSessionId()
        addList(listId,id,sessId)
        closePopUp()
    }

    useOutsideAlerter(wrapperRef);

  return (
    <div className="pop-up-container" ref={wrapperRef}>
        <h2>Your lists</h2>
        {Movies?.map(m=>{
            return(<div onClick={()=>{handle(m.id,id)}} >
                <h3>{m.name}</h3>
                <h3>{m.item_count}</h3>
            </div>)
        })}
    </div>
  )
}

export default ListPopUp