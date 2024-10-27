/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdFootball } from 'react-icons/io'

const Header = () => {
  return (
    <div className='p-5 bg-blue-800'>
        <h1 className='text-xl md:text-3xl text-white flex items-center justify-center gap-2'>
        <span>Same Place</span> <IoMdFootball /> <span>Same Time</span> <IoMdFootball />
        </h1>
    </div>
  )
}

export default Header