"use client"
import React from 'react'
import AmbulaceCard from './Detail/AmbulaceCard'
import NavServices from '../utils/NavServices'
import Header from '../components/Header'



const page = () => {
    return (
    
        <div className='flex flex-col items-center justify-center h-screen text-black'>
            <h1 className='text-3xl font-bold'></h1>   
            <NavServices activeItem={0} isMobile={false} />
           
       
          
            <AmbulaceCard />
        </div>
    )
}

export default page
