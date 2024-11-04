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

            //======== LiveChat Integration ========//
            window._lc = window._lc || {};
            window.__lc = window.__lc || {};
            window.__lc.license = 18818250;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";

            (function (n, t, c) {
                function i(n) { return e.h ? e._h.apply(null, n) : e._q.push(n) }
                var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0; n.type = "text/javascript"; n.src = "https://cdn.livechatinc.com/tracking.js"; t.head.appendChild(n) } };
                !n._lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);


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
