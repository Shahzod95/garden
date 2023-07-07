import React from 'react'
import {Link} from "react-router-dom"
import notfoundIImg from "../../assets/images/notfound.png"
const NotFound = () => {
  return (
    <div className='relative'>
        <img src={notfoundIImg} alt='notfound_image' className='w-full  h-screen object-cover' />
        <div className='absolute top-0 right-0 text-white capitalize font-medium w-1/2 px-4'>
            <h1 className='text-center text-[328px] font-playfair-display'>404</h1>
            <h3 className='font-playfair-display text-[37px] '>oops! this page is missing:</h3>
            <p className='font-geologica text-lg my-4'>sorry, the page you are looking for cannot be found. it seems that the url you were trying to access is either incorrect or the page has been removed</p>
            <Link to="/" className='bg-orange-color uppercase py-[12px] px-[35px]'>back to home</Link>
        </div>
    </div>
  )
}

export default NotFound