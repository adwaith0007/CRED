import React from 'react'
import Image from 'next/image'

function Screen2() {
  return (
    <div className='min-h-screen bg-[#0f0f0f]' >
    
    <div className='flex flex-row justify-center' >
        <Image className='z-[98] translate-x-10 translate-y-16 '  src='/neopop-left-2.webp' width={300} height={200} />
        <Image className='z-[99]'  src='/neopop-left-1.webp' width={300} height={200} />
        <Image className='z-[100]'  src='/neopop-center.webp' width={300} height={200} />
        <Image className='z-[99]'  src='/neopop-right-1.webp' width={300} height={200} />
        <Image className='z-[98]'  src='/neopop-right-2.webp' width={300} height={200} />
    </div>
    </div>
  )
}

export default Screen2