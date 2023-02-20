import {useEffect,useState} from 'react'
import movieTrailer from "movie-trailer"
import YouTube from 'react-youtube';
function Trailer(props) {
    const [url,setUrl] = useState()
    useEffect(() => {
        movieTrailer(null, { tmdbId: props.id })
        .then(res =>{
            const searchParams = new URLSearchParams(new URL(res).search)
            setUrl(searchParams.get("v"))
        })
        .catch(err =>{
            console.error(err)
        })
    
      
    },[props.id])
    const opts = {
        height: '390',
        width: '100%',
        
      };

  return (<>
    {url !== undefined?(<YouTube videoId={url} opts={opts}/>):(<h1>Error with the trailer</h1>)}
   
   </>
   
  )
}

export default Trailer