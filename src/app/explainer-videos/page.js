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
import BranShine from "media/explainer-videos/brandshine.png"
import SaleShine from "media/home/salesimage.png"

// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/img01.jpg"
import Thumnail2 from "media/thumbnails/2d-animation/img02.jpg"
import Thumnail3 from "media/thumbnails/2d-animation/img03.jpg"
import Thumnail4 from "media/thumbnails/2d-animation/img04.jpg"
import Thumnail5 from "media/thumbnails/2d-animation/img05.jpg"
import Thumnail6 from "media/thumbnails/2d-animation/img06.jpg"
import Thumnail7 from "media/thumbnails/3d-animation/img01.jpg"
import Thumnail8 from "media/thumbnails/3d-animation/img02.jpg"
import Thumnail9 from "media/thumbnails/3d-animation/img03.jpg"
import Thumnail10 from "media/thumbnails/3d-animation/img04.jpg"
import Thumnail11 from "media/thumbnails/3d-animation/img05.jpg"
import Thumnail12 from "media/thumbnails/3d-animation/img06.jpg"
import Thumnail13 from "media/thumbnails/whiteboard/img01.jpg"
import Thumnail14 from "media/thumbnails/whiteboard/img02.jpg"
import Thumnail15 from "media/thumbnails/whiteboard/img03.jpg"
import Thumnail16 from "media/thumbnails/whiteboard/img04.jpg"
import Thumnail17 from "media/thumbnails/whiteboard/img05.jpg"
import Thumnail18 from "media/thumbnails/whiteboard/img06.jpg"
import Thumnail19 from "media/thumbnails/motion-graphics/img01.jpg"
import Thumnail20 from "media/thumbnails/motion-graphics/img02.jpg"
import Thumnail21 from "media/thumbnails/motion-graphics/img03.jpg"
import Thumnail22 from "media/thumbnails/motion-graphics/img04.jpg"
import Thumnail23 from "media/thumbnails/motion-graphics/img05.jpg"
import Thumnail25 from "media/thumbnails/hybrid/img01.jpg"
import Thumnail26 from "media/thumbnails/hybrid/img02.jpg"
import Thumnail27 from "media/thumbnails/hybrid/img03.jpg"
import Thumnail28 from "media/thumbnails/hybrid/img04.jpg"
import Thumnail29 from "media/thumbnails/hybrid/img04.jpg"
import Thumnail30 from "media/thumbnails/hybrid/img04.jpg"

// ===== Card Images
import Remark10 from "media/home/remark24.png"
import Remark11 from "media/home/remark20.png"
import Remark12 from "media/home/remark25.png"
import Remark13 from "media/home/remark26.png"
import Remark14 from "media/home/remark27.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- Start by converting scripts.",
    "- Employ the best voice actors.",
    "- Cost-effective animated explanatory videos",
    "- 100% customer satisfaction in best-animated explainer videos.",
  ]

  const banner = {
    title: <>Let Us Explain What You Do in 60 Seconds</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916117283/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0b2a1f2e5c0dccbe3884bea89915315936c24100893da2b2cba2ba4173fb63b0",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>Simple, Effective, and Powerful Explainer Videos</>,
    para: <>Successful companies choose visual content over simple text for a reason: people understand visuals 60,000 times faster than they could from plain text. Animated explainer videos are ideal for showing highlights, presenting a brand story, or simplifying a difficult concept.</>,
    subtitleOne: <>Clarify the Message Behind Your Brand</>,
    subtitleTwo: <>No more bland video content!</>,
    subpara: <>Are you having difficulty in conveying the right message to your intended audience? Specializing in producing short, aesthetically pleasing explainer videos that effectively communicate your message in a few seconds, Explainer Video LLC animates explainer videos to help your audience educate how your brand can provide value to them as customers. </>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916117321/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6fef75c9a5974d33a71343c534240f0b5eea08bea8950b0ab437f72fb0d22f9a",
  }

  //=====Portfilio Fold=====// 
  const portfolio = {
    title: (<>Our Never-Ending Portfolio of Video Animation</>),
    para: (<>One well-known approach to efficiently reach your target audience is through animated explainer videos. Explainer Videos LLC is the best explainer video company that creates customized explainer videos for customers. Our narrative-driven characters with a knack for visual storytelling assist in making difficult ideas quite easy to understand. We emphasize showing difficult concepts in the simplest ways bringing more value to your business with corporate videos. Our talented team works hard to produce original content that grabs viewers' interest through these videos.</>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Simplifying Everything You Need to Explain with Our Custom Explainer Video ",
    subtitle: "",
    desc: "At Explainer Videos LLC we exhibit professionalism through our animated videos, we deliver to our prestigious clients. Our Videos bring interest and spirit to your subject. Our animators create and present even the most complicated concepts in the simplest way possible. At Explainer Videos LLC we take care of every feature of your corporate identity. We assure you that we will make use of every latest and related method to develop and improve your corporate identity in the market with our best video service.",
    branImage: BranShine,
    isBranImage: true,
    css: "mx-auto w-9/12",
    positionCss: "",
    btnTxt: "Make An Animation     +"
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Ideas conceptualization</>,
    cardpara: <>Send us your ideas; our creative staff will work with you to develop them into strong visual concepts. We deeply brainstorm to make sure your vision is accomplished with originality and style, setting the stage for a captivating explainer video.</>,
    css: "",
    imageCss: 'min-w-[250px] max-w-[250px] max-h-[300px] mb-[-33px]',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Scripting</>,
    cardpara: <>Our professional scriptwriters create a story that successfully conveys your message to the world. We evaluate your ideas and hone them into a gripping script that captivates your audience thereby ensuring clarity, impact, and alignment with the tone and goals of your brand.</>,
    css: "",
    imageCss: "absolute right-0 bottom-0",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Storyboarding</>,
    cardpara: <>By breaking down your animation into detailed stages, we design the visual flow, dialogue, and audio effects. From character designs to background images, this phase includes creating every component to guarantee the animation runs naturally and keeps viewers interested throughout the video.</>,
    css: "absolute bottom-[8px] lg:w-8/12 left-0 right-0 ",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Voiceover final touches</>,
    cardpara: <>In this crucial last phase, we carefully combine all the animated components to produce a coherent video. We include voiceovers, precisely synced with the images, and guarantee the audio complements your message. You write the script; we handle everything else to produce a polished, professional video ready to wow. </>,
    css: "w-auto mb-[-25px]",
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
    cardtitle: <>Rendering and Animation</>,
    cardpara: <>It's time to bring your animation to life and let everyone see it. Using premium tools and software, our talented animators create high-quality visuals that guarantee every frame is seamless and interesting. From transitions to effects, we painstakingly perfect every element to produce an impeccable final product. We export the animation in the required format once it is finished, so prepare it for release on your chosen platforms. Explainer Video LLC guarantees that your explainer video not only looks great but also helps you to transmit your message.</>,
    css: "w-8/12 mb-[-40px]",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How We Create Video for Impact and Clarity</>,
    para: <>Explore the process behind explainer video animation production for your brand with Explainer Video LLC. Our talented animators work methodically, step-by-step to guarantee your message is clear, intriguing, and powerful. </>,
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
