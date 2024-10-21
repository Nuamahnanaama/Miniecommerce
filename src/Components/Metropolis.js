import React from 'react'
import Image from 'next/image'
import banner from "../Components/Images/banner.jpg"
const Metropolis = () => {
  return (
    <div className='mt-14' >
     <div className='relative h-svh pb-8'>
        <Image src={banner} alt='no img' className='absolute inset-0 '/>
     </div>
     {/* <div className='absolute inset-0 grid place-items-end '>
        <h1 className='text-[#232323] font-bold text-4xl pr-32'>METROPOLIS</h1>
        <p className='italic text-sm text-[#232323] pr-32'>Quisquemos sodales suscipit tortor ditaemcos condimentum de</p>
        <p  className='italic text-sm text-[#232323] pr-32'>cosmo lacus meleifend menean diverra loremous.</p>
     </div> */}
      
    </div>
  )
}

export default Metropolis