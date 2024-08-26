"use client"

import React from 'react'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import Animations from '@/components/Animations/Animations'
import Form from '@/components/form/Form'
import Animation from '@/components/video-animation/Animation'
import Portfolio from '@/components/portfolio/Portfolio'
import Brand from '@/components/BrandShine/Brand'
import Remarkable from '@/components/Remarkable/Remarkable'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'


// ===== Images 
import BranShine from "media/2d-animation/brandshine.png"
import SaleShine from "media/home/salesimage.png"



// ===== Card Images
import Remark10 from "media/home/remark10.png"
import Remark11 from "media/home/remark11.png"
import Remark12 from "media/home/remark12.png"
import Remark13 from "media/home/remark13.png"
import Remark14 from "media/home/remark14.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- Project a professional image.",
    "- Conveys a sleek, high-quality image",
    "- Enhances viewer interest by 17%.",
    "- Versatile for videos, presentations, and social media.",
  ]

  const banner = {
    title: <>Elevate Your Brand's Visual Appeal</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916116973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=77fdc5bd531e7ad88bc093f0ed7a0b34f0c4b24122d3d126758e255b1a15575a",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>2D Animation Services at Its Best!</>,
    para: <>Your business logo is an important element of your brand’s visual identity – make it more memorable with our custom logo animation services. Our creative logo animation services will help you to make it more memorable. Adding motion to a logo produces a dynamic visual experience that grabs the audience's attention and ultimately conveys the personality of the brand, so fostering higher brand awareness and sales.</>,
    subtitleOne: <>Hook the Audience at a Glance with Unique Logos</>,
    subtitleTwo: <>Logos That Create a Buzz!</>,
    subpara: <>Logo animation is versatile and can be used on events, social media, video, presentations, or other digital areas. Implementing one-of-a-kind logo animation into your marketing strategy will assist you in producing a strong and consistent brand image that ignites audience interest. As a logo animation production company, we can dynamically transform your brand and help define its first impression.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916096653/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2c1fbdcd7282fe2b314ed51948a2b8195b14b7d762295e12e88097ea4fc583e2",
  }

  //=====Portfilio Fold=====// 
  const portfolio = {
    title: (<>Our Never-Ending Portfolio of Video Animation</>),
    para: (<>Our portfolio is certainly one-of-a-kind – see how we have empowered brands through animation and explainer videos.</>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Stay Ahead of the Competition with Custom Logo Animation Services",
    subtitle: "",
    desc: "The right custom logo design can build brand identity. Whether your brand is new or established, a good image helps attract and retain customers. Your brand logo should be professional to compete with the fierce competition. Explainer Videos LLC creates stunning yet affordable logos. We ensure your brand logo is the first thing people notice about your business. Our talented graphic designers create unique logos that excite everyone. We offer brand-centric, passion-driven logos in various formats. Let us help you choose the right one for your brand. ",
    branImage: BranShine,
    isBranImage: true,
    css: "w-9/12 ml-auto",
    positionCss: "",
    btnTxt: "Make An Animation "
  }

  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Brand Evaluation</>,
    cardpara: <>At Explainer Video LLC, we follow a thorough brand evaluation to grasp its central values and market positioning. After that, we build a thorough client persona that reflects your expectations and goals so that our design exactly complements your vision and aims.</>,
    css: "w-8/12 mx-auto",
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Competitor Research</>,
    cardpara: <>Our team of experts searches your rivals closely to identify industry trends and design standards. Knowing what appeals to the market will help us create a logo that not only grabs attention but also connects powerfully with your target market, so providing a competitive edge.</>,
    css: " before:content-[''] before:h-[60%] before:w-full before:bg-[url('../../public/home/card_image-bg.png')] before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:left-0 before:bottom-0 before:rounded-b-[15px] before:z-[-1] z-[999999999]",
    imageCss: 'w-full',
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Conceptualization</>,
    cardpara: <>We hold creative brainstorming sessions to produce several logo concepts. Our staff explores multiple ideas and design approaches to make sure every one of them represents the essence of your brand and satisfies your particular needs.</>,
    css: "",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>First Draft</>,
    cardpara: <>We show you our first logo ideas for review. This phase lets us gather feedback on the suggested designs, color palettes, and elements ensuring the logo aligns with your vision before moving forward with revisions.</>,
    cardImage: Remark13,
  }
  const cardSeven = {
    cardtitle: <></>,
    cardpara: <></>,
    cardImage: "",
  }
  const cardEight = {
    cardtitle: <></>,
    cardpara: <></>,
    cardImage: "",
  }
  const cardTen = {
    cardtitle: <>Revisions & Logo Delivery</>,
    cardpara: <>Your feedback will allow us to make necessary adjustments to the chosen logo ideas. This iterative process guarantees that the final design satisfies your expectations while incorporating any changes you ask for, thereby producing a logo that exactly embodies your brand.
      We show you the animated logo design once the final logo has been finalized. We guarantee the logo is ready for use across all your branding materials and digital platforms in various formats.</>,
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>Our Logo Animation Design Process for Your Seamless Experience</>,
    para: <>Starting a business? Our seamless custom logo animation services help you shape your brand. Our simple but futuristic approach ensures your logo never runs out of style.</>,
    cardOne: cardOne,
    cardTwo: cardTwo,
    cardThree: cardThree,
    cardFour: cardFour,
    cardSeven: cardSeven,
    cardEight: cardEight,
    cardTen: cardTen,
    isHomePage: false,
  }

  // ===== sales
  const sales = {
    title: "Affordable & Conversion-Focused Animation Services for All!",
    subtitle: "",
    desc: "",
    branImage: SaleShine,
  }


  return (
    <>
      <InnerBanner content={banner} />
      <Form />
      <Animations content={animations} />
      <Portfolio content={portfolio} />
      <Brand content={brands} />
      <Remarkable content={remarkable} />
      {/* <Animation /> */}
      <Brand content={sales} />
      <OurClient />
      <Extraordinary />
    </>
  )
}

export default page
