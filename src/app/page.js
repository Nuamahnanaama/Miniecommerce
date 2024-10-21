import Categoryls from '@/Components/Categoryls'
import Footer from '@/Components/Footer'
import Frontpg from '@/Components/Frontpg'
import Gallery from '@/Components/Gallery'
import Header from '@/Components/Header'
import Metropolis from '@/Components/Metropolis'
import Productls from '@/Components/Productls'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Frontpg />
      <Categoryls />
      <Metropolis />
      <Productls />
      <Gallery />
      <Footer />
    </div>
  )
}

export default page
