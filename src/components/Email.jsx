import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { MdOutlineStarOutline } from "react-icons/md";

const Email = () => {
  return (
    <div className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
        <div  className='flex items-center gap-1'>
            <div className='text-gray-400'>
                <MdCropSquare size={'20px'}/>
            </div>
            <div className='text-gray-400'>
                <MdOutlineStarOutline size={'20px'}/>
            </div>
            <div className='text-gray-400'>
                <h1 className='font-semibold'>bigbasket</h1>
            </div>
        </div>
        <div className='flex-1 ml-4'>
            <p>Fusion Food Fiesta😋 Recipe Contest and More🍇</p>
        </div>
        <div className='flex-none text-gray text-sm'>
            <p>12 days ago</p>
        </div>
    </div>
  )
}

export default Email
