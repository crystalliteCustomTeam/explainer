
"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import Axios from "axios";
import styles from "./form.module.css"

const FormContact = ({ footer }) => {
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Submit');
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
        <div className={`${styles.formSec} ${footer === 'yes' ? styles.active : ''}`}>
            <h3>Let’s Talk About Your Project</h3>
            <form>
                <div className={styles.inputFrom}>
                    <input type="text" name="name" placeholder='Name' onChange={handleDataChange} required />
                    {errors.name && (
                        <span>
                            {errors.name}
                        </span>
                    )}
                </div>
                <div className={styles.inputFrom}>
                    <input type="email" name='email' placeholder='Email' onChange={handleDataChange} required />
                    {errors.email && (
                        <span >
                            {errors.email}
                        </span>
                    )}
                </div>
                <div className={styles.inputFrom}>
                    <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" placeholder='Phone Number' onChange={handleDataChange} required />
                    {errors.phone && (
                        <span>
                            {errors.phone}
                        </span>
                    )}

                </div>
                <div className={styles.inputFrom}>
                    <textarea name="project" placeholder="Tell us about your project" required="required"></textarea>
                </div>
                <div className={styles.btnSec}>
                    <button type="submit" className={styles.btnSubmit} onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                </div>
            </form>
        </div>
    )
}

export default FormContact