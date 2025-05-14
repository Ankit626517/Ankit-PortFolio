import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram,  } from "react-icons/fa";
function SocialIcons() {
  return (
    <div>
       <ul className='flex gap-4 md:gap-5'>
                  <li><FaEnvelope size={20} className='text-gray-500 hover:text-red-500' /></li>
                  <li><FaLinkedin size={20} className='text-gray-500 hover:text-blue-700' /></li>
                  <li><FaGithub size={20} className='text-gray-500 hover:text-black' /></li>
                  <li><FaInstagram size={20} className='text-gray-500 hover:text-pink-500' /></li>
                </ul>
    </div>
  )
}

export default SocialIcons;
