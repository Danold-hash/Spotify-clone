import React from 'react'
import { assets } from '../assets/assets'
import { CircleArrowDown } from 'lucide-react'
import { Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='flex gap-2 bg-black py-1 px-4 rounded-2xl text-[15px] cursor-pointer'><CircleArrowDown className='text-white'/>Install App</p>
            <p className='w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-black'>D</p>
            <p className='bg-neutral-500 rounded-full p-1'><Bell/></p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-neutral-500 text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-neutral-500 text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar