"use client";
// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import logo from "media/logo.webp";
import facebook from "media/icons/fb.png";
import twitter from "media/icons/twitter.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
import Location from "media/icons/location.svg"
import Phone from "media/icons/phone.svg"

const Footer = () => {
  const quickLinks = [
    {
      text: "Home",
      link: "javascript:;",
    },
    {
      text: "Portfolio",
      link: "javascript:;",
    },
    {
      text: "Process",
      link: "/process",
    },
    {
      text: "Pricing",
      link: "/pricing",
    },
    {
      text: "Contact Us",
      link: "/contact",
    },
  ];
  const servicesLinks = [
    {
      text: "3D Animation",
      link: "/3d-animation",
    },
    {
      text: "2D Animation",
      link: "/2d-animation",
    },
    {
      text: "Explainer Videos",
      link: "/explainer-videos",
    },
    {
      text: "Promotional Videos",
      link: "/promotional-videos",
    },
    {
      text: "Whiteboard",
      link: "/whiteboard",
    },
    {
      text: "Infograpics Desgin",
      link: "/infograpics-desgin",
    },
    {
      text: "Logo Animation",
      link: "/logo-animation",
    },

  ];
  const otherLinks = [
    {
      text: "Terms of Services",
      link: "/terms-and-conditions",
    },
    {
      text: "Privacy Policy",
      link: "/privacy-policy",
    },
  ];
  const socialLinks = [
    {
      icon: facebook,
      link: "https://www.facebook.com/explainervideosllc/",
    },
    {
      icon: twitter,
      link: "https://twitter.com/_",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/explainervideosllc/",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/company/explainer-videos-llc/",
    },
  ];
  const contactLinks = [
    {
      text: "222 S Figueroa St, Los Angeles, CA 90012, United States",
      link: "https://maps.app.goo.gl/L9FtsgKKyQ4TzTbc7",
      img: Location,
    },
    {
      text: "1-833-666-6684",
      link: "tel:1-833-666-6684",
      img: Phone,
    },
  ];

  return (
    <footer className="bg-[#F3F3F3] pt-[70px] 3xl:mt-0 relative z-[999]">
      <div className="px-5 lg:max-w-7xl mx-auto">
        <div className="flex gap-x-5 pb-8 flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
          <div className="basis-full sm:basis-[55%] md:pr-[55px] lg:basis-[30%]">
            <Link href="/">
              <Image src={logo} width={263} height={40} className="pb-3" alt="Explainer Videos LLC" />
            </Link>
            <p className="text-[14px] poppins text-left text-black mt-3 pb-10">
              We're the video experts who help you tell your story in a way that resonates with everyone. We're reliable, creative, and results-driven. Take charge today and experience the potential of video animation and explainer videos for your brand.
            </p>


          </div>
          <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
            <h4 className="text-[16px] font-semibold poppins text-black leading-none mb-3">Quick Links</h4>
            <ul>
              {quickLinks.map((e, i) => {
                return (
                  <li key={i}>
                    <Link href={e.link} className="text-[16px] text-black poppins font-normal hover:opacity-50 leading-[30px]">
                      {e.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="basis-full sm:basis-[48%] lg:basis-1/4">
            <h4 className="text-[16px] font-semibold poppins text-black leading-none mb-3">Quick Links</h4>
            <ul>
              {servicesLinks.map((e, i) => {
                return (
                  <li key={i}>
                    <Link href={e.link} className="text-[16px] text-black poppins font-normal hover:opacity-50 leading-[30px]">
                      {e.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="basis-full sm:basis-[48%] lg:basis-1/4">
            <ul className="space-y-2 poppins">
              <h4 className="text-[16px] font-semibold poppins text-black leading-none mb-3 mt-5">Contact Us</h4>
              {contactLinks.map((e, i) => (
                <li key={i}>
                  <Link href={e.link} className="flex items-start gap-2">
                    <Image src={e.img} width={23} height={23} alt="Explainer Videos LLC" className="pt-1" />
                    <span className="pt-1">{e.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="border-black  mt-4" />

            <ul className="flex items-center gap-4 mt-4">
              {socialLinks.map((e, i) => {
                return (
                  <li key={i} className="">
                    <Link href={e.link} target="_blank">
                      <Image src={e.icon} className="w-[20px] brightness-0 " alt="Explainer Videos LLC" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 items-center border-t border-[#000000]">
          <div className="basis-full sm:basis-1/2">
            <p className="text-sm poppins text-black leading-6 text-center sm:text-left">© Copyright 2024 Explainer Videos LLC – A Brand of Bhaoo Inc</p>
          </div>
          <div className="basis-full sm:basis-1/2">
            <ul className="flex items-center justify-center sm:justify-end gap-4">
              {otherLinks.map((e, i) => {
                return (
                  <li key={i}>
                    <Link href={e.link} target="__blank" className="text-[16px] text-black poppins font-normal hover:opacity-50 leading-[30px]">
                      {e.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
