import localFont from "next/font/local";

const primary = localFont({
    src: [
        {
            path: '../../fonts/SF-Pro-Display-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/SF-Pro-Display-Medium.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/SF-Pro-Display-Bold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/SF-Pro-Display-Black.otf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap',
});

const sfmono = localFont({
    src:[
        {
            path: '../../fonts/SFMonoRegular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/SFMonoSemiBold.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/SFMonoBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/SFMonoHeavy.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-sfmono',
    subsets: ['latin'],
    display: 'swap',
})

const rubik = localFont({
    src:[
        {
            path: '../../fonts/Rubik-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-rubik',
    subsets: ['latin'],
    display: 'swap',
})


export { primary, sfmono, rubik }