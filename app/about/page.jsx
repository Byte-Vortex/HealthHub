import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { FloatingBotButton } from '@/components/chat/floating-bot-button'
const page = () => {
  return (

    <div className="min-h-auto py-10">
      <div className='container mx-auto justify-center overflow-hidden'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 overflow-hidden">
          <div className="space-y-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-[15%]" />
          </div>
          <div className="space-y-4">
          <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-[15%]" />
          </div>
          <div className="space-y-4">
          <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-[15%]" />
          </div>
          <div className="space-y-4">
          <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-[15%]" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-[15%]" />
          </div>
          <div className="space-y-4">
          <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-[15%]" />
          </div>
        </div>
        <FloatingBotButton/>
      </div>
    </div>
  )
}

export default page