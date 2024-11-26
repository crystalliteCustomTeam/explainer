// import { Header, Hero, TabSection, Portfolio, Pricing, Process, Testimonial, CallToAction, Footer } from '@/components/explainer-animated-videos'
import { Header, Hero, TabSection, Portfolio, Pricing, Process, Testimonial, CallToAction, Footer } from '@/components/explainer-animated-videos'
import React from 'react'


const page = () => {
  return (
    <main className='bg-[url("../../public/explainer-animated-videos/full-banner.jpg")] bg-cover bg-no-repeat w-full h-full relative text-white font-sfMono z-0'>
      <Header />
      <Hero />
       <TabSection /> 
      <Portfolio />
     <Pricing />
     <Process />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default page