'use client'

import { useState, useRef } from 'react'

export function IntroVideo() {
  const [showText, setShowText] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Fade out the video
      videoRef.current.style.opacity = '0'
      
      // After fade completes, show "excede" text
      setTimeout(() => {
        setShowText(true)
        if (videoRef.current) {
          videoRef.current.style.display = 'none'
        }
      }, 500) // Wait for fade out to complete
    }
  }

  return (
    <div className="w-full max-w-4xl mt-4 mb-4">
      <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-opacity duration-500"
          muted
          autoPlay
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showText && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
              excede
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}
