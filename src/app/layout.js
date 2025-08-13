// Import Fonts
import { primary,rubik,sfmono } from "./configs/fonts";
// Import Components
import ConditionalLayout from "./ConditionalLayout";
// Import Css
import "./global.css";
import Script from "next/script";
import Scripts from "./Scripts";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://www.explainervideosllc.com/"),
  //===== Meta Tags =====
  title: "Explainer Video Production - Explainer Videos LLC",
  description: "Looking to make explainer videos for your business? Explainer Videos LLC specializes in animated video production. ✓ Find out more about business animation videos!",
  //===== OG Tags =====
  openGraph: {
    title: "Explainer Video Production - Explainer Videos LLC",
    description: "Looking to make explainer videos for your business? Explainer Videos LLC specializes in animated video production. ✓ Find out more about business animation videos!",
    url: "/",
    siteName: "Explainer Videos LLC",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['CVmqagSKSfFi8jAYO2AyZehlsaONsTRqWhWdvxpnCE4'],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <Script id="livechat-init" strategy="afterInteractive">
            {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19220066;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){
              function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
              var e = {
                _q: [], _h: null, _v: "2.0",
                on: function(){i(["on", c.call(arguments)])},
                once: function(){i(["once", c.call(arguments)])},
                off: function(){i(["off", c.call(arguments)])},
                get: function(){
                  if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get", c.call(arguments)])
                },
                call: function(){i(["call", c.call(arguments)])},
                init: function(){
                  var n = t.createElement("script");
                  n.async = true;
                  n.type = "text/javascript";
                  n.src = "https://cdn.livechatinc.com/tracking.js";
                  t.head.appendChild(n);
                }
              };
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);
          `}
          </Script>
      <body className={`${primary.variable} ${sfmono.variable} ${rubik.variable}`}>

        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
