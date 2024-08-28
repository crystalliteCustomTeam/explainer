
import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import AwardWinning from './components/AwardWinning/AwardWinning'
import Portfolio from './components/Portfolio/portfolio'
import Packages from './components/Packages/Packages'
import Animation from './components/video-animation/Animation'
import Brand from './components/BrandShine/Brand'
import Animations from './components/Animations/Animations'
import Serve from './components/Serve/Serve'
import Remarkable from './components/Remarkable/Remarkable'
import OurClient from './components/ourClient/OurClient'
import Faqs from './components/faqs/Faqs'
import Footer from './components/Footer/Footer'
import SidebarCTA from './components/sidebarcat/SidebarCta'
// Images
import BranShine from "media/infinity-studio-lp-new/brandshine.webp"
import SaleShine from "media/explainer-videos/salesimage.png"
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
import Thumnail29 from "media/thumbnails/hybrid/5.png"
import Thumnail30 from "media/thumbnails/hybrid/6.png"
// ===== Card Images
import Remark1 from "media/infinity-studio-lp-new/remark1.png"
import Remark2 from "media/infinity-studio-lp-new/remark2.png"
import Remark3 from "media/infinity-studio-lp-new/remark3.png"
import Remark4 from "media/infinity-studio-lp-new/remark4.png"
import Remark5 from "media/infinity-studio-lp-new/remark5.png"
import Remark6 from "media/infinity-studio-lp-new/remark6.png"
import Remark7 from "media/infinity-studio-lp-new/remark7.png"
import Remark8 from "media/infinity-studio-lp-new/remark8.png"
import Remark9 from "media/infinity-studio-lp-new/remark9.png"


const page = () => {
    //==== Animations Sections =====//
    const animations = {
        title: <>Best <span className='text-[#FF0000]'>Explainer Video Animation</span> Creation Services</>,
        para: <>At Explainer Videos LLC, our team transforms creativity into compelling visuals, crafting pivotal explainer videos for business success. Our seamless process keeps you informed and satisfied throughout.</>,
        subtitleOne: <><span className='text-[#FF0000]'>Explain Better. </span> Drive <br className='xl:block hidden' /> Engagement. Get More Sales.</>,
        subtitleTwo: <>Don't settle for ordinary—capture your audience’s attention with the irresistible allure of animated videos.</>,
        subpara: <>
            Our explainer videos simplify complex ideas and engage viewers like never before. Studies show that explainer videos can boost sales by up to 49%, so investing in our animations is a game-changer for your ROI. At Explainer Videos LLC, we deliver innovative, high-quality videos on tight deadlines and at competitive prices. Join top industry leaders who have already reaped the rewards of our exceptional service. Elevate your business with the power of explainer videos today!
        </>,
        AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/1003646118/rendition/1080p/file.mp4?loc=external&signature=b1f2b712c970db0f879eff69249267bb59fccad7b6a0e48de91aa03c5c919656",
    }
    // ==== brands Start
    const brands = {
        title: <>Broad-Cast <span className='text-black'>Your Brand</span> Worldwide Through Custom Animated Videos!</>,
        subtitle: "",
        desc: <>We assure you that we will make use of every latest and related method <br className='xl:block hidden' />  to develop and improve your corporate identity in the market with our best video service.</>,
        branImage: BranShine,
        isBranImage: true,
        css: "lg:w-[32%] ml-auto absolute right-[20px] top-[-75px] xl:top-[-95px]",
        positionCss: "",
        btnTxt: "Get Started",
        callTxt: "Live Chat",
        isColor: false,
    }
    //==== remarkable start =====//
    const cardOne = {
        cardtitle: <>Concept and Storyboards</>,
        cardpara: <>Develop initial ideas and sketch scenes to visualize the narrative, setting the foundation for the project’s direction and flow.</>,
        css: "w-8/12 mx-auto",
        cardImage: Remark1,
    }
    const cardTwo = {
        cardtitle: <>Texturing</>,
        cardpara: <>Apply textures to models to enhance their appearance, adding details like colors, patterns, and surface finishes.</>,
        cardImage: Remark2,
    }
    const cardThree = {
        cardtitle: <>Rigging</>,
        cardpara: <>Create skeletal structures for models, allowing them to move and deform naturally during animation.</>,
        cardImage: Remark3,
    }
    const cardFour = {
        cardtitle: <>Lighting</>,
        cardpara: <>Design and position lights in the scene to enhance mood, highlight details, and create realistic visual effects.</>,
        cardImage: Remark4,
    }
    const cardFive = {
        cardtitle: <>Animation</>,
        cardpara: <>Bring characters and objects to life through movement, following the storyboard and rigging setups to achieve desired actions.</>,
        cardImage: Remark5,
    }
    const cardSix = {
        cardtitle: <>Compositing and Special VFX</>,
        cardpara: <>Combine various visual elements and add special effects to create a cohesive and striking final image.</>,
        cardImage: Remark6,
    }
    const cardSeven = {
        cardtitle: <>Music and Foley</>,
        cardpara: <>Compose or select background music and create sound effects to enhance the atmosphere and impact of the visuals.</>,
        cardImage: Remark7,
    }
    const cardEight = {
        cardtitle: <>Editing and Final Output</>,
        cardpara: <>Cut and assemble footage, ensuring smooth transitions and finalizing the project for distribution in the desired format.</>,
        cardImage: Remark8,
    }
    const cardNine = {
        cardtitle: <>Rendering & Delivery</>,
        cardpara: <>Generate the final high-quality images or sequences from the models and animations, processing them into the final visual output.</>,
        cardImage: Remark9,
    }
    const remarkable = {
        title: <>How Explainer Videos LLC <span className='text-[#FF0000]'>Achieve Remarkable</span> Outcomes</>,
        para: <>At Explainer Videos LLC, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors or smaller projects. Every detail is considered in our comprehensive approach to ensure excellence in every animation project.</>,
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
        title: "The Best Video Animation Services Are Just A Click Away!",
        subtitle: "",
        desc: "",
        branImage: SaleShine,
        isColor: true,
    }
    //===== FAQS =====//
    const accordionData = [
        {
            question: 'How long should an explainer video be?',
            answer: "Typically, explainer videos are between 60 to 90 seconds long. This length is ideal for capturing attention and delivering key messages effectively.",
        },
        {
            question: 'What information do I need to provide?',
            answer: "You should provide details about your product or service, target audience, key messages, and branding guidelines. The more information you provide, the better the video will align with your vision.",
        },
        {
            question: 'Can I use my voiceover, or do you provide one?',
            answer: "You can use your voiceover, or we can provide professional voiceover services. Just let us know your preference.",
        },
        {
            question: 'What is the turnaround time for an explainer video?',
            answer: "The typical turnaround time is 4 to 6 weeks, depending on the complexity of the video and feedback response times.",
        },
        {
            question: 'Can I use the video for multiple platforms?',
            answer: "Yes, the video can be optimized for various platforms such as websites, social media, and presentations. Just specify where you plan to use it.",
        },
        {
            question: 'What are the benefits of using an explainer video?',
            answer: "Explainer videos simplify complex information, increase viewer engagement, boost conversion rates, and enhance brand recognition. They provide a compelling and memorable way to communicate your message to your audience.",
        },
    ];
    const faqs = {
        accordionData: accordionData,
    }
    //=====Portfilio Fold=====// 
    const tabInfo = [
        { label: "2D Animation", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Hybrid Animation", index: 2 },
        { label: "Whiteboard Animation", index: 3 },
        { label: "Motion Graphics", index: 4 },
    ];
    const tabContents = [
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919379331/rendition/1080p/file.mp4?loc=external&signature=688759b3a128941cd55dfa9b0248db0a5d69063eda5f3f1cacfe2758156c5307",
                thumbnail: Thumnail1,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919380387/rendition/1080p/file.mp4?loc=external&signature=b7116bf5ad0555de402224a7902cfaa177953cfffcb0949377919a296d82cf77",
                thumbnail: Thumnail2,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919383086/rendition/1080p/file.mp4?loc=external&signature=6db0477d04acd09b4296048138e74bbfe535d0c4d6932aff01db7efa6d97fcc4",
                thumbnail: Thumnail3,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919381089/rendition/1080p/file.mp4?loc=external&signature=182022d7d6dc25829bc2c03be4ddd34e5958ce8949daf035b5ab88a9b596750d",
                thumbnail: Thumnail4,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919383727/rendition/1080p/file.mp4?loc=external&signature=5d7c8749c14f61b54839b81ea1b3672660eaad20830f7b9211687d16df6b2b42",
                thumbnail: Thumnail5,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/920485906/rendition/1080p/file.mp4?loc=external&signature=d7dd90e27ce4dbbd56cb9c09eb276d73ba719c0c19f584edf41f47f1ce297777",
                thumbnail: Thumnail6,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919392459/rendition/1080p/file.mp4?loc=external&signature=ac9f7046018f628b3e07c3d01f3bd2c3a36b37627a8c49b7a9e0efbd3ebc92f5",
                thumbnail: Thumnail7,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919390533/rendition/1080p/file.mp4?loc=external&signature=c76b981a883dfcb0cd240c857eade6dd476450bf53e4e0f2680e692b3d593ed0",
                thumbnail: Thumnail8,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919390288/rendition/1080p/file.mp4?loc=external&signature=33d12e3567d3f01592d8a2caac63406247f1f0571a304c5143cbf4b7028fdd1a",
                thumbnail: Thumnail9,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919389941/rendition/1080p/file.mp4?loc=external&signature=2c72e8dc9b6b332b2d666cfdedcdfefa269b15dc31740d1d4cfccf1d23aae37d",
                thumbnail: Thumnail10,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919388895/rendition/1080p/file.mp4?loc=external&signature=2d1fe0c37ae5c13e049a9969a8e03c7ad1d882f218498e312a59b46db0d7ca7e",
                thumbnail: Thumnail11,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919387889/rendition/1080p/file.mp4?loc=external&signature=e791632c4f2941cc5710cff8dc8c601026828f4c71056c6971396d3326685b10",
                thumbnail: Thumnail12,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/920567123/rendition/1080p/file.mp4?loc=external&signature=46417ad19f9c7ee2365787670b7b7cfd33b270410032ca3d43364c08c20f8f28",
                thumbnail: Thumnail25,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/920118952/rendition/1080p/file.mp4?loc=external&signature=b3f7b88a02ddcd4ae523d2df010d84a56c016b75f42b85d15e4188eb79bb1472",
                thumbnail: Thumnail26,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/920111559/rendition/1080p/file.mp4?loc=external&signature=f183f778ad936308330792edc665df391106cc71f3427728860f041720b03b3f",
                thumbnail: Thumnail27,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/920113599/rendition/1080p/file.mp4?loc=external&signature=5e47266234ca86bb726f2c1fdc74fb0d00d18a181476afac47276e543156db0f",
                thumbnail: Thumnail28,
            },
            // {
            //     video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
            //     thumbnail: Thumnail29,
            // },
            // {
            //     video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
            //     thumbnail: Thumnail30,
            // }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919397028/rendition/1080p/file.mp4?loc=external&signature=14a18df3068dd15f7ac492b8ce9fe19c63fa767c5baf67ebc7d1d1f798c76c45",
                thumbnail: Thumnail13,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919396597/rendition/1080p/file.mp4?loc=external&signature=ff2b74c7d023e0b77fb3d129545432b7a751f8310e764bfe979eaf59c2751203",
                thumbnail: Thumnail14,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919396119/rendition/1080p/file.mp4?loc=external&signature=f5e3830165c4c120c817a0005bec00dd396e0c66c1000c5a844771ce5d99cf0d",
                thumbnail: Thumnail15,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919395667/rendition/1080p/file.mp4?loc=external&signature=68060465d7b7d3aa4040ce6be1b2f8667fa0827a49d2a8d4ed06f3350f5f49db",
                thumbnail: Thumnail16,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919395443/rendition/1080p/file.mp4?loc=external&signature=ea1769b08ec37fe18f225b3d37b15051f726c1c6745c145aa3bd421f52dec51a",
                thumbnail: Thumnail17,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919394463/rendition/1080p/file.mp4?loc=external&signature=1935976d9e292095ed5cc525a41226fd2ad5996888bbb77bc9ba6fec4c8abc50",
                thumbnail: Thumnail18,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/920111759/rendition/1080p/file.mp4?loc=external&signature=071967b2e25e8a57ab5b5f7248ad93b5e1474fae7e0f084558bb730946ee34d9",
                thumbnail: Thumnail19,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919827125/rendition/1080p/file.mp4?loc=external&signature=a664aa9e4d36777164415fcc563345ea573b26e535c3f8ec3008f84e1ed6d644",
                thumbnail: Thumnail20,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919819153/rendition/1080p/file.mp4?loc=external&signature=28775aea0c64df14ad96fe075f760186bc0d27acec892997ba34aa679cf97358",
                thumbnail: Thumnail21,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919807721/rendition/1080p/file.mp4?loc=external&signature=480eb2798ada597ca7dd3583a3b4a465e7d27b7d9c0d19237bd4d55169c9ca6a",
                thumbnail: Thumnail22,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/919793776/rendition/1080p/file.mp4?loc=external&signature=0c613749c66b5efecab8f5cde764a5c26fdb7d1b1f7242c23e67c215a739830b",
                thumbnail: Thumnail23,
            },
            // {
            //     video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
            //     thumbnail: Thumnail23,
            // }
        ],
    ];
    const portfolio = {
        title: (<> <span className='text-[#F5090B]'>Animated Videos</span> That Deliver Results </>),
        para: (<> Unlock your brand’s potential with our video animation services! Engage your audience with dynamic animations that convert viewers into loyal customers. Let’s make your idea come alive! </>),
        tabContents: tabContents,
        tabsInfo: true,
        tabInfo: tabInfo,
    };

    return (
        <>
            <Header />
            <Banner />
            <AwardWinning />
            <Portfolio content={portfolio} />
            <Serve />
            <Packages />
            <Animation />
            <Brand content={brands} />
            <Animations content={animations} />
            <Remarkable content={remarkable} />
            <Brand content={sales} />
            <OurClient />
            <Faqs content={faqs} />
            <SidebarCTA />
            <Footer />
        </>
    )
}

export default page
