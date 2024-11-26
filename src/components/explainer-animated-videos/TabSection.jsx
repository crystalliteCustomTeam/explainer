"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import animation1 from "media/explainer-animated-videos/2D-Animation.webp";
import animation2 from "media/explainer-animated-videos/3d-animation.webp";
import animation3 from "media/explainer-animated-videos/Motion-Graphics.webp";
import animation4 from "media/explainer-animated-videos/Whiteboard.webp";
import animation5 from "media/explainer-animated-videos/Logo-Animation.webp";
import animation6 from "media/explainer-animated-videos/Video-Editing.webp";
import CTA from "./CTA";
const tabInfo = [
  { label: "2D Animations", index: 0 },
  { label: "3D Animation", index: 1 },
  { label: "Motion Graphics", index: 2 },
  { label: "Whiteboard", index: 3 },
  { label: "Logo Animation", index: 4 },
  { label: "Video Animation", index: 5 },
];
const tabContents = [
  [
    {
      img: animation1,
      text: "Easy on the eye and pocket, get the best of both world’s through top notch 2D Animations ",
    },
  ],
  [
    {
      img: animation2,
      text: "The future is now. Immerse yourself into the life-like stylings of spectacular 3D Animations",
    },
  ],
  [
    {
      img: animation3,
      text: "Why stay static, animate. Add a little life to your products and witness the magic of Motion Graphics. ",
    },
  ],
  [
    {
      img: animation4,
      text: "Cut the clutter and keep things simple. Expert Whiteboard animators are ready to help you out. ",
    },
  ],
  [
    {
      img: animation5,
      text: "Put some groove into your brand and see it stand out and garner far more recognition. ",
    },
  ],
  [
    {
      img: animation6,
      text: "This is the make or break for most digital artistic endeavors. Let experts handle it. ",
    },
  ],
];

export default function TabSection({
  subtitle = "What We Do",
  title = "OUR DIVERSE RANGE OF <br/> VIDEO ANIMATION SERVICES!",
}) {
  //Tabs
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [transformStyle, setTransformStyle] = useState({
    transform:
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate rotation angles based on mouse position
    const rotateX = (deltaY / height) * 20;
    const rotateY = (deltaX / width) * -20;

    // Update the transform style
    setTransformStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
    });
  };

  // Reset transformation on mouse leave
  const handleMouseLeave = () => {
    setTransformStyle({
      transform:
        "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };
  return (
    <section>
      <div className="pt-[80px] pb-[50px]">
        <div className="container font-rubik">
          <div className="flex item-center flex-col justify-center mx-auto xl:w-[70%] md:w-[90%] w-full text-center">
            <span
              className="text-[17px] font-light leading-normal px-[60px] capitalize relative before:absolute before:content-[''] before:bg-gradient-to-tl before:from-pink-600 before:via-purple-700 before:to-indigo-800 before:h-[2px] before:w-[42px] before:left-0 before:bottom-0 before:top-[10px] before:mx-auto inline-block w-max mx-auto  after:absolute after:content-[''] after:bg-gradient-to-tl after:from-pink-600 after:via-purple-700 after:to-indigo-800 after:h-[2px] after:w-[42px] after:right-0 after:bottom-0 after:top-[10px] after:mx-auto"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <h2
              className="py-[30px] xl:text-[45px] xl:leading-[60px] md:text-[40px] text-[30px] leading-[40px] uppercase font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <div>
            <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-1 xl:gap-5 md:gap-1 md:mx-auto">
              {tabInfo.map((tab, index) => (
                <li
                  key={index}
                  className={`relative overflow-hidden inline-block lg:w-[180px] w-[150px] xl:w-[180px] xl:py-4 py-2 xl:text-[16px] lg:text-[15px] text-[13px] font-normal font-rubik text-white border-[2px] rounded-[50px] cursor-pointer before:content-[''] before:absolute before:left-[-20px] before:top-0 before:w-[30px] before:h-[100px] before:mt-[-20px] before:bg-white before:opacity-60 before:filter before:blur-[30px] before:transform before:origin-top before:animate-login_blur xl:my-[50px] my-[10px] hover:shadow-[-1px_6px_9vmin_0vmin_#d605a4] ${
                    activeTab === index
                      ? "border-transparent bg-[linear-gradient(100deg,_rgb(236,_1,_166)_0%,_rgb(181,_13,_162)_49%,_rgb(126,_24,_158)_100%)] shadow-[-1px_6px_9vmin_0vmin_#d605a4]"
                      : "border-fuchsia-700"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="tabs-content pt-7 md:pt-12">
            {tabContents[activeTab] && (
              <div className="text-center">
                {tabContents[activeTab].map(({ img, text }, index) => (
                  <Link
                    key={index}
                    href={``}
                    data-fancybox="gallery"
                    className={`w-full h-full`}
                  >
                    <Image
                      src={img} // Ensure img is a valid path or URL
                      alt="Explainer Videos LLC"
                      width={468}
                      height={263}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ willChange: "transform", ...transformStyle }}
                      className="min-h-[300px] mx-auto"
                    />

                    <h4 className="md:text-[20px] text-[14px] leading-normal font-rubik font-semibold my-5">
                      {text}
                    </h4>
                  </Link>
                ))}
                <div className="flex md:flex-row flex-col items-center justify-center gap-5 mb-5 md:w-max mx-auto">
                  <CTA icon={true} text="Live Chat" css="bg-gradient-custom" />
                  <CTA icon={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
