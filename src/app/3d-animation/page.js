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
import BranShine from "media/3d-animation/brandshine.png"
import SaleShine from "media/home/salesimage.png"
import BannerImage from "media/3d-animation/3d-banner.png"


// ===== Card Images
import Remark10 from "media/home/remark15.png"
import Remark11 from "media/home/remark16.png"
import Remark12 from "media/home/remark17.png"
import Remark13 from "media/home/remark3.png"
import Remark14 from "media/home/remark18.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- Personalized solutions for your brand. ",
    "- High-quality 3D animation that Impresses your audience.",
    "- Experienced 3D animation specialists at your disposal.",
    "- Cutting-edge technology for visually stunning 3D animations.",
  ]

  const banner = {
    title: <>Immersive 3D Animations that Pull Customers to Your Brand</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/924775413/rendition/240p/file.mp4?loc=external&log_user=0&signature=8ec85e9167e33fa1f6f0341d28222d54340a4a5eff496c22a01c4feb71262cb9",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>A Breathtaking 3D Experience Awaiting</>,
    para: <>Prolific Studio has a proven track record of creating highly interactive 3D animations that will engage and entice your intended audience. Regardless of the niche or complexity of the idea, we can create 3D animated visuals with a sense of realism to elicit an emotional response from your current and prospective customers. We have the most advanced 3D animation software, tools, and resources for animated creatures and characters. Furthermore, we excel at creating spellbinding environments and backgrounds based on your requirements and preferences. We can also provide exceptional VFX, background score, and music for your 3D video animations.</>,
    subtitleOne: <>3D Animation Services for Premium Results</>,
    subtitleTwo: <>Why do businesses need 3D animation?</>,
    subpara: <>To attract and engage the target customers – Explainer Videos LLC. offers 3D animated videos driven by quality to support your content production and marketing. Each of our 3D animation projects tells a unique story with high realism and natural movement. Thanks to our animators' skill and experience, we are always able to create an eye-catching project with a distinct style. You can now connect with your audience on an emotional level and seamlessly convert them into loyal customers with us.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916117105/rendition/720p/file.mp4?loc=external&log_user=0&signature=923260b1c7032379e26fa6aeba225548aa77d407720fdc9b5904828132bc9a88",
  }

  //=====Portfilio Fold=====// 

  const portfolio = {
    title: (<>Our Never-Ending Portfolio of Video Animation</>),
    para: (<>Our portfolio is certainly one-of-a-kind – see how we have empowered brands through animation and explainer videos.</>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Infusing a Blend of Animation and Reality in Our Custom Animated Videos!",
    subtitle: "",
    desc: "3D animation videos are perhaps the most versatile type of animated video that takes characters on an unexpected journey but with a fresh lens. Explainer Videos LLC is a complete package 3D animation company developing creative designs that let customers visualize and interact. The three-dimensional explainer video calls for digital adoption. Therefore, we conceptualize ideas into video content to help to change the business dynamics. With all your product animation needs, our expert 3D video animators can help you. They offer special features with high animation quality to reflect the essence of your brand and the target audience. ",
    branImage: BranShine,
    isBranImage: true,
    css: "lg:min-h-[350px] lg:w-10/12 animationUpDown",
    positionCss: "absolute top-[-43px] right-[-15px] lg:top-[-104px] lg:right-[-20px]",
    btnTxt: "Make An Animation     +"
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Briefing and scripting</>,
    cardpara: <>A thorough creative discussion is key to awesomeness and we ensure you are involved in it. We then proceed with scripting keeping in mind precision and effectiveness. Our writers are competent and know their work is demanding enough. </>,
    css: "",
    imageCss: 'w-auto',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Storyboarding</>,
    cardpara: <>We begin a 3D animation project with a storyboard, and then our creative concept artists integrate your marketing plan and video goal. Your 3D animation's every single detail is painstakingly and creatively sketched so that animators may perfectly bring it to life.</>,
    css: "",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>3D modeling</>,
    cardpara: <>Our 3D artists design characters and animate them using 3D modeling in this stage. Being a professional 3D animation studio, we have a specialized 3D modelers team that understands the motions and creates a difference.</>,
    css: "w-full absolute bottom-[-3px] lg:w-11/12",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Texturing and rigging</>,
    cardpara: <>Our creative 3D animators enjoy adding colors and creating the bone structure of a 3D animated character or model to bring it closer to life. This step of rigging and texturing demands utmost dedication and our talented animators prove their craft through it.</>,
    css: "",
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
    cardtitle: <>Animation & post-production</>,
    cardpara: <>Through the best 3D animation tools, our 3D animators bring life to your project. This phase of the project is very crucial thus we ensure that everything is flawless and accurate.
      <br /><br />
      Compositing in post-production entails importing the finished renders into software for final editing, small touch-ups, VFX special effects, etc. Combining all components—background layers, 3D animations, graphics, and music—we create a convincing picture.
    </>,
    css: "",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How Explainer Videos LLC Works on Your 3D Animation Project?</>,
    para: <>Our 3D animation services are different from others because of our immaculate working process. At Explainer Videos, we have experienced and talented 3D animators constantly driven toward producing visually striking and appealing projects.</>,
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
