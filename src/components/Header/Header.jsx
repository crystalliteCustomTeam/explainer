"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Import Components
import { FaPhoneAlt } from "react-icons/fa";
import {
    Navbar,
    Collapse,
    Typography,
    List,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
// Import Images
import logo from "media/logo.webp";

const megaMenuItems = [
    {
        title: "2d Animation",
        icon: SquaresPlusIcon,
        href: "/2d-animation",
    },
    {
        title: "3d Animation",
        icon: UserGroupIcon,
        href: "/3d-animation",
    },
    {
        title: "Promotional Videos",
        icon: RectangleGroupIcon,
        href: "/promotional-videos",
    },
    {
        title: "Explainer Videos",
        icon: TagIcon,
        href: "/explainer-videos",
    },
    {
        title: "Whiteboard Animation",
        icon: UserGroupIcon,
        href: "/whiteboard",
    },
    {
        title: "Infographics Design",
        icon: PhoneIcon,
        href: "/",
    },
    {
        title: "Logo Animation",
        icon: NewspaperIcon,
        href: "/",
    },
];

function MegaMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = megaMenuItems.map(({ icon, title, href }, key) => (
        <div key={key}>
            <MenuItem className="flex items-center rounded-lg mb-1 lg:mb-0 pt-0">
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                    {" "}
                    {React.createElement(icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6 text-black",
                    })}
                </div>
                <div>
                    <Link
                        href={href}
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center font-sans text-[16px] font-normal text-black h-full"
                    >
                        {title}
                    </Link>
                </div>
            </MenuItem>
        </div>
    ));
    // Mobile Mega Menu
    const [megamenu, setMegaMenu] = React.useState(false);
    const handleMegaMenu = () => {
        setMegaMenu((prev) => !prev);
    };
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Link
                        href="#"
                        variant="small"
                        className="font-medium text-black"
                    >
                        <span
                            className="text-white lg:text-black poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-100 duration-100 ease-in-out flex items-center gap-2"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => {
                                if (window.innerWidth <= 991) {
                                    handleMegaMenu();
                                } else {
                                    setIsMobileMenuOpen((cur) => !cur);
                                }
                            }}
                        >
                            Services
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronRightIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 mt-1 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </span>
                    </Link>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 outline-none outline-0 py-3">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div
                className={
                    megamenu
                        ? `absolute left-[0%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out`
                        : `lg:hidden absolute left-[-130%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out`
                }
            >
                <Collapse
                    open={isMobileMenuOpen}
                    className="h-full overflow-visible"
                >
                    {renderItems}
                </Collapse>
                <div
                    className="absolute top-[10px] right-[10px] bg-black rounded-full p-1"
                    onClick={() => handleMegaMenu()}
                >
                    <XMarkIcon
                        strokeWidth={2.5}
                        className={`block h-5 w-5 transition-transform text-white lg:hidden`}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 lg:mt-0 mb-0 pt-4 p-5 pb-4 lg:pb-0 lg:flex-row lg:p-1 gap-3 bg-black lg:bg-transparent border-b-2 border-[prime/100] lg:border-0">
            <Link href="/">
                <span className="text-white lg:text-black poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-100 duration-100 ease-in-out lg:p-3">
                    Home
                </span>
            </Link>
            <MegaMenu />
            <Link href="/">
                <span className="text-white lg:text-black poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-100 duration-100 ease-in-out lg:p-3">
                    Process
                </span>
            </Link>
            <Link href="/">
                <span className="text-white lg:text-black poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-100 duration-100 ease-in-out lg:p-3">
                    Pricing
                </span>
            </Link>
            <Link href="/">
                <span className="text-white lg:text-black poppins font-semibold text-[16px] hover:text-primary-100 hover:duration-100 duration-100 ease-in-out lg:p-3">
                    Contact Us
                </span>
            </Link>
        </List>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <header className={`w-full pt-5`}>
            <div className="px-5 lg:max-w-7xl mx-auto">
                <Navbar className="max-w-none shadow-none px-0 py-2 rounded-none bg-transparent border-none">
                    <div className="flex items-center justify-between relative">
                        <Typography
                            href="/"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2 w-[195px] lg:w-[315px]"
                        >
                            <Image
                                src={logo}
                                className="w-[60%] sm:w-[80%]"
                                alt="Cloud Studios Inc"
                            />
                        </Typography>
                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                        <div className="lg:flex hidden items-center gap-x-7">
                            <div className="">
                                <a
                                    href="tel:833-666-6684"
                                    className="flex items-center gap-x-3 text-primary-100 poppins font-semibold text-[15px]"
                                >
                                    <FaPhoneAlt className="text-[15px]" />
                                    833-666-6684
                                </a>
                            </div>
                            <div className="lg:block hidden">
                                <Link
                                    href="javascript:;"
                                    className="text-[13px] sm:text-[15px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[135px] h-[42px] poppins flex items-center justify-center"
                                >
                                    Get A Quote
                                </Link>
                            </div>
                        </div>
                        <div className="xl:hidden flex items-center gap-x-3">
                            <div className="">
                                <a
                                    href="tel:833-666-6684"
                                    className="flex items-center gap-x-3 text-primary-100 poppins font-semibold text-[13px] sm:text-[15px]"
                                >
                                    <FaPhoneAlt className="text-[15px] sm:block hidden" />
                                    833-666-6684
                                </a>
                            </div>
                            <button
                                onClick={() => setOpenNav(!openNav)}
                                className="block lg:hidden"
                            >
                                {openNav ? (
                                    <XMarkIcon
                                        className="h-[40px] w-[40px] text-black"
                                        strokeWidth={2}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="h-[40px] w-[40px] text-black"
                                        strokeWidth={2}
                                    />
                                )}
                            </button>
                        </div>

                    </div>
                    {openNav && (
                        <Collapse open={openNav} className="block lg:hidden ">
                            <NavList />
                        </Collapse>
                    )}
                </Navbar>
            </div>
        </header>
    );
};
export default Header;