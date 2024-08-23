"use client"

import React from 'react'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import Form from '@/components/form/Form'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'
//==== StoryLine Images
import StoryLine1 from "media/storyline/storyLine11.png";
import StoryLine2 from "media/storyline/storyLine12.png";
import StoryLine3 from "media/storyline/storyLine13.png";
import StoryLine4 from "media/storyline/storyLine14.png";

// ===== Images 
import StoryLine from '@/components/storyline/StoryLine'



const page = () => {

  //===== Banner Section====//
  const lists = [
  ]

  const banner = {
    title: <>Journey to Brilliance with Guaranteed Results</>,
    para: <><div className='pb-6'>Animation Creation Unpacked!</div></>,
    list: lists,
    isList: false,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/924775413/rendition/240p/file.mp4?loc=external&log_user=0&signature=8ec85e9167e33fa1f6f0341d28222d54340a4a5eff496c22a01c4feb71262cb9",
  }
  //=====StoryLine Fold=====//
  const accordionData = [
    {
      question: 'Strategic Storytelling',
      answer: "Begin with a strategic approach to storytelling, ensuring that every animation project has a compelling narrative foundation that resonates with your audience.",
      StoryLineImg: StoryLine1
    },
    {
      question: 'Audio Excellence',
      answer: "Elevate the storytelling experience with audio mastery. Our team meticulously selects and integrates sound elements to enhance emotional connections and create a truly immersive experience.",
      StoryLineImg: StoryLine2
    },
    {
      question: 'Dynamic Animation',
      answer: "Infuse life into your story with dynamic animations. From 2D to 3D, our animation expertise brings characters, scenes, and concepts to vibrant existence, captivating your audience with visually stunning sequences.",
      StoryLineImg: StoryLine3
    },
    {
      question: 'The Midas Touch',
      answer: "Add the final touch of brilliance with our Midas Touch – a meticulous polish and refinement process that ensures your animation shines with perfection. Every detail is scrutinized to deliver an animated masterpiece that exceeds expectations.",
      StoryLineImg: StoryLine4
    },
  ];
  const storyLine = {
    accordionData: accordionData
  };



  return (
    <>
      <InnerBanner content={banner} />
      <Form />
      <StoryLine content={storyLine} />
      <OurClient />
    </>
  )
}

export default page
