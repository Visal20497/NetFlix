import React from 'react'
import { useSelector } from "react-redux"
import useMovietrailer from '../Hooks/useMovietrailer'

const VideoBackground = ({ movieId }) => {
    useMovietrailer(movieId)
    const trailerVideo=useSelector((store)=>{
        return store.movies?.trailerVideo
    })
 
    return (
        <div className='w-screen'>
            <iframe 
            className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&modestbranding=1&amp;rel=0&amp;"}
             title="YouTube video player" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen>
            </iframe>

        </div>
    )
}

export default VideoBackground