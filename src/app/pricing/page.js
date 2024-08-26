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
    title: <>Explainer Videos: Your Brand's Secret Weapon! </>,
    para: <><p className='pb-3'>Video content is a super-powerful tool in digital marketing and branding for businesses and digital entities. Explainer videos and animated content enable brands to cut through the digital noise and be seen, heard, and felt. Video animation captures attention, conveys complex ideas simply, and leaves an impression that sticks with audiences on sensory levels.</p>
      <p>With unlimited creative possibilities, animated explainer videos can capture your brand's essence, connect with your audience, and boost those number-focused conversions. Today's consumers demand visual storytelling, and explainer videos provide an effective and entertaining way to deliver it. Don't let your brand get left behind – grip the potential of explainer videos and see the results for your brand.</p></>,
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
      <Packages />
      <OurClient />
      <Extraordinary />
    </>
  )
}

export default page
