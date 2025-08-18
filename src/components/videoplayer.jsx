import React from 'react'
import'./videoplayer.css'
import video from '../assets/college-video.mp4'


const Videoplayer = ({playVideo, setPlayVideo}) => {
  return (
    <div className={`video-player ${playVideo ? '' : 'hide'}`}>
      <video src={video} autoPlay muted controls></video>
      <button className='btn'onClick={() => setPlayVideo(false)}>Close</button>
    </div>
  )
}

export default Videoplayer;
