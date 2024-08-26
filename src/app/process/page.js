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
    title: <>We have a streamlined production process for our animation projects!</>,
    para: <><div className='pb-6'>Animation wonders unpacked!</div></>,
    list: lists,
    isList: false,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/924775413/rendition/240p/file.mp4?loc=external&log_user=0&signature=8ec85e9167e33fa1f6f0341d28222d54340a4a5eff496c22a01c4feb71262cb9",
  }
  //=====StoryLine Fold=====//
  const accordionData = [
    {
      question: 'Idea Storm!',
      answer: "We kick off by unleashing a tumultuous of creativity! Our team dives deep into brainstorming, generating wild and innovative concepts that perfectly align with your brand’s vision. No idea is too crazy – this is where magic begins!",
      StoryLineImg: StoryLine1
    },
    {
      question: 'Epic Storyboarding!',
      answer: "Next, we sketch out your video’s journey with detailed, dynamic storyboards. This phase is all about mapping out the visual flow, ensuring every scene tells your story in the most engaging and visually stunning way possible.",
      StoryLineImg: StoryLine2
    },
    {
      question: 'Animate to Life!',
      answer: "Now comes the fun part – breathing life into your storyboard. Our animators work their wizardry, crafting smooth, captivating animations that grab attention and keep viewers hooked from the first frame to the last.",
      StoryLineImg: StoryLine3
    },
    {
      question: 'Sound – The Midas Touch!',
      answer: "Finally, we add the golden touch with sound. Music, voiceovers, and effects are carefully chosen to elevate your video, creating a perfectly synced masterpiece that resonates and leaves a lasting impression.",
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
