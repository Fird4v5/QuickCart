"use client"; 
import { assets } from '@assets/assets';
import Image from 'next/image';
import { useAppContext } from '@context/AppContext';


const Navbar = () => {

  const { router } = useAppContext(); 

  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-200'>
      <Image 
        src={assets.logo}
        alt='Logo'
        onClick={() => router.push("/")}
        className='w-28 lg:w-32 cursor-pointer'
      />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>
        Logout
      </button>
    </div>
  )
}

export default Navbar