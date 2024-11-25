"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Media
import Workshops from "media/explainer-animated-videos/process-icon-1.webp";
import Planning from "media/explainer-animated-videos/process-icon-2.webp";
import testing from "media/explainer-animated-videos/process-icon-3.webp";
import execution from "media/explainer-animated-videos/process-icon-4.webp";
import implementation from "media/explainer-animated-videos/process-icon-5.webp";

// Card Data
const data = [
  {
    cardImg: Workshops,
    title: "Workshops",
    desc: "To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding deliverables.",
    icon: true,
  },
  {
    cardImg: Planning,
    title: "Planning",
    desc: "A lot goes into the planning stage, such as industry research, competitor research, selecting marketing channels, and strategy development. We recommend the best course of action for digitalization. ",
    icon: true,
  },
  {
    cardImg: testing,
    title: "A/B Testing",
    desc: "From experimenting with content to testing advertisements and marketing techniques, we do all it takes to analyze the audience’s behavior and make alterations accordingly for maximum outreach. ",
    icon: true,
  },
  {
    cardImg: execution,
    title: "Execution",
    desc: "Moving forth with execution, we analyze processes, create campaigns, optimize strategies, and produce content to secure a better ranking. We aim for quality, results, and business growth. ",
    icon: true,
  },
  {
    cardImg: implementation,
    title: "Implementation",
    desc: "Now, for the exciting part, we get our hands dirty with launching your project and incorporating changes as your business changes. Are you ready to get started?",
    icon: false,
  },
];

export const Process = ({
  subtitle = "Process",
  title = "Matching Your Business <br class='xl:block hidden'/> Needs Effectively ",
  desc = "We’re determined to explore more than what may be just a quick fix for your business. Together, we can tailor our <strong class='font-bold'>animated corporate video production</strong> for continual growth.",
  cardData = data,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!cardData.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardData.length]);
  return (
    <section>
      <div className="pt-[80px] pb-[50px]">
        <div className="container font-rubik">
          <div className="flex item-center flex-col justify-center mx-auto xl:w-[70%] md:w-[90%] w-full text-center">
            <span
              className="text-[17px] font-light leading-normal px-[60px] capitalize relative before:absolute before:content-[''] before:bg-gradient-to-tl before:from-pink-600 before:via-purple-700 before:to-indigo-800 before:h-[2px] before:w-[42px] before:left-0 before:bottom-0 before:top-[10px] before:mx-auto before:animate-border_draw_right inline-block w-max mx-auto after:animate-run after:absolute after:content-[''] after:bg-gradient-to-tl after:from-pink-600 after:via-purple-700 after:to-indigo-800 after:h-[2px] after:w-[42px] after:right-0 after:bottom-0 after:top-[10px] after:mx-auto"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <h2
              className="pt-[30px] xl:text-[60px] xl:leading-[85px] md:text-[45px] text-[30px] md:leading-[60px] leading-tight uppercase font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="text-[16px] font-light w-[80%] mx-auto"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>

          <div className="py-10">
            <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-center  gap-5 xl:w-[90%] w-full mx-auto">
              {cardData.map((e, i) => (
                <li
                  key={i}
                  className={`flex flex-col gap-3 items-center justify-center text-center h-full transition-opacity duration-500 ${
                    i === activeIndex ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <div className="bg-[linear-gradient(100deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] rounded-full w-[140px] h-[140px] flex justify-center items-center">
                    <Image
                      src={e.cardImg}
                      alt="process"
                      className="w-[80px] h-[80px] invert brightness-0 p-4"
                    />
                  </div>
                  <h4 className="flex justify-center items-center gap-5 mt-[20px] mb-[20px] xl:text-[24px] text-[22px] leading-[35px] font-light">
                    {e.title}
                    
                    {e.icon && <span className={`${i === activeIndex ? "animate-run" : "animate-none"}`}><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg></span>}
                    
                  </h4>
                  <p className="text-[14px] w-[90%] mx-auto lg:min-h-[210px] min-h-fit">{e.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
