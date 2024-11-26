import { CallToAction } from "@/components/explainer-animated-videos/CallToAction"
import { Footer } from "@/components/explainer-animated-videos/Footer"
import Header from "@/components/explainer-animated-videos/Header"
import { Hero } from "@/components/explainer-animated-videos/Hero"
import { Portfolio } from "@/components/explainer-animated-videos/Portfolio"
import { Pricing } from "@/components/explainer-animated-videos/Pricing"
import { Process } from "@/components/explainer-animated-videos/Process"
import TabSection from "@/components/explainer-animated-videos/TabSection"
import { Testimonial } from "@/components/explainer-animated-videos/Testimonial"

const page = () => {
  return (
    <div className='bg-[url("../../public/explainer-animated-videos/full-banner.jpg")] bg-cover bg-no-repeat w-full h-full relative text-white font-sfMono z-0'>
      <Header />
      <Hero />
      <TabSection />
      <Portfolio />
      <Pricing />
      <Process />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default page