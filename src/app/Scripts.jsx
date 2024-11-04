"use client";
import { useEffect } from 'react';

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== Zendesk ========//
            // const zenDesk = document.createElement("script");
            // zenDesk.id = "ze-snippet";
            // zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            // zenDesk.async = true;
            // zenDesk.defer = true;
            // document.body.appendChild(zenDesk);

            //======== Tawk.to Live Chat ========//
            const tawkScript = document.createElement("script");
            tawkScript.async = true;
            tawkScript.src = 'https://embed.tawk.to/6724258c2480f5b4f5970d5f/1ibij5c37';
            tawkScript.charset = 'UTF-8';
            tawkScript.setAttribute('crossorigin', '*');
            document.head.appendChild(tawkScript);


            //======== Google Analytics ========//
            const googleAnalytics = document.createElement("script");
            googleAnalytics.async = true;
            googleAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-R5B7G7MJYT";
            document.head.appendChild(googleAnalytics);

            googleAnalytics.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-R5B7G7MJYT');
            };

            //======== Google Tag Manager ========//
            const googleTagManagerScript = document.createElement("script");
            googleTagManagerScript.innerHTML = `(function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2QSGKM4');`;
            document.head.appendChild(googleTagManagerScript);

            //======== Google Tag Manager (noscript) ========//
            const noscript = document.createElement("noscript");
            noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2QSGKM4"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.appendChild(noscript);

        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts;
