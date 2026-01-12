'use client'

import { useState, useRef } from 'react'

export function IntroVideo() {
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mt-4 mb-4">
      <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
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
