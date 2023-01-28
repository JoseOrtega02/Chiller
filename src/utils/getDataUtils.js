import apiCall from "../components/api/api"

export function getRequestToken() {
    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(res =>{
        if (res.request_token) {
            window.location.replace(`https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=${import.meta.env.VITE_REACT_APP_LOCAL_URL}`)
        }
        console.log(res)
    })
    .catch(err => console.log(err))
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


