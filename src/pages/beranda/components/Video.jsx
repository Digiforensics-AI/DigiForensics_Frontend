import React from 'react'
import Video_Protect from '../../assets/Videos/Video_Protect.mp4';

export default function Video(width, height) {
  return (
    <div>
        <video src={Video_Protect}
        width={width}
        height={height}
        autoPlay
        />
    </div>
  )
}
