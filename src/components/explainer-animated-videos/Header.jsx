"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Logo from "media/logo.webp";
import phone from "media/explainer-animated-videos/phone-calling.svg";
import Link from "next/link";
import CTA from "./CTA";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div
        className={`py-[15px] fixed z-10 w-full ${
          scrolled
            ? "bg-[#1a0830f7] shadow-[0_4px_24px_0_rgba(103,_151,_255,_.1),_0_12px_64px_0_rgba(103,_151,_255,_.1)] "
            : ""
        }`}
      >
        <div className="container">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <Image src={Logo} alt="" width={200} height={100} />
            <div className="flex md:flex-row flex-col items-center justify-center gap-5">
              <Link
                href="javascript:;"
                className="flex gap-2 items-center hover:text-[#d605a4] w-full"
              >
                <span>
                  <Image
                    src={phone}
                    alt="phone"
                    width={25}
                    height={25}
                    className="rotate-12 fill-red-600"
                  />
                </span>

                <span className="font-rubik xl:text-[20px] lg:text-[16px] text-[14px] leading-tight ">
                  1-833-666-6684
                </span>
              </Link>
              <CTA
                icon={true}
                css="text-[12px] xl:text-[15px] md:text-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
