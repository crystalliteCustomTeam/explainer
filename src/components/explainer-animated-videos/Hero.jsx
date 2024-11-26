"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "media/explainer-animated-videos/right-arrow.svg";
import space from "media/explainer-animated-videos/space.webp";
import spaceback from "media/explainer-animated-videos/space-back.webp";
import CTA from "./CTA";

export const Hero = ({
  title = "Let's explore the <br />Art of STORYTELLING",
  desc = 'Get the best <span class="font-semibold">2D, 3D video animation service </span> for your <span class="font-semibold">custom animated video</span>  production by professional video animation company.',
}) => {
  //========== Form
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("Claim");
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  //========== Fetch IP data from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get("https://ipwho.is/");
      setIP(res.data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };
  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const router = usePathname();
  const currentRoute = router;

  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formValidateHandle = () => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    const phoneRegex = /^[0-9]+$/;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone number is required";
    }
    return errors;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");
    setIsDisabled(true);

    const errors = formValidateHandle();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const currentdate = new Date().toLocaleString();
      const dataToSend = {
        ...data,
        pageUrl: pagenewurl,
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        currentdate: currentdate,
      };
      const JSONdata = JSON.stringify(dataToSend);

      try {
        //========== First API call to your server
        await fetch("/api/email/", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSONdata,
        });

        //========== Second API call to SheetDB
        let headersList = {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json",
        };
        let bodyContent = JSON.stringify({
          IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
          Brand: "Explainer Videos LLC",
          Page: `${currentRoute}`,
          Date: currentdate,
          Time: currentdate,
          JSON: JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        });

        setFormStatus("Success...");
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
      } catch (error) {
        console.error("Error during form submission:", error);
        setFormStatus("Failed...");
        setIsDisabled(false);
      }
    } else {
      setFormStatus("Failed...");
      setIsDisabled(false);
    }
  };

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
              <form action="javascript:;" method="post">
                <div className="bg-[#0009] xl:p-10 p-7 xl:w-[70%] w-full float-right rounded-[25px] shadow-md border-solid border-2 border-[#d605a4] relative">
                  <h3 className=" xl:text-[30px] md:text-[20px] text-[28px] font-semibold font-rubik">
                    We are here to help!
                  </h3>
                  <p className="xl:text-[20px] md:text-[15px] text-[16px] pt-[10px] pb-[20px] font-medium">
                    Sign up Now To Avail <strong className="blink">70%</strong>{" "}
                    Discount
                  </p>
                  <div className="name relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-full w-full xl:p-4 p-2 mb-5"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.name && (
                      <span className="text-[10px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-60%] z-50">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="email relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-full w-full xl:p-4 p-2 mb-5"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.email && (
                      <span className="text-[10px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-60%] z-50">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="phone relative">
                    <input
                      placeholder="Phone*"
                      type="tel"
                      name="phone"
                      minLength="10"
                      maxLength="13"
                      pattern="[0-9]*"
                      onChange={handleDataChange}
                      className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-full w-full xl:p-4 p-2 mb-5"
                      required
                    />
                    {errors.phone && (
                      <span className="text-[10px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-60%] z-50">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <textarea
                    type="text"
                    name="message"
                    placeholder="Project Description"
                    className="bg-[rgba(255,255,255,0.03)] border-solid border-[1px] rounded-3xl w-full xl:p-4 p-2 mb-5 h-[100px]"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-custom uppercase xl:py-[18px] py-[10px] xl:px-[28px] px-[20px] rounded-full xl:text-[15px] text-[12px] leading-tight font-semibold border-solid border-[2px] border-[#d605a4] mb-5"
                  >
                    submit
                  </button>
                  <span onClick={handleFormSubmit} disabled={isDisabled}></span>
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
