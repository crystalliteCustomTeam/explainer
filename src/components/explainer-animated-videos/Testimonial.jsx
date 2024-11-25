import React from "react";
import { CTA } from ".";
import Image from "next/image";

// Media
import img1 from "media/explainer-animated-videos/01.webp";
import img2 from "media/explainer-animated-videos/02.webp";
import img3 from "media/explainer-animated-videos/03.webp";
import img4 from "media/explainer-animated-videos/04.webp";
import img5 from "media/explainer-animated-videos/05.webp";
import img6 from "media/explainer-animated-videos/06.webp";

const testimonials = [
  {
    id: 1,
    imgSrc: img1,
    name: "William Smith",
    role: "President & Founder",
    testimonial:
      "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 2,
    imgSrc: img2,
    name: "Steven Patterson ",
    role: "Co-Founder",
    testimonial:
      "Pixel Studios worked with us and helped us create a great video. It portrayed our product in an easily understandable and visually attractive way.",
  },
  {
    id: 3,
    imgSrc: img3,
    name: "Taylor Leonard ",
    role: "Chief Marketing Officer",
    testimonial:
      "They are a team of highly skilled and professional app developers. I hired them for my latest project, and they did it perfectly! We plan to have them develop more apps for us in the future.",
  },
  {
    id: 4,
    imgSrc: img4,
    name: "Carroll Nelson ",
    role: "Project Manager",
    testimonial:
      "They helped us develop a useful and great-looking application in a short period of time and on budget. In addition, the team is talented, efficient, and easy to work with.",
  },
];
const testimonials2 = [
  {
    id: 1,
    imgSrc: img1,
    name: "William Smith",
    role: "President & Founder",
    testimonial:
      "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 2,
    imgSrc: img1,
    name: "William Smith",
    role: "President & Founder",
    testimonial:
      "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 3,
    imgSrc: img1,
    name: "William Smith",
    role: "President & Founder",
    testimonial:
      "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 4,
    imgSrc: img5,
    name: "William Smith",
    role: "President & Founder",
    testimonial:
      "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 5,
    imgSrc: img6,
    name: "William Smith",
    role: "President & Founder",
    testimonial:
      "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
];

export const Testimonial = ({
  subtitle = "Testimonials",
  title = "Sharing Our <br class='lg:block hidden'/> Client’s Success <br class='lg:block hidden'/> Stories",
  desc = "We revolutionize the way your audience perceives your brand’s online presence. These are stories of <br class='lg:block hidden'/> people whose lives have been inspired by Pixel Studios Inc and its diverse range of services.",
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative 2xl:pt-[110px] 2xl:pb-[50px] pt-[100px] pb-[50px] font-rubik">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 font-rubik items-center">
            <div className="md:col-span-7 ">
              <span
                className="text-[17px] font-light leading-normal px-[60px] capitalize relative before:absolute before:content-[''] before:bg-gradient-to-tl before:from-pink-600 before:via-purple-700 before:to-indigo-800 before:h-[2px] before:w-[42px] before:left-0 before:bottom-0 before:top-[10px] before:mx-auto inline-block w-max mx-auto  after:absolute after:content-[''] after:bg-gradient-to-tl after:from-pink-600 after:via-purple-700 after:to-indigo-800 after:h-[2px] after:w-[42px] after:right-0 after:bottom-0 after:top-[10px] after:mx-auto"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
              <h2
                className="pt-[5px] xl:pt-[30px] xl:text-[70px] xl:leading-[90px] md:text-[34px] text-[30px] leading-[40px] uppercase font-semibold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="text-[12px] xl:text-[16px] leading-normal font-light"
                dangerouslySetInnerHTML={{ __html: desc }}
              />

              <div className="xl:mt-8 mt-3">
                <CTA icon={true} />
              </div>
            </div>
            <ul className="md:col-span-5 grid md:grid-cols-2 grid-cols-2 md:absolute right-0 md:w-[40%] w-[100%] md:mt-0 mt-[10%]" >
              {testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                  <div className="h-full relative group bg-[#110220] overflow-hidden hover:overflow-visible">
                    <Image
                      src={testimonial.imgSrc}
                      alt="testimonial"
                      className="opacity-20 w-full h-full group-hover:opacity-100"
                    />
                    <div className="-translate-y-full group-hover:translate-y-full transition-all ease-in-out duration-300 absolute w-full h-full top-0 bottom-0 z-10 text-left group-hover:opacity-100">
                      <span className="w-full h-full flex flex-col items-start justify-center bg-[linear-gradient(124deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] text-white xl:p-5 p-3 z-10">
                        <h4 className="text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[36px] font-medium">
                          {testimonial.name}
                        </h4>
                        <h6 className="text-[14px] xl:text-[16px] 2xl:text-[18px] leading-tight font-light py-[20px]">
                          {testimonial.role}
                        </h6>
                        <p className="text-[12px] text-white leading-[26px] text-left xl:line-clamp-none line-clamp-2">
                          {testimonial.testimonial}
                        </p>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="grid grid-cols-2 md:flex mt-[0%] md:mt-[6%] xl:mt-[0.5%] 2xl:mt-[2%] items-center md:px-0 px-4">
                {testimonials2.map((testimonial2) => (
                  <li key={testimonial2.id} className="w-full h-full">
                    <div className="h-full relative group bg-[#110220] overflow-hidden hover:overflow-visible">
                      <Image
                        src={testimonial2.imgSrc}
                        alt="testimonial"
                        className="opacity-20 w-full h-full group-hover:opacity-100"
                      />
                      <div className="-translate-x-full group-hover:translate-x-full transition-all ease-in-out duration-300 absolute w-full h-full top-0 bottom-0 z-10 text-left group-hover:opacity-100">
                        <span className="w-full h-full flex flex-col items-start justify-center bg-[linear-gradient(124deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] text-white xl:p-5 p-3 z-10">
                          <h4 className="text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[36px] font-medium">
                            {testimonial2.name}
                          </h4>
                          <h6 className="text-[14px] xl:text-[16px] 2xl:text-[18px] leading-tight font-light py-[10px]">
                            {testimonial2.role}
                          </h6>
                          <p className="text-[12px] text-white leading-tight text-left xl:line-clamp-none line-clamp-2">
                            {testimonial2.testimonial}
                          </p>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
      </div>
    </section>
  );
};
