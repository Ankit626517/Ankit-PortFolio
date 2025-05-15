import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram,  } from "react-icons/fa";
function SocialIcons() {
  return (
    <div>
       <ul className='flex gap-4 md:gap-5 cursor-pointer'>
                  <li><a href='mailto:ankitrathore48132@gmail.com' ><FaEnvelope size={20} className='text-gray-500 hover:text-red-500' /></a></li>
                  <li><a href='https://www.linkedin.com/in/ankit-rathore-256b91235/' ><FaLinkedin size={20} className='text-gray-500 hover:text-blue-700' /></a></li>
                  <li><a href='https://github.com/Ankit626517' ><FaGithub size={20} className='text-gray-500 hover:text-black' /></a></li>
                  <li><a href='https://www.instagram.com/ankitrathore48132/' ><FaInstagram size={20} className='text-gray-500 hover:text-pink-500' /></a></li>
                </ul>
    </div>
  )
}

export default SocialIcons;
