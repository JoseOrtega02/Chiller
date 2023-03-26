import apiCall from "../components/api/api"

export function getRequestToken() {
    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(res =>{
        if (res.request_token) {

            window.location.replace(`https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=${window.location.href}`)
        }
        console.log(res)
    })
    .catch(err => console.log(err))
}


export const getSessionId = async (key,url,token) =>{
  try {

   
   const movieCall = await apiCall({
     method: 'POST',
     url:`https://api.themoviedb.org/3/authentication/session/new?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&request_token=${token}`
   })
   
   return await movieCall.json()
 }
 catch(err){
     console.log(err);
 }
}

export const createList = async (data,sessionID) =>{
  try {

   
   const movieCall = await apiCall({
     method: 'POST',
     url:`https://api.themoviedb.org/3/list?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${sessionID}`,
     body: JSON.stringify(data),
     headers: {'Content-Type': 'application/json;charset=utf-8'},
   })
   console.log(movieCall)
   return await movieCall.json()
 }
 catch(err){
     console.log(err);
 }
}


export const addFav = async (userID,data,sessionID) => {
  try {

   
    const movieCall = await apiCall({
      method: 'POST',
      url:`https://api.themoviedb.org/3/account/${userID}/favorite?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${sessionID}`,
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json;charset=utf-8'},
    })
    console.log(movieCall)
    return await movieCall.json()
  }
  catch(err){
      console.log(err);
  }
}

export const addWatch = async (userID,data,sessionID) => {
  try {

   console.log(data)
    const movieCall = await apiCall({
      method: 'POST',
      url:`https://api.themoviedb.org/3/account/${userID}/watchlist?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${sessionID}`,
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json;charset=utf-8'},
    })
    console.log(movieCall)
    return await movieCall.json()
  }
  catch(err){
      console.log(err);
  }
}

export const addList = async (listID,id,sessionID) => {
  try {

   
    const movieCall = await apiCall({
      method: 'POST',
      url:`https://api.themoviedb.org/3/list/${listID}/add_item?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${sessionID}`,
      body: JSON.stringify({ "media_id": id }),
      headers: {'Content-Type': 'application/json;charset=utf-8'},
    })
    console.log(movieCall)
    return await movieCall.json()
  }
  catch(err){
      console.log(err);
  }
}


export const DeleteList = async (id,sessionId) =>{
  try {

   
   const movieCall = await apiCall({
     method: 'DELETE',
     url:`https://api.themoviedb.org/3/list/${id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${sessionId}`
   })
   console.log(movieCall)
   return  movieCall
 }
 catch(err){
     console.log(err);
 }
}

export const getMovies = async (key,url) =>{
   try {
    const movieCall = await apiCall({
      url: url+`?&api_key=${key}`,
      method: 'GET'
    })
    return await movieCall.json()
  }
  catch(err){
      console.log(err);
  }
}




