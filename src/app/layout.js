// Import Fonts
import { primary } from "./configs/fonts";
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
  title: "Explainer Videos LLC – Your Brand, Animated!",
  description: "Embrace the juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of video animation and 3D animation services.",
  //===== OG Tags =====
  openGraph: {
    title: "Explainer Videos LLC – Your Brand, Animated!",
    description: "Embrace the juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of video animation and 3D animation services.",
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
      "": [""],
    },
  },
};
<Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af" />;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <body className={`${primary.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2QSGKM4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
