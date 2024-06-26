"use client"

// Error components must be Client Components
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-fulk flex h-full flex-col items-center justify-center gap-4">
      <h2 className="font-cal text-2xl">Something went wrong!</h2>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Button variant="outline" onClick={() => router.refresh()}>
          Refresh Page
        </Button>
      </div>
    </div>
  )
}
