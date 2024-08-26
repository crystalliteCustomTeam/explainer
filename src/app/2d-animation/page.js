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
    "",
    "",
    "",
    "",
    "",
  ]

  const banner = {
    title: <>Break Attention Spans With 2D Animation Services</>,
    para: <>Thrive in the digital world with 2D animation services, that ensure pixel-perfect quality to help brands stand out digitally. Let's make some objects move around and create a real buzz for your brand.</>,
    list: lists,
    isList: false,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916116973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=77fdc5bd531e7ad88bc093f0ed7a0b34f0c4b24122d3d126758e255b1a15575a",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>2D Animation Services at Its Best!</>,
    para: <>At our 2D animation company, we specialize in delivering cutting-edge animation solutions that drive exceptional results for businesses. Our team of seasoned 2D animators leverages advanced techniques, precision, and creativity to animate visually stunning animations that engage and captivate your audience. With a streamlined production process, we consistently produce animations that rival those of top-tier 2D video production companies.</>,
    subtitleOne: <>Immersive 2D Animations</>,
    subtitleTwo: <>Making visual experiences ‘better’!</>,
    subpara: <>2D animated videos are a dynamic medium that brings static images to life through intricate movement and storytelling. These 2D animations are created in a two-dimensional space, utilizing frame-by-frame techniques, vector-based graphics, and traditional animation methods to produce captivating visual experiences. At Explainer Videos LLC, we specialize in harnessing the full potential of 2D animation to create custom videos that are not only visually engaging but also technically sound and strategically impactful.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916096653/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2c1fbdcd7282fe2b314ed51948a2b8195b14b7d762295e12e88097ea4fc583e2",
  }

  //=====Portfilio Fold=====// 
  const portfolio = {
    title: (<>Our Never-Ending Portfolio of Video Animation </>),
    para: (<>Our portfolio is certainly one-of-a-kind – see how we have empowered brands through animation and explainer videos.</>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Convey Stories Through Our Ground-Breaking 2D Animation Services",
    subtitle: "",
    desc: "Explainer Videos LLC. focuses on delivering top-tier 2D animations that simplify complex concepts, capture attention, and enhance brand messaging. By using advanced animation software, our team produces high-quality animations that are both cost-effective and highly effective in driving engagement. From character animation to explainer videos, our 2D animations are meticulously crafted to ensure seamless motion and vibrant visuals that resonate with your target audience.",
    branImage: BranShine,
    isBranImage: true,
    css: "w-9/12 ml-auto",
    positionCss: "",
    btnTxt: "Make An Animation "
  }

  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Conceptualization</>,
    cardpara: <>At this stage, we can communicate directly with you about your project and ask for the full brief. Then we plan your 2D animated video. We brainstorm and iterate after understanding the needs of your brand or project, as well as your target audience. This process may include the formats, visual effects, characters, and other elements required to create a stunning 2D animation video.</>,
    css: "w-8/12 mx-auto",
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Pre-production</>,
    cardpara: <>At this point, we begin to put our plans into action. We'll communicate extensively with you to understand the motivation/purpose of your 2D animation video, ensuring that it achieves its goal. This stage includes everything from storyboard sketching to design, animation technique implementation, and scripting to ensure a smooth, flawless 2D animation production.</>,
    css: " before:content-[''] before:h-[60%] before:w-full before:bg-[url('../../public/home/card_image-bg.png')] before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:left-0 before:bottom-0 before:rounded-b-[15px] before:z-[-1] z-[999999999]",
    imageCss: 'w-full',
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Animation Production</>,
    cardpara: <>This is the longest and most iterative stage of the process, where we have to create the video's animations. Here we look at the 2D animation projects' backgrounds, layouts, music, frames, and other design elements. Our animators, designers, and concept artists collaborate with you at this stage to provide you with the best.</>,
    css: "",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Post-production</>,
    cardpara: <>After the completion of the 2D animation video, we revamp and revise it to bring up a clearer, crisp, and final version of the video. We go through the storyboard to ensure that the video is ready to serve its purpose and is created as planned. If necessary, we also improve the lighting and composition of the video and add more content to make it unique and stand out.</>,
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
    cardtitle: <>Final Delivery</>,
    cardpara: <>After we finish the 2D animated video, we send it to you for your final feedback. We deliver the files in multiple formats, including MP4, AVI, and MOV, ensuring compatibility across various platforms and devices. We always respond to your concerns with great dedication and follow any revision instructions you provide.
      At Explainer Videos LLC., client satisfaction is our top priority. We don’t consider the project complete until you’re fully satisfied with the final product. Ready to bring your vision to life? Contact us today and let’s create something extraordinary together.</>,
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>Our Approach to 2D Animation Production</>,
    para: <>We take a transparent approach to all of our 2D animation videos. See how we can create stunning 2D animations for your project.</>,
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
      <Animation />
      <Brand content={sales} />
      <OurClient />
      <Extraordinary />
    </>
  )
}

export default page
