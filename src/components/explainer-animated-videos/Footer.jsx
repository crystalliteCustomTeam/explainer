import Link from "next/link";
import React from "react";
import Image from "next/image";

import facebook from "media/explainer-animated-videos/fb.webp";
import Linkedin from "media/explainer-animated-videos/link.webp";
import Insta from "media/explainer-animated-videos/insta.webp";
import Youtube from "media/explainer-animated-videos/youtube.webp";

const socialLinks = [
  { src: facebook, alt: "Facebook", href: "/" },
  { src: Linkedin, alt: "LinkedIn", href: "/" },
  { src: Insta, alt: "Instagram", href: "/" },
  { src: Youtube, alt: "YouTube", href: "/" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-16 pb-4">
        <div className="container font-rubik">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="lg:text-[70px] text-[40px] leading-normal uppercase border-b-solid border-b-[1px] pb-0">
              <Link href="/" className="blink">
                Lets Connect
              </Link>
            </h1>

            <ul className="flex items-center justify-center">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <Image
                      src={link.src}
                      alt={link.alt}
                      className="beat w-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-between gap-5 border-t-[1px] border-t-[#291a37] pt-[30px] uppercase font-rubik md:text-[16px] text-[12px] leading-tight">
            <div>
            <p>
              All Rights Reserved <span id="copyright-year">2024</span> - Pixel
              Studios inc.
            </p>
            </div>
            <ul class="footer-menu flex justify-content-end align-items-center">
              <li>
                <Link href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>&nbsp;|&nbsp;</li>
              <li>
                <Link href="/">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
