'use client'

import { useState, useRef, useEffect } from 'react'

export function IntroVideo() {
  const [isFaded, setIsFaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Fade out the video
      setIsFaded(true)
      
      // After fade completes, reset to first frame
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0
          videoRef.current.pause()
          // Fade back in to show first frame
          setTimeout(() => {
            setIsFaded(false)
          }, 50)
        }
      }, 500) // Wait for fade out to complete
    }
  }

  return (
    <div className="w-full max-w-4xl mt-4 mb-4">
      <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg bg-black">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isFaded ? 'opacity-0' : 'opacity-100'
          }`}
          muted
          autoPlay
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
