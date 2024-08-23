"use client"

import React from 'react'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'


// ===== Images 
import SaleShine from "media/home/salesimage.png"
import Banner from '@/components/contact/banner'



const page = () => {

  return (
    <>
      <Banner />
      <OurClient />
      <Extraordinary />
    </>
  )
}

export default page
