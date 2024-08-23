"use client"

import React from 'react'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import Form from '@/components/form/Form'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'


// ===== Images 
import SaleShine from "media/home/salesimage.png"
import Packages from '@/components/Packages/Packages'


const page = () => {

  //===== Banner Section====//
  const lists = [
  ]

  const banner = {
    title: <>Animation, Design, Digital & Everything </>,
    para: <><p className='pb-3'>We are not just animators – we’re visual animation sorcerers. Born from a passion for pushing the boundaries of digital storytelling, weve evolved into pioneers of next-gen animation for businesses. Our journey began with a simple belief: every brand has a unique story waiting to be told through motion.</p>
      <p>We blend cutting-edge technology with creative genius to deliver super-immersive experiences that don’t just grab attention – they ignite the imagination, push brands through the clutter and break frontiers.</p></>,
    list: lists,
    isList: false,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/924775413/rendition/240p/file.mp4?loc=external&log_user=0&signature=8ec85e9167e33fa1f6f0341d28222d54340a4a5eff496c22a01c4feb71262cb9",
  }


  // ===== sales
  const sales = {
    title: "The Best Video Animation Services Are Just a Click Away!",
    subtitle: "",
    desc: "",
    branImage: SaleShine,
  }


  return (
    <>
      <InnerBanner content={banner} />
      <Form />
      <Packages /> <OurClient />

      <Extraordinary />
    </>
  )
}

export default page
