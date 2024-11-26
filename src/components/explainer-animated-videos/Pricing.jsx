import Image from "next/image";
import React from "react";
import Cart1 from "media/explainer-animated-videos/cart1.png";
import Cart2 from "media/explainer-animated-videos/cart2.png";
import Cart3 from "media/explainer-animated-videos/cart3.png";
import Cart4 from "media/explainer-animated-videos/cart4.webp";
import Cart5 from "media/explainer-animated-videos/cart5.webp";
import Cart6 from "media/explainer-animated-videos/cart6.webp";
import Link from "next/link";

const packageData = [
  {
    title: "Startup Package",
    amount: "$179",
    desc: "Text & Image Compilation",
    packageImg: Cart1,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Custom Artwork",
      "Background Music",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Classic Package",
    amount: "$499",
    desc: "Whiteboard or Motion Graphic Animation",
    packageImg: Cart2,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Hand-drawn Illustrations",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart3,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart4,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart5,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart6,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
];

export const Pricing = ({}) => {
  return (
    <section>
      <div className="lg:py-[70px] py-[50px]">
        <div className="container">
          <div className="flex items-start justify-start border-b-[1px] border-b-[#3d354b]">
            <h2 className="xl:text-[90px] text-[60px] uppercase mb-0 font-rubik font-semibold">
              Pricing
            </h2>
          </div>

          <div className="lg:py-[30px] py-[10px] lg:px-[25px] px-[10px] my-[45px] mx-[20px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center xl:gap-10 gap-5">
            {packageData.map((e, i) => (
              <div
                key={i}
                className=" bg-white text-black rounded-[30px] font-rubik group"
              >
                <div className="group-hover:bg-[linear-gradient(100deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] xl:p-8 md:p-4 p-6 rounded-[30px] min-h-[540px] transition-all delay-300 ease-in">
                  <div className="flex flex-col gap-3 items-start justify-start relative">
                    <div className="text-left">
                      <h2
                        className="xl:text-[20px] text-[16px] font-semibold uppercase group-hover:text-white"
                        dangerouslySetInnerHTML={{ __html: e.title }}
                      />
                      <h3
                        className="xl:text-[60px] lg:text-[50px] text-[60px] my-1 font-semibold uppercase bg-gradient-to-r from-pink-600 to-fuchsia-700 bg-clip-text text-transparent group-hover:text-white"
                        dangerouslySetInnerHTML={{ __html: e.amount }}
                      />
                      <p
                        className="xl:text-[14px] text-[12px] font-semibold group-hover:text-white xl:mt-6 mt-10"
                        dangerouslySetInnerHTML={{ __html: e.desc }}
                      />
                      <div className="absolute xl:-right-[0%] -right-[5%] top-0">
                        <Image
                          src={e.packageImg}
                          alt="Packages"
                          className=""
                          width={120}
                          height={140}
                        />
                      </div>
                    </div>
                    {/* Listing */}
                    <ul class="bg-[#00000012] w-full p-[16px] rounded-[10px] h-[215px] transition-all ticklist2 list-scroll overflow-auto list-disc group-hover:text-white">
                      {e.list &&
                        e.list.map((e, i) => (
                          <li
                            key={i}
                            className="lg:text-[16px] leading-[2rem] xl:ml-[30px] ml-[20px]"
                          >
                            {e}
                          </li>
                        ))}
                    </ul>
                    <div className="block justify-center w-full bg-[linear-gradient(100deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] text-center rounded-full p-[10px] text-white font-rubik font-semibold group-hover:bg-[linear-gradient(100deg,rgb(236,1,166,0)_0%,rgb(181,13,162,0)_49%,rgb(126,24,158,0)_100%)] group-hover:bg-white group-hover:text-[#e502a5] mt-5">
                      <Link href="/" className=" text-[19px] uppercase">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
