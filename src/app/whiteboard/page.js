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
import BranShine from "media/whiteboard/brandshine.png"
import SaleShine from "media/home/salesimage.png"

// ===== Card Images
import Remark10 from "media/home/remark19.png"
import Remark11 from "media/home/remark20.png"
import Remark12 from "media/home/remark21.png"
import Remark13 from "media/home/remark22.png"
import Remark14 from "media/home/remark23.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- High Quality & Fast Video Animation Services",
    "- Specialists in 2D & 3D Animation Services",
    "- More than 1,500 satisfied clients",
    "- Experience Fastest Turnaround Time",
  ]

  const banner = {
    title: <>Engaging Whiteboard Animations For Clients </>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916124095/rendition/2160p/file.mp4?loc=external&log_user=0&signature=3c1bc08015af185d80d4a832c1d8eba71d9380480c8de67596e97b8cae183386",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>Stunning Whiteboard Animation Service</>,
    para: <>At Explainer Videos LLC we provide customized whiteboard animations. Our supremely talented team of animators help you create a professional, realistic whiteboard videos in minutes. Our whiteboard animations will help your audience entertain and get completely engaged in a positive way. Over the time, whiteboard videos have been introduced as an effective and strong marketing tool for online and physical business.</>,
    subtitleOne: <>Professional Animated Video</>,
    subtitleTwo: <>Services For Diverse Businesses</>,
    subpara: <>Animated videos are a great way to fascinate your viewers with rich, intriguing, and playful scenes. It is evaluated according to a study that animations videos can boost your company sales upto around 49%. Our Explainer Videos LLC offers you the interactive, innovative approach to motion pictures creation in the 2D format in tight deadline terms and affordable prices. We are proud to have served top-notch names in the industry with our service.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916124041/rendition/1080p/file.mp4?loc=external&log_user=0&signature=543631fa0a5497fdaa25043c3da640c31c9fb0fe9ff9debb54ce200b7c7815fd",
  }

  //=====Portfilio Fold=====// 
  const portfolio = {
    title: (<> Our Flamboyant Vault of Video Animation </>),
    para: (<>Our creative prospectus, over the years, has garnered quite a reputation for itself. <br /> Here’s the evidence:</>),
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Broad-Cast Your Brand Worldwide Through Custom Animated Videos!",
    subtitle: "",
    desc: "At Explainer Videos LLC we exhibit professionalism through our animated videos, we deliver to our prestigious clients. Our Videos bring interest and spirit to your subject. Our animators create and present even the most complicated concepts in the simplest way possible. At Explainer Videos LLC we take care of every feature of your corporate identity. We assure you that we will make use of every latest and related method to develop and improve your corporate identity in the market with our best video service.",
    branImage: BranShine,
    isBranImage: true,
    css: "lg:min-h-[350px] xl:w-9/12 animationUpDown",
    positionCss: "absolute top-[-43px] right-[-15px] lg:top-[-60px] lg:right-[-20px]",
    btnTxt: "Make An Animation "
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Professional Script Writing</>,
    cardpara: <>Our exceptional script writers ensure to achieve the goal of plotting out your whole story in their write-up, because the more detailed we make our outline, the less time we will have to waste down the road. By building a strong story is the key to keeping the audience engaged, driving the story forward and making them take the action.</>,
    css: "",
    imageCss: 'min-w-[250px] max-w-[250px] max-h-[300px] mb-[-33px]',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Storyboarding & Sequencing</>,
    cardpara: <>After creating a professional and engaging script, the experts at Explainer Videos LLC move towards the next phase of 2D Animation creation process, which is ‘Storyboarding & Sequencing’. A storyboard or a sequence is a visual representation of a video sequence and breaks down the action into individual panels. </>,
    css: "",
    imageCss: "absolute right-0 bottom-0",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Animation And Music</>,
    cardpara: <>After designing the animation backgrounds/characters/product model as per your requirement, now it's time for the namesake job of the 2D animation design process. At Explainer Videos LLC, our professionals in this phase craft the actual engagement in the animation. This is the stage where a lot of creative magic happens! </>,
    css: "absolute bottom-[8px] lg:w-7/12 left-0 right-0 ",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Animation Design</>,
    cardpara: <>After storyboarding and setting the visual representation of your 2D animation video, we move to our next important step, which is ‘Animation Designing’. At this stage of the 2D animation process, our 2D animators further visualize the story and add style following the brand guidelines of the client. </>,
    css: "w-11/12",
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
    cardtitle: <>Finalizing & Delivery</>,
    cardpara: <>THAT’S IT, your 2D animation video is complete and ready to rock and roll! Explainer Videos LLC will deliver it to you as HD 1080p MOV or MP4 file, ready for download. In case, you need any other format for your video, we are here to cater to your that requirement as well. If you need help figuring out how to host your video, where to place it, or how to market it in the best possible manner, Explainer Videos LLC is happy to point you in the right direction!
      <br /><br />
      Hire us today to discuss your 2D animation video project with our experts. If you’d like to know more information on our 2D animation process, let’s set up a time to chat or call!
    </>,
    css: "w-10/12",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How We Achieve Remarkable Outcomes</>,
    para: <>At Explainer Videos LLC, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors <br />
      or smaller projects. Every detail is considered in our comprehensive approach to ensure excellence in every animation project.</>,
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
    title: "The Best Video Animation Services Are Just a Click Away!",
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
