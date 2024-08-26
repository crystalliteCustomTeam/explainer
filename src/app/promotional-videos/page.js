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
import BranShine from "media/promotional-videos/brandshine.png"
import SaleShine from "media/home/salesimage.png"


// ===== Card Images
import Remark10 from "media/home/remark28.png"
import Remark11 from "media/home/remark29.png"
import Remark12 from "media/home/remark30.png"
import Remark13 from "media/home/remark31.png"
import Remark14 from "media/home/remark32.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- No Sets Or Actors Required",
    "- Quick And Easy To Make Changes",
    "- Improved Audience Engagements",
    "- Increased Return On Investments",
  ]

  const banner = {
    title: <>Powerful Promo Videos To Boost Your Sales</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916123936/rendition/2160p/file.mp4?loc=external&log_user=0&signature=24c295b2c8335f8419c5c7601315f8870ddbfdd2f5baa61704aaacbd7445a43f",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>Create a Conversion-Focused Corporate Promotional Video</>,
    para: <>Businesses across a gamut of industries have adopted the promotional video marketing strategy not only to showcase their products or services but also to establish their brand identity across the board. Explainer Videos LLC. specializes in creating engaging company promo videos critical for effective marketing of your products and services.</>,
    subtitleOne: <>Pitch Your USP In a Powerful Way!</>,
    subtitleTwo: <>Go-to promo video production company for diverse businesses.</>,
    subpara: <>Videos used for marketing and sales are known as promotional videos. A promotional video's primary purpose is to introduce people to a particular product, cause, or organization.Explainer Videos LLC now provides promotional video production services. From startups to enterprises, we've assisted brands tell their stories through creative and professional promotional videos.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916123974/rendition/1440p/file.mp4?loc=external&log_user=0&signature=9d6d78c0847109390b98e85f6664c9604c11f6f12253752ce898a64919140440",
  }

  //=====Portfilio Fold=====// 

  const portfolio = {
    title: (<> Our Never-Ending Portfolio of Video Animation </>),
    para: (<>Our portfolio is certainly one-of-a-kind – see how we have empowered brands through animation and explainer videos.</>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Experience Exceptional Engagement with Professional Promotional Video Production",
    subtitle: "",
    desc: "Creating an effective promotional video can be difficult for your in-house teams, often resulting in burnout, repetitive video content, and creative blackouts. Our promotional video company has the ideal solution to this problem – we make the whole process a lot simpler. By partnering with us, you can reduce your team's workload while also receiving professionally created promotional videos. Our industry-leading services create immersive and polished videos that will make your audience say, Wow! Our promotional videos generate powerful engagement and response, which can result in a significant increase in shares, reposts, tweets, and beyond.",
    branImage: BranShine,
    isBranImage: true,
    css: "mx-auto w-9/12",
    positionCss: "",
    btnTxt: "Make An Animation "
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Concept Development</>,
    cardpara: <>We start by diving deep into your brand's vision, goals, and target audience. During this phase, our creative team collaborates with you to brainstorm and develop a unique concept that aligns with your brand’s message. Whether it’s a bold promotional campaign or a subtle brand introduction, we ensure the concept sets the foundation for a video that captivates and engages.</>,
    css: "mb-[-52px]",
    imageCss: 'min-w-[250px] max-w-[250px] max-h-[300px] mb-[-33px]',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Scriptwriting</>,
    cardpara: <>Our professional scriptwriters craft a compelling narrative that clearly and effectively conveys your message. Every line is designed to keep viewers hooked, ensuring the video communicates your core message in a concise and impactful way. We focus on maintaining a tone that reflects your brand’s identity while optimizing the script for clarity, engagement, and flow.</>,
    css: "",
    imageCss: "absolute right-0 bottom-[-17px] w-full",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Storyboarding</>,
    cardpara: <>To bring the script to life visually, we create a detailed storyboard that maps out each scene of the video. This step is crucial in visualizing how the narrative will unfold, including key visual elements, transitions, and the overall structure. The storyboard serves as a blueprint, ensuring that the final product aligns perfectly with your vision before production begins.</>,
    css: "absolute bottom-[-1px] lg:w-full left-0 right-0 ",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Filming and Production</>,
    cardpara: <>With cutting-edge equipment and a talented production team, we execute the filming process with precision. Our focus during production is on capturing high-quality footage that aligns with the storyboard, ensuring every shot supports the narrative and maintains the intended tone. We handle everything from directing to lighting, creating professional and polished results.</>,
    css: "w-full absolute bottom-0 left-0",
    cardCss: "h-full min-h-[560px]",
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
    cardtitle: <>Editing and Post-Production</>,
    cardpara: <>In the final stage, our post-production team meticulously edits the footage, adding visual effects, music, and voiceovers to enhance the overall impact. This phase includes refining transitions, color grading, and syncing audio to create a seamless and engaging promo video. We ensure every detail is polished, delivering a final product that is not only visually stunning but also designed to drive results and meet your marketing objectives.</>,
    css: "w-10/12 mb-[-40px]",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>Sneak Peek to Our Process of Promo Video Production That Drives Results!</>,
    para: <>At Explainer Videos LLC, we provide a streamlined process that transforms ideas into powerful promo videos that reverberate with your audience and drive kickass results!</>,
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
