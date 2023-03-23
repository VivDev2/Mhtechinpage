import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
     
const Navbar = () => {
  const [nav,setNav]  = useState(false)

  const handleNav = () =>
   setNav(!nav)
  
   return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font-bold text-[#f7f8f8]'>
                <Link href="/">
                    <Image
                        src="/Logo.svg" // path to the image file
                        alt="My image" // alt text for accessibility
                        width={205} // width of the image
                        height={75} // height of the image
                    />
                </Link>
            </h1>
            
            <ul className=' hidden md:flex'>
                <li className='p-4 hover:cursor-pointer '><Link href = "/" legacyBehavior><a>Home</a></Link></li>
                <li className='p-4 hover:cursor-pointer'><Link href = "/about" legacyBehavior><a>About</a></Link></li>
                <li className='p-4 hover:cursor-pointer' ><Link href = "/contact" legacyBehavior><a>Contact</a></Link></li>
                <li className='p-4 hover:cursor-pointer'><Link href= "/service" legacyBehavior><a>Interns</a></Link></li>
                
            
            </ul>
           
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            </div>

            <div className = {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#e8eaf6] ease-in-out duration-500' :'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df98] m-4'><Link href="/">
                    <Image
                        src="/Logo.svg" // path to the image file
                        alt="My image" // alt text for accessibility
                        width={205} // width of the image
                        height={75} // height of the image
                    />
                </Link></h1>
                
                <ul className=' uppercase p-4 text-sm font-bold text-[#212121]'>
                <li className='p-4 border-b border-gray-600'><Link href = "/" legacyBehavior><a>Home</a></Link></li>
                <li className='p-4 border-b border-gray-600'><Link href = "/about" legacyBehavior><a>About</a></Link></li>
                <li className='p-4 border-b border-gray-600'><Link href = "/contact" legacyBehavior><a>Contact</a></Link></li>
                <li className='p-4 border-b border-gray-600'><Link href= "/service" legacyBehavior><a>Interns</a></Link></li>
                
                </ul>

            </div>



        </div>
    );
};
export default Navbar