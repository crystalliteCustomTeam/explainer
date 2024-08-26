"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import Axios from "axios";
// ===== Images 
import Review1 from "media/home/review1.png"
import Review2 from "media/home/review2.png"
import Review3 from "media/home/review3.png"
import { Star } from 'heroicons-react'

// Images 
import HandAnimation from "media/animations/hand-animation.gif"

const Form = () => {
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Claim');
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    //========== Fetch IP data from the API
    const getIPData = async () => {
        try {
            const res = await Axios.get('https://ipwho.is/');
            setIP(res.data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
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
                await fetch('/api/email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });

                //========== Second API call to SheetDB
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json"
                };
                let bodyContent = JSON.stringify({
                    "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
                    "Brand": "Explainer Videos LLC",
                    "Page": `${currentRoute}`,
                    "Date": currentdate,
                    "Time": currentdate,
                    "JSON": JSONdata,
                });
                await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                setFormStatus("Success...");
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 2000);
            } catch (error) {
                console.error('Error during form submission:', error);
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };
    return (
        <>
            <section className={`lg:pt-[70px]`}>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="form bg-[#F5090B] rounded-xl px-4 md:px-6 pt-4 pb-7">
                        <h2 className='text-[18px] md:text-[25px] font-sans font-bold leading-[25px] md:leading-[60px] text-white'>What’s better than some savings on scrumptious and engaging animations? </h2>
                        <p className='text-[13px] md:text-[16px] lg:text-[18px] font-sans text-white'>Take charge today and showcase your narrative to the world with the power of video animation – exclusive discounts on animation packages!</p>
                        <form action="javascript:;" className='pt-5'>
                            <div className="lg:flex flex-wrap lg:justify-center items-center gap-3">
                                <div className="name relative">
                                    <input type="text" name="name" placeholder='Name' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[285px] focus:outline-none text-black mb-[15px] lg:mb-0' onChange={handleDataChange} required />
                                    {errors.name && (
                                        <span className="text-[10px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-60%] z-50">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="phone-number relative">
                                    <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" placeholder='Phone Number' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[285px] focus:outline-none text-black mb-[15px] lg:mb-0' onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[10px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-60%] z-50">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="email relative">
                                    <input type="email" name='email' placeholder='Email' className='bg-white shadow-sm shadow-white rounded-[5px] h-[45px] text-center font-sans w-full lg:w-[285px] focus:outline-none text-black mb-[15px] lg:mb-0' onChange={handleDataChange} required />
                                    {errors.email && (
                                        <span className="text-[10px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-60%] z-50">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <button className='w-full lg:w-[285px] h-[45px] bg-gradient-to-r from-[#363636] to-[#000000] poppins rounded-[5px] font-semibold text-white relative'>
                                    <Image src={HandAnimation} alt='Explainer Videos LLC' className='absolute top-[-104px] left-0 right-0 mx-auto lg:block hidden' />
                                    <span onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-wrap gap-6 lg:gap-0 justify-center items-center lg:justify-between py-[30px] md:py-[60px] px-[50px]">
                        <div className='flex items-center gap-x-4'>
                            <div className="img">
                                <Image src={Review1} alt='Review' />
                            </div>
                            <div className="txt">
                                <div className="review flex items-center justify-center gap-x-1 pb-[2px]">
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                    <Star className='text-[16px] w-[24px] h-[24px] text-[#FFD62B]' />
                                </div>
                                <p className='text-black text-[10px] xl:text-[14px] poppins text-center leading-[14px] xl:leading-[18px]'><strong>4.85 out of 5 - </strong>stellar ratings <br />
                                    over 1500+ reviews</p>
                            </div>
                        </div>
                        <div className='flex  items-center gap-x-4'>
                            <div className="img">
                                <Image src={Review2} alt='Review' />
                            </div>
                            <div className="txt">
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px] pb-1'>Awarded the Top Video Animation</p>
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px]'> Agency Award in 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <div className="img">
                                <Image src={Review3} alt='Review' />
                            </div>
                            <div className="txt">
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px] pb-1'>Part of the Top 10 Explainer</p>
                                <p className='text-black text-[10px] xl:text-[14px] poppins font-semibold leading-[14px] xl:leading-[18px]'>Video and Animation Agencies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
