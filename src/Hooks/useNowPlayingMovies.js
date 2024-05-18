import  { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constant";


const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
const getNowLayingMovies=async ()=>{
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const data=await fetch(url,API_OPTIONS)
  const json=await data.json()
  // console.log(json)
  dispatch(addNowPlayingMovies(json.results))
} 
useEffect(()=>{
  getNowLayingMovies()
},[])

}

export default useNowPlayingMovies