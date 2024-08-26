"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import Css
import styles from "./PortFolio.module.css"

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
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

// icons
import PlayIcon from "media/icons/play.png"

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
            video: "https://player.vimeo.com/progressive_redirect/playback/919379331/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
            thumbnail: Thumnail1,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919380387/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
            thumbnail: Thumnail2,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919383086/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
            thumbnail: Thumnail3,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919381089/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
            thumbnail: Thumnail4,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919383727/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
            thumbnail: Thumnail5,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/920485906/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
            thumbnail: Thumnail6,
        }
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919392459/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
            thumbnail: Thumnail7,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919390533/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
            thumbnail: Thumnail8,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919390288/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
            thumbnail: Thumnail9,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919389941/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
            thumbnail: Thumnail10,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919388895/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
            thumbnail: Thumnail11,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919387889/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
            thumbnail: Thumnail12,
        }
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/920567123/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
            thumbnail: Thumnail25,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/920118952/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
            thumbnail: Thumnail26,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/920111559/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
            thumbnail: Thumnail27,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/920113599/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
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
            video: "https://player.vimeo.com/progressive_redirect/playback/919397028/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
            thumbnail: Thumnail13,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919396597/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
            thumbnail: Thumnail14,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919396119/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
            thumbnail: Thumnail15,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919395667/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
            thumbnail: Thumnail16,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919395443/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
            thumbnail: Thumnail17,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919394463/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
            thumbnail: Thumnail18,
        }
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/920111759/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
            thumbnail: Thumnail19,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919827125/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
            thumbnail: Thumnail20,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919819153/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
            thumbnail: Thumnail21,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919807721/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
            thumbnail: Thumnail22,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/919793776/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
            thumbnail: Thumnail23,
        },
        // {
        //     video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
        //     thumbnail: Thumnail23,
        // }
    ],
];

const Portfolio = ({ content }) => {
    const { title, para, bg } = content;
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // fancy box 
    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 ${bg}`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                            <p className="w-full md:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-12`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block w-[160px] md:w-[180px] xl:w-[220px] py-3 text-[16px] lg:text-[20px] font-normal font-sans text-black border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content pt-7 md:pt-12">
                            {tabContents[activeTab] && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                        {tabContents[activeTab].map((item, index) => (
                                            <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                <div className="overlay relative">
                                                    <Image src={item.thumbnail} alt="Explainer Videos LLC" width={468} height={263} className='min-h-[263px]' />
                                                    <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[50%] translate-x-[-50%] group-hover:translate-y-[-132px] translate-y-[132px] flex items-center justify-center ">
                                                        <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
