'use client'

import { useRef } from 'react'

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Pause the video on the last frame
      videoRef.current.pause()
    }
  }

  return (
    <div className="w-full max-w-4xl mt-4 mb-4">
      <div className="relative rounded-lg overflow-hidden border shadow-lg bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-auto"
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
