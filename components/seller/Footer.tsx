import { assets } from "@assets/assets"; 
import Image from "next/image";


const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <Image src={assets.logo} alt="Logo" className="hidden md:block"/>
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">Copyright © 2025 firdavs.codes | All rights reserved.</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">
          <Image src={assets.facebook_icon} alt="Facebook icon" className="cursor-pointer"/>
        </a>
        <a href="#">
          <Image src={assets.twitter_icon} alt="Twitter icon" className="cursor-pointer"/>
        </a>
        <a href="#">
          <Image src={assets.instagram_icon} alt="Instagram icon" className="cursor-pointer"/>
        </a>
      </div>
    </div>
  )
}

export default Footer