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
    "- Change dense data into compelling visuals.",
    "- Drive 35% more audience interaction.",
    "- Custom designs as per your industry",
    "- Quick turnaround on all projects",
  ]

  const banner = {
    title: <>Transform Complex Data into Visual Masterpieces</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916116973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=77fdc5bd531e7ad88bc093f0ed7a0b34f0c4b24122d3d126758e255b1a15575a",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>2Infographics Design for Brands and Businesses</>,
    para: <>You are drowning in data, but your audience isn’t biting. They’re overwhelmed, disinterested, and frankly, not connecting with your message. – Experience the power of Infographics Design and animation to boost your brand and business towards new heights with Explainer Videos LLC today!</>,
    subtitleOne: <>We Take Infographics Seriously!</>,
    subtitleTwo: <>Delivering seamless solutions for brands</>,
    subpara: <>At Explainer Videos LLC, we’ve mastered the art of converting raw data into compelling infographics that tell your story in a way that’s impossible to ignore. Our designers know how to strike the perfect balance between everything and our Infographics Design service is more than just pretty pictures! We dive deep into understanding your brand, your message, and your audience, creating visual narratives that turn complex data into clear, actionable insights.</>,
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
    title: "Ready To Turn Your Data into Your Biggest Asset? – Choose Explainer Videos LLC For the Best Infographics Design!",
    subtitle: "",
    desc: "Get started with a free consultation today and see how our Infographics Design service can revolutionize your content. For a limited time, we’re offering an exclusive 20% discount on your first project. Don’t miss out—this offer is only available for the next 7 days! It’s time to stop losing your audience to data overload. Click the button below to schedule your free consultation and start converting complexity into clarity with Explainer Videos LLC’s Infographics Design service. Your story deserves to be seen, understood and remembered.",
    branImage: BranShine,
    isBranImage: true,
    css: "w-9/12 ml-auto",
    positionCss: "",
    btnTxt: "Make An Animation "
  }

  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Data Mining & Analysis</>,
    cardpara: <>We meticulously analyze your raw data, extracting valuable insights and identifying key trends that will form the backbone of your infographic's story. By understanding the data’s underlying patterns, we ensure the information presented is both impactful and relevant to your target audience.</>,
    css: "w-8/12 mx-auto",
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Conceptual Design Mapping</>,
    cardpara: <>Our designers craft multiple layout concepts, focusing on creating a visual narrative that seamlessly aligns with your brand’s message and objectives. We explore different styles and structures to find the best way to present your data, ensuring the final design is both engaging and true to your brand’s identity.</>,
    css: " before:content-[''] before:h-[60%] before:w-full before:bg-[url('../../public/home/card_image-bg.png')] before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:left-0 before:bottom-0 before:rounded-b-[15px] before:z-[-1] z-[999999999]",
    imageCss: 'w-full',
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Custom Graphic Creation</>,
    cardpara: <>Using top-tier design software, we create unique, high-resolution visuals tailored specifically to your needs. Every element is crafted to perfection, ensuring that the graphics not only look stunning but also effectively convey your message. We prioritize customization, so your infographic stands out as one-of-a-kind.</>,
    css: "",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Iterative Refinement & Feedback</>,
    cardpara: <>We collaborate closely with you, refining the design through multiple iterations based on your feedback to achieve the perfect final product. Each revision is an opportunity to fine-tune the details, ensuring the result exceeds your expectations and fully represents your vision.</>,
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
    cardtitle: <>Final Optimization & Delivery</>,
    cardpara: <>Once the infographic is completed, we optimize it for both web and print, ensuring it looks flawless across all platforms. Whether you need it for a digital campaign or a physical presentation, we deliver the final product in multiple formats, ready for deployment across your preferred channels.</>,
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How Do We Deliver the Maximum Impact For All Your Infographic Design Through Our Method-Based Process?</>,
    para: <>We take our animation process quite seriously – we make sure that every detail, every element, and every frame we deliver aligns completely with your business and brand. Our process specialists are always there to assist you along with our project managers.</>,
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
