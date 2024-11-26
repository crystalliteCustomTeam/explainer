import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrow from "media/explainer-animated-videos/right-arrow.svg";
import space from "media/explainer-animated-videos/space.webp";
import spaceback from "media/explainer-animated-videos/space-back.webp";
import CTA from "./CTA";

export const Hero = ({
  title = "Let's explore the <br />Art of STORYTELLING",
  desc = 'Get the best <span class="font-semibold">2D, 3D video animation service </span> for your <span class="font-semibold">custom animated video</span>  production by professional video animation company.',
}) => {
  return (
    <section>
      <div className="xl:pt-[150px] pt-[100px] xl:pb-[200px] pb-[50px] relative ">
        <div className="container">
          <div className="flex md:flex-row flex-col justify-between gap-10 font-rubik  items-center">
            <div className="basis-6/12">
              <h1
                className="xl:text-[45px] lg:text-[38px] md:text-[28px] text-[26px] font-semibold uppercase  leading-tight tracking-wider"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="xl:text-[20px] md:text-[14px] text-[14px] leading-normal font-light xl:w-[90%] w-full mt-2 mb-8 tracking-wider"
                dangerouslySetInnerHTML={{ __html: desc }}
              />

              <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-5 mb-5 md:w-max">
                <CTA icon={true} text="Live Chat" css="bg-gradient-custom" />
                <CTA icon={true} css="hover:!bg-gradient-custom" />
              </div>

              {[
                "Animated Explainer Video Production",
                "Educational & Training Animated Videos",
                "Marketing Animated Video Production",
                "Whiteboard Explainer Video Production",
                "Product Demo Animated Videos",
                "Promotional Animated Videos",
              ].map((text, i) => (
                <ul
                  key={i}
                  className="list-disc pl-3 tracking-wider font-rubik"
                >
                  <li className="mb-[3px]">
                    <h4 className="xl:text-[20px] lg:text-[18px] md:text-[14px] text-[14px] leading-tight font-semibold">
                      {text}
                    </h4>
                  </li>
                </ul>
              ))}
            </div>
            <div className="basis-6/12">
              <form action="" method="post">
                <div className="bg-[#0009] xl:p-10 p-7 xl:w-[70%] w-full float-right rounded-[25px] shadow-md border-solid border-2 border-[#d605a4] relative">
                  <h3 className=" xl:text-[30px] md:text-[20px] text-[28px] font-semibold font-rubik">
                    We are here to help!
                  </h3>
                  <p className="xl:text-[20px] md:text-[15px] text-[16px] pt-[10px] pb-[20px] font-medium">
                    Sign up Now To Avail <strong className="blink">70%</strong>{" "}
                    Discount
                  </p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-full w-full xl:p-4 p-2 mb-5"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-full w-full xl:p-4 p-2 mb-5"
                    required
                  />
                  <input
                    type="phone"
                    placeholder="Phone*"
                    minLength={10}
                    maxLength={10}
                    className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-full w-full xl:p-4 p-2 mb-5"
                    required
                  />
                  <textarea
                    type="text"
                    placeholder="Project Description"
                    className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-3xl w-full xl:p-4 p-2 mb-5 h-[100px]"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-custom uppercase xl:py-[18px] py-[10px] xl:px-[28px] px-[20px] rounded-full xl:text-[15px] text-[12px] leading-tight font-semibold border-solid border-[2px] border-[#d605a4] mb-5"
                  >
                    submit
                  </button>

                  <p className="xl:text-[14px] text-[11px] leading-tight ">
                    Any Confusion?{" "}
                    <Link
                      href=""
                      className="xl:text-[15px] text-[12px] text-[#e195cf]"
                    >
                      Why not discuss your idea?
                    </Link>
                  </p>
                </div>

                <Image
                  src={space}
                  alt=""
                  className="banner-animated absolute left-0 bottom-0 md:-right-[12%] md:block hidden  h-max mx-auto -z-10"
                />
                <Image
                  src={spaceback}
                  alt=""
                  className="taadaa absolute left-0 -bottom-10 md:-right-[9%] md:block hidden h-max mx-auto -z-10"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
