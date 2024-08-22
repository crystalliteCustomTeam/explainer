// Import Fonts
import { primary } from "./configs/fonts";
// Import Components  
import ConditionalLayout from "./ConditionalLayout";
// Import Css
import "./global.css";
//===== Meta Data =====
export const metadata = {
    metadataBase: new URL('https://cloudstudiosinc.com/'),
    //===== Meta Tags =====
    title: "Premium Video Animation Services | Cloud Studios Inc",
    description: "Embrace the juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of video animation and 3D animation services.",
    //===== OG Tags =====
    openGraph: {
        title: "Premium Video Animation Services | Cloud Studios Inc",
        description: "Embrace the juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of video animation and 3D animation services.",
        url: '/',
        siteName: 'Cloud Studios Inc',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.webp",
    },
    //===== Canonical =====
    alternates: { canonical: '/' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    //===== GEO Tags =====
    other: {
    },
    //===== Google Varification =====
    verification: {
        other: {
            "": [''],
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${primary.variable}`}>
                <ConditionalLayout>
                    <main>{children}</main>
                </ConditionalLayout>
            </body>
        </html>
    );
}
