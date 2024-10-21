import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#232323] h-svh pl-4 grid grid-cols-4'>
  <div className='text-white mt-5 space-y-2' >
    <h1 className='font-bold'>SHOP NOW</h1>
    <p className=''>New in</p>
    <p>Women</p>
    <p>Men</p>
    <p>Shoes</p>
    <p>Bags & Accesories</p>
    <p>Top Brands</p>
    <p>Sales & Special Offers</p>
   </div>
   <div className='text-white mt-5 space-y-2 '>
    <h1 className='font-bold'>INFORMATION</h1>
    <p>About</p>
     <p>Blog</p>
   </div>
   <div className='text-white mt-5 space-y-2'>
    <h1 className='font-bold'>CUSTOMER SERVICE</h1>
     <p>Search Terms</p>
     <p>Advanced Search</p>
     <p>Orders And Return</p>
     <p>Contact Us</p>
     <p>Themes FAQS</p>
     <p>Consultant</p>
     <p>Store Locations</p>
  </div>
  <div className='text-white mt-5 space-y-2'>
    <h1 className='font-bold'>NEWSLETTER SIGN UP</h1>
    <p>Sign up for exclusive updates, new arrivals & insider only discounts</p>
   <div className='flex space-x-3'>
    <input type='email' placeholder='enter your email address'className='px-2 text-xs py-3 bg-[#232323] border border-white w-[50%]' ></input> 
    <button className='px-4 py-2 text-black font-bold border border-white bg-white w-[40%] hover:bg-[#232323] hover:text-white'>SUMBIT</button>
    <div>
    
    </div>
    </div> 
  </div>
    </div>
  )
}

export default Footer;