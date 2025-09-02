"use client"; 
import Image from 'next/image';
import NavLink from '@utils/NavLink';
import { assets } from '@assets/assets';
import { useAppContext } from '@context/AppContext';
import { useParams } from 'next/navigation';


const Navbar = () => {

  const id = useParams(); 


  const navLinks = [
    { href: "/", label: "Home" },
    { href: `/shop`, label: "Shop" },
    { href: "", label: "About Us" },
    { href: "", label: "Contact" },
  ];

  const { isSeller, router } = useAppContext();

  return (
    <nav className='flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700'>
        <Image
            src={assets.logo}
            alt='Logo'
            className='w-28 md:w-32 cursor-pointer'
            onClick={() => router.push('/')}
        /> 
        <div className='flex items-center gap-4 lg:gap-8 '>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}

          {isSeller && 
            <button
              onClick={() => router.push("/seller")}
              className='text-xs border px-4 py-1.5 rounded-full cursor-pointer'
            >
              Seller Dashboard
            </button>}
        </div>
        <ul className='hidden md:flex items-center gap-4'>
          <Image 
            src={assets.search_icon}
            alt="search icon"
            className='w-4 h-4'
          />
          <button
            className='flex items-center gap-2 hover:text-gray-900 transition cursor-pointer'
          >
            <Image 
              src={assets.user_icon}
              alt='user icon'
            />
              Account
          </button>
        </ul>
    </nav>
  )
}

export default Navbar

