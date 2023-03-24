import React, { useCallback, useRef, useState } from 'react'
import useSessionId from '../../../hooks/useSessionId'
import { createList } from '../../../utils/getDataUtils'
import "./listForm.scss"
const key = import.meta.env.VITE_REACT_APP_API_KEY
function ListForm({updateState}) {
    const [form,setForm] = useState(false)
    const listName = useRef()
    const listDesc = useRef()
    const listLang = useRef()


    const handleSubmit = useCallback( () =>(event)=> {
       event.preventDefault()
        const sesssionID = useSessionId()
        const data = {
            name: listName.current?.value,
            description: listDesc.current?.value,
            language: listLang.current?.value
        }
        console.log(data)
        createList(data,sesssionID)
        updateState(sesssionID,key)
    },[])

  return (
    <div className="create-list-container">
    <button onClick={()=>setForm(!form)}>{form?(<i class="fi fi-br-cross-circle"></i>):(<i class="fi fi-br-square-plus"></i>)}</button>
    {form ? (<>
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit()}>
                <div>
                    <label htmlFor="name">Name of the list</label>
                    <input type="text" id="name" ref={listName} required/>    
                </div>
                <div>
                    <label htmlFor="desc">Description of the list</label>
                    <input type="text" id="desc" ref={listDesc}/> 
                </div>
                <div>
                    <label htmlFor="lang">Language of the list</label>
                    <input type="text" id="lang" ref={listLang}/> 
                </div>
                <button type="submit">Create List</button>
            </form>

        </div>
        </>):(<></>)}
        </div>
  )
}

export default ListForm