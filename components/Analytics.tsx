'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}
