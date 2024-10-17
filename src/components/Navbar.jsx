import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <RxHamburgerMenu/>
                </div>
                <img className='w-8' src="https://freelogopng.com/images/all_img/1657906169gmail-logo-png.png" alt="logo"/>
                <h1 className='text-2xl text-gray-500 font-small'>Gmail</h1>
            </div>
        </div>
        <div className='w-[50%] mr-60'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                <IoIosSearch size={'24px'} className='text-gray-700' />
                <input 
                type="text" 
                placeholder='Search Mail' 
                className='rounded-full w-full outline-none px-1 bg-transparent placeholder-gray-500'
                />
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                <CiCircleQuestion size={'24px'}/>
            </div>
            <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                <IoIosSettings size={'24px'}/>
            </div>
            <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                <TbGridDots size={'24px'}/>
            </div>
            <Avatar src="https://imgs.search.brave.com/LiNE3Gpbvt_otopc6vJf6pwau1n7OUiLj4JTjnY6dQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1wcm9maWxlLXBp/Y3R1cmVzLW1vbmtl/eS1mYWNlLTBqeHdt/cTZicG0zaHM5Y2Iu/anBn" size="35" round={true} />
        </div>
    </div>
  )
}

export default Navbar
