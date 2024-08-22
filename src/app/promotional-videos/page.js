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

// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.jpg"
import Thumnail2 from "media/thumbnails/2d-animation/2.jpg"
import Thumnail3 from "media/thumbnails/2d-animation/3.jpg"
import Thumnail4 from "media/thumbnails/2d-animation/4.jpg"
import Thumnail5 from "media/thumbnails/2d-animation/5.jpg"
import Thumnail6 from "media/thumbnails/2d-animation/6.jpg"
import Thumnail7 from "media/thumbnails/3d-animation/1.jpg"
import Thumnail8 from "media/thumbnails/3d-animation/2.jpg"
import Thumnail9 from "media/thumbnails/3d-animation/3.jpg"
import Thumnail10 from "media/thumbnails/3d-animation/4.jpg"
import Thumnail11 from "media/thumbnails/3d-animation/5.jpg"
import Thumnail12 from "media/thumbnails/3d-animation/6.jpg"
import Thumnail13 from "media/thumbnails/whiteboard/1.jpg"
import Thumnail14 from "media/thumbnails/whiteboard/2.jpg"
import Thumnail15 from "media/thumbnails/whiteboard/3.jpg"
import Thumnail16 from "media/thumbnails/whiteboard/4.jpg"
import Thumnail17 from "media/thumbnails/whiteboard/5.jpg"
import Thumnail18 from "media/thumbnails/whiteboard/6.jpg"
import Thumnail19 from "media/thumbnails/motion-graphics/1.jpg"
import Thumnail20 from "media/thumbnails/motion-graphics/2.jpg"
import Thumnail21 from "media/thumbnails/motion-graphics/3.jpg"
import Thumnail22 from "media/thumbnails/motion-graphics/4.jpg"
import Thumnail23 from "media/thumbnails/motion-graphics/5.jpg"
import Thumnail24 from "media/thumbnails/motion-graphics/6.jpg"
import Thumnail25 from "media/thumbnails/hybrid/1.jpg"
import Thumnail26 from "media/thumbnails/hybrid/2.jpg"
import Thumnail27 from "media/thumbnails/hybrid/3.jpg"
import Thumnail28 from "media/thumbnails/hybrid/4.jpg"
import Thumnail29 from "media/thumbnails/hybrid/5.jpg"
import Thumnail30 from "media/thumbnails/hybrid/6.jpg"

// ===== Card Images
import Remark10 from "media/home/remark28.png"
import Remark11 from "media/home/remark29.png"
import Remark12 from "media/home/remark30.png"
import Remark13 from "media/home/remark31.png"
import Remark14 from "media/home/remark32.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- High Quality & Fast Video Animation Services",
    "- Specialists in 2D & 3D Animation Services",
    "- More than 1,500 satisfied clients",
    "- Experience Fastest Turnaround Time",
  ]

  const banner = {
    title: <>Promotional Videos To
      Get People Talking</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916123936/rendition/2160p/file.mp4?loc=external&log_user=0&signature=24c295b2c8335f8419c5c7601315f8870ddbfdd2f5baa61704aaacbd7445a43f",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>Best Explainer Video Creation Service</>,
    para: <>At Cloud Studios Inc our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making we ensure our clients are fully aware of the project progress and are completely satisfied too. We cater a strong relationship with clients,
      starting from your ideas,</>,
    subtitleOne: <>Professional Animated Video</>,
    subtitleTwo: <>Services For Diverse Businesses</>,
    subpara: <>Animated videos are a great way to fascinate your viewers with rich, intriguing, and playful scenes. It is evaluated according to a study that animations videos can boost your company sales upto around 49%. Our Cloud Studios Inc offers you the interactive, innovative approach to motion pictures creation in the 2D format in tight deadline terms and affordable prices. We are proud to have served top-notch names in the industry with our service.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916123974/rendition/1440p/file.mp4?loc=external&log_user=0&signature=9d6d78c0847109390b98e85f6664c9604c11f6f12253752ce898a64919140440",
  }

  //=====Portfilio Fold=====// 
  const tabInfo = [
    { label: "2D Animations", index: 0 },
    { label: "3D Animation", index: 1 },
    { label: "Whiteboard", index: 2 },
    { label: "Motion Graphics", index: 3 },
    { label: "Hybrid Animation", index: 4 },
  ];
  const tabContents = [
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
        thumbnail: Thumnail1,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
        thumbnail: Thumnail2,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
        thumbnail: Thumnail3,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
        thumbnail: Thumnail4,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
        thumbnail: Thumnail5,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
        thumbnail: Thumnail6,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
        thumbnail: Thumnail7,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
        thumbnail: Thumnail8,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
        thumbnail: Thumnail9,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
        thumbnail: Thumnail10,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
        thumbnail: Thumnail11,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
        thumbnail: Thumnail12,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
        thumbnail: Thumnail13,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
        thumbnail: Thumnail14,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
        thumbnail: Thumnail15,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
        thumbnail: Thumnail16,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
        thumbnail: Thumnail17,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
        thumbnail: Thumnail18,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
        thumbnail: Thumnail19,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
        thumbnail: Thumnail20,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
        thumbnail: Thumnail21,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
        thumbnail: Thumnail22,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
        thumbnail: Thumnail23,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
        thumbnail: Thumnail24,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: Thumnail25,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: Thumnail26,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
        thumbnail: Thumnail27,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
        thumbnail: Thumnail28,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
        thumbnail: Thumnail29,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
        thumbnail: Thumnail30,
      }
    ],
  ];
  const portfolio = {
    title: (<> Our Flamboyant Vault of Video Animation </>),
    para: (<>Our creative prospectus, over the years, has garnered quite a reputation for itself. <br /> Here’s the evidence:</>),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Broad-Cast Your Brand Worldwide Through Custom Animated Videos!",
    subtitle: "",
    desc: "At Cloud Studios Inc we exhibit professionalism through our animated videos, we deliver to our prestigious clients. Our Videos bring interest and spirit to your subject. Our animators create and present even the most complicated concepts in the simplest way possible. At Cloud Studios Inc we take care of every feature of your corporate identity. We assure you that we will make use of every latest and related method to develop and improve your corporate identity in the market with our best video service.",
    branImage: BranShine,
    isBranImage: true,
    css: "mx-auto w-9/12",
    positionCss: "",
    btnTxt: "Make An Animation     +"
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Professional Script Writing</>,
    cardpara: <>Our exceptional script writers ensure to achieve the goal of plotting out your whole story in their write-up, because the more detailed we make our outline, the less time we will have to waste down the road. By building a strong story is the key to keeping the audience engaged, driving the story forward and making them take the action.</>,
    css: "mb-[-52px]",
    imageCss: 'min-w-[250px] max-w-[250px] max-h-[300px] mb-[-33px]',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Storyboarding & Sequencing</>,
    cardpara: <>After creating a professional and engaging script, the experts at Cloud Studios Inc move towards the next phase of 2D Animation creation process, which is ‘Storyboarding & Sequencing’. A storyboard or a sequence is a visual representation of a video sequence and breaks down the action into individual panels. </>,
    css: "",
    imageCss: "absolute right-0 bottom-[-17px] w-full",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Animation And Music</>,
    cardpara: <>After designing the animation backgrounds/characters/product model as per your requirement, now it's time for the namesake job of the 2D animation design process. At Cloud Studios Inc, our professionals in this phase craft the actual engagement in the animation. This is the stage where a lot of creative magic happens! </>,
    css: "absolute bottom-[-1px] lg:w-full left-0 right-0 ",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Animation Design</>,
    cardpara: <>After storyboarding and setting the visual representation of your 2D animation video, we move to our next important step, which is ‘Animation Designing’. At this stage of the 2D animation process, our 2D animators further visualize the story and add style following the brand guidelines of the client. </>,
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
    cardtitle: <>Finalizing & Delivery</>,
    cardpara: <>THAT’S IT, your 2D animation video is complete and ready to rock and roll! Cloud Studios Inc will deliver it to you as HD 1080p MOV or MP4 file, ready for download. In case, you need any other format for your video, we are here to cater to your that requirement as well. If you need help figuring out how to host your video, where to place it, or how to market it in the best possible manner, Cloud Studios Inc is happy to point you in the right direction!
      <br /><br />
      Hire us today to discuss your 2D animation video project with our experts. If you’d like to know more information on our 2D animation process, let’s set up a time to chat or call!
    </>,
    css: "w-10/12 mb-[-40px]",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How We Achieve Remarkable Outcomes</>,
    para: <>At Cloud Studios Inc, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors <br />
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
      <Animation />
      <Brand content={sales} />
      <OurClient />
      <Extraordinary />
    </>
  )
}

export default page
