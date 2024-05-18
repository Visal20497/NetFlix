import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { API_OPTIONS } from '../utils/Constant'
import { addTrailerVideo } from '../utils/movieSlice'

const useMovietrailer = (movieId) => {
    const dispatch=useDispatch()
   
    const getMovieVideos = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
            const json = await data.json()
            const filterData = json.results?.filter((video) => {
                return video.type === "Trailer"
            })
            const trailer = filterData.length ? filterData[0] : json.results[0]
            dispatch(addTrailerVideo(trailer))
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getMovieVideos()
    }, [])
}

export default useMovietrailer