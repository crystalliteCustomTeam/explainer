"use client";
import { useEffect } from 'react';

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== ZenDesk ========//
            const zenDesk = document.createElement("script");
            zenDesk.id = "ze-snippet";
            zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            zenDesk.async = true;
            zenDesk.defer = true;
            document.body.appendChild(zenDesk);


            //======== Google Tag Manager (gtag.js) ========//
            const gtagScript = document.createElement("script");
            gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-10860906782";
            gtagScript.async = true;
            document.body.appendChild(gtagScript);

            const gtagInit = document.createElement("script");
            gtagInit.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-10860906782');
            `;
            document.body.appendChild(gtagInit);


            //======== Google Analytics (gtag.js) ========//
            const gtagScript2 = document.createElement("script");
            gtagScript2.src = "https://www.googletagmanager.com/gtag/js?id=G-R5B7G7MJYT";
            gtagScript2.async = true;
            document.body.appendChild(gtagScript2);

            const gtagInit2 = document.createElement("script");
            gtagInit2.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-R5B7G7MJYT');
            `;
            document.body.appendChild(gtagInit2);


            //======== Google Tag Manager ========//
            const gtmScript = document.createElement("script");
            gtmScript.innerHTML = `
                (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),
                        dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-K2QSGKM4');
            `;
            document.body.appendChild(gtmScript);


            
            

        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts;
