"use client"

import React from 'react'
import Banner from '@/components/Banner/Banner'
import Form from '@/components/form/Form'
import Bussiness from '@/components/Bussiness/Bussiness'
import Assisted from '@/components/Assisted/Assisted'
import Animation from '@/components/video-animation/Animation'
import Portfolio from '@/components/portfolio/Portfolio'
import Brand from '@/components/BrandShine/Brand'
import Remarkable from '@/components/Remarkable/Remarkable'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'

// ===== Images 
import BranShine from "media/home/brandshine.webp"
import SaleShine from "media/home/salesimage.png"


// ===== Card Images
import Remark1 from "media/home/remark1.png"
import Remark2 from "media/home/remark2.png"
import Remark3 from "media/home/remark3.png"
import Remark4 from "media/home/remark4.png"
import Remark5 from "media/home/remark5.png"
import Remark6 from "media/home/remark6.png"
import Remark7 from "media/home/remark7.png"
import Remark8 from "media/home/remark8.png"
import Remark9 from "media/home/remark9.png"


const page = () => {

  //=====Portfilio Fold=====// 
  const portfolio = {
    title: (<>Our Never-Ending Portfolio of Video Animation </>),
    para: (<>We’re not just your typical animated explainer crew or a live-action studio—we’re your creative partners in storytelling magic!  Think of us as your squad of motion wizards, wordsmiths, and design geniuses, ready to turn your ideas into eye-popping videos that make waves. From slick animations to captivating promos, we’re all about crafting visuals that not only impress but also inspire action. Curiosity is our jam! Together, we love to dive deep into your brand’s vibe, mixing creativity with strategy to create something truly unforgettable utilizing the everlasting power of the video medium and animation. </>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Welcome To Our Animated Wonderland!",
    subtitle: "We know that your brand deserves only the best.",
    desc: "Within the halls of Explainer Videos LLC, we embody professionalism, epitomized through our tailored animated creations, methodically tailored for our esteemed clientele. Infused with vitality and intrigue, our videos serve as dynamic vehicles for conveying your message. Our adept animators specialize in translating even the most intricate concepts into visual narratives. At Explainer Videos LLC, we handle every facet of your corporate identity with precision, leveraging the latest methodologies to amplify your brand's presence in the market through our top-tier video services, spanning video explainer, explainer videos, video animation, 2D animation services, 3D animation services, and whiteboard animation.",
    branImage: BranShine,
    isBranImage: true,
    css: "lg:min-h-[550px] xl:w-10/12 animationUpDown",
    positionCss: "absolute top-[-43px] right-[-15px] lg:top-[-110px] lg:right-[25px]",
    btnTxt: "Let's Begin Your Animated Journey Together!"
  }

  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Brainstorming</>,
    cardpara: <>Begin with a creative kickoff session. Dive into your brand’s essence, goals, and target audience. Let ideas flow like a vibrant brainstorm!</>,
    css: "w-8/12 mx-auto",
    cardImage: Remark1,
  }
  const cardTwo = {
    cardtitle: <>Scriptwriting</>,
    cardpara: <>Craft a compelling script that tells your story. Keep it engaging, concise, and packed with key messages that resonate with your audience.</>,
    cardImage: Remark2,
  }
  const cardThree = {
    cardtitle: <>Storyboarding </>,
    cardpara: <>Visualize your script! Create a storyboard that maps out each scene. This is where the magic begins to take shape, providing a sneak peek of the final video.</>,
    cardImage: Remark3,
  }
  const cardFour = {
    cardtitle: <>Textures, Style, and Design</>,
    cardpara: <>Choose your visual style! Whether it’s sleek 2D, immersive 3D, or dynamic whiteboard, this step defines the look and feel of your video.</>,
    cardImage: Remark4,
  }
  const cardFive = {
    cardtitle: <>High Fidelity Voiceovers</>,
    cardpara: <>Bring your script to life with a professional voiceover. Choose a voice that matches your brand’s vibe—energetic, calm, or somewhere in between.</>,
    cardImage: Remark5,
  }
  const cardSix = {
    cardtitle: <>Immersive Animation</>,
    cardpara: <>Time to animate! Our talented team will bring your storyboard to life, adding motion, color, and flair to create captivating visuals.</>,
    cardImage: Remark6,
  }
  const cardSeven = {
    cardtitle: <>Sound Design & Music </>,
    cardpara: <>Add the finishing touches with sound effects and a catchy soundtrack. Music sets the mood and enhances the overall experience of your video.</>,
    cardImage: Remark7,
  }
  const cardEight = {
    cardtitle: <>Review & Revise </>,
    cardpara: <>Collaborate closely to review the draft. Gather feedback and make any necessary tweaks to ensure the final product hits all the right notes.</>,
    cardImage: Remark8,
  }
  const cardNine = {
    cardtitle: <>Launch & Convert</>,
    cardpara: <>Rendering epitomizes the transformative procedure wherein a three-dimensional model or animation is transmuted into a two-dimensional image or video composition.</>,
    cardImage: Remark9,
  }

  const remarkable = {
    title: <>Our Simple and Continuously Evolving Process for the Best Results!</>,
    para: <>Release your video into the wild! Promote it across your channels and watch as it captivates your audience, drives engagement, and elevates your brand.</>,
    cardOne: cardOne,
    cardTwo: cardTwo,
    cardThree: cardThree,
    cardFour: cardFour,
    cardFive: cardFive,
    cardSix: cardSix,
    cardSeven: cardSeven,
    cardEight: cardEight,
    cardNine: cardNine,
    isHomePage: true,
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
      <Banner />
      <Form />
      <Bussiness />
      <Assisted />
      {/* <Animation /> */}
      <Portfolio content={portfolio} />
      <Brand content={brands} />
      <Remarkable content={remarkable} />
      <Brand content={sales} />
      <OurClient />
      <Extraordinary />
    </>
  )
}

export default page
