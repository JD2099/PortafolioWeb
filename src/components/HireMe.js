import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-2 bottom-10
    flex items-center justify-center overflow-hidden 
    md:right-8 md:left-auto md:top-0 md:bottom-auto 
    sm:right-2 z-30
    '>
        <div className='w-48 h-auto items-center justify-center relative md:w-24'>
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
        <Link href='mailto:jdcastillodev@gmail.com' className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
        text-light shadow-md w-20 h-20 rounded-full font-semibold
        border border-solid border-dark
        hover:bg-light hover:text-dark
        dark:text-dark dark:bg-light dark:border-light
        hover:dark:text-light hover:dark:bg-dark hover:dark:border-light
        md:w-12 md:h-12 md:text-[10px]'>
        Hire Me
        </Link>
        </div>    
    </div>
  )
}

export default HireMe