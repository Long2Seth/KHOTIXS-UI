'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {IoMenu} from 'react-icons/io5';
import {IoMdCloseCircle} from 'react-icons/io';
import {FaArrowRightLong} from "react-icons/fa6";
import {menuItems, MenuType} from "@/lib/types/navbar/navbar";
import * as React from "react";
import {CiBullhorn} from "react-icons/ci";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/ui/modeToggle";
import {NavigationMenuDemo} from "@/components/customer/navbar/NavigationMenuDemo";
import SkeletonNavbarComponent from "@/components/customer/navbar/SkeletonNavbar";
import {useRouter} from "next/navigation";
import {UserProfileComponent} from "@/components/customer/navbar/UserProfileComponent";
import NotificationComponent from "@/components/customer/notification/NotificationComponent";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useGetUserProfileQuery} from "@/redux/feature/user/UserProfile";
import Autocomplete from '@/components/customer/navbar/Autocomplete';

const NavbarComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const router = useRouter();
    const {data: userProfile, error} = useGetUserProfileQuery();
    const [dynamicMenuItems, setDynamicMenuItems] = useState<MenuType[]>(menuItems);
    const [lastCheckedTime, setLastCheckedTime] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLastCheckedTime(Number(localStorage.getItem('lastNotificationCheck') || '0'));
        }
    }, []);

    useEffect(() => {
        if (userProfile) {
            setDynamicMenuItems(menuItems.filter(item => item.link !== '/oauth2/authorization/nextjs'));
        } else {
            setDynamicMenuItems(menuItems);
        }
    }, [userProfile]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const closeMenus = () => {
        setMenuOpen(false);
    };

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
        closeMenus();
    };

    useEffect(() => {
        if (!isMenuOpen) {
            closeMenus();
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {isLoading ? <SkeletonNavbarComponent/> :
                <nav className="w-full top-[0px] sticky z-50 bg-white flex flex-col dark:border-b dark:border-gray-700 dark:bg-khotixs-background-dark">
                    {userProfile ? (
                        <section
                            className="container mx-auto h-[40px] md:h-[60px] bg-white py-[10px] flex items-center md:px-5 lg:px-10 justify-center gap-5 dark:bg-khotixs-background-dark">
                            <CiBullhorn
                                className="p-1.5 md:w-[40px] md:h-[40px] md:p-[8px] rounded-[100%] text-gray-400 bg-gray-200 h-8 w-8"/>
                            <p className="text-[10px] sm:text-sm lg:text-lg font-semibold flex items-center">Do you
                                organize events? </p>
                            <Button
                                onClick={() => router.push("/merchants")}
                                className="text-[10px] sm:text-sm lg:text-lg p-2 md:px-4 font-semibold text-white hover:bg-primary-color bg-primary-color rounded-[5px] h-8 md:h-10">
                                Become a Partner<FaArrowRightLong className="w-16 p-0.5 md:p-0"/>
                            </Button>
                        </section>
                    ) : null}

                    <section
                        className="container mx-auto w-full md:py-[15px] md:px-5  lg:px-10">
                        <div className="flex justify-between h-12 md:h-14 items-center">
                            <Link href="/" className="flex items-center">
                                <Image className="w-[40px] h-40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] "
                                       width={80} height={80} src="/khotixs_logo.png" alt="Khotixs Logo"/>
                            </Link>

                            <section className="rounded-[5px] flex justify-center drop-shadow-xl w-[60%]">
                                <div
                                    className="md:w-full w-[220px] rounded-[5px] flex items-center">
                                    <Autocomplete/>
                                </div>
                            </section>

                            <div className="justify-center items-center pr-4 flex gap-2 md:gap-0">
                                {userProfile ? null : <ModeToggle/>}
                                <NavigationMenuDemo/>

                                <div className="flex items-center justify-center">
                                    {userProfile ? (
                                        <div className={`flex items-center lg:gap-x-4 gap-2 `}>
                                            <NotificationComponent/>
                                            <UserProfileComponent data={userProfile}/>
                                        </div>
                                    ) : (
                                        <>
                                            <Button
                                                onClick={() => router.push("/oauth2/authorization/nextjs")}
                                                className="hidden md:flex bg-primary-color lg:text-md xl:text-lg border-[1px] rounded-[5px] text-secondary-color-text font-[10px] hover:bg-primary-color border-primary-color hover:bg-primary-color/80"
                                            >
                                                Log In
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    <Sheet>
                        <SheetTrigger>
                            <div
                                className={`absolute cursor-pointer mr-2 ${userProfile ? 'top-[48px]' : 'top-2'} hover:bg-gray-50 hover:rounded-[6px] sm:mr-[70px] items-center justify-center md:mr-0 lg:pr-10 right-0 inline-flex w-8 h-8 text-2xl text-primary-color md:hidden focus:outline-none dark:text-primary-color`}
                                aria-controls="mega-menu-full"
                                aria-expanded={isMenuOpen ? "true" : "false"}
                            >
                                <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                                {isMenuOpen ? <IoMdCloseCircle/> : <IoMenu/>}
                            </div>
                        </SheetTrigger>
                        <SheetContent
                            className={`${userProfile ? 'mt-[48px]' : 'mt-1'} w-[270px] rounded-tl-[6px] bg-white bg-opacity-95`}>
                            <SheetHeader>
                                <SheetTitle
                                    className={`text-label-text-secondary uppercase text-start`}>Menu</SheetTitle>
                            </SheetHeader>
                            <ul className="flex flex-col p-1 mt-2 rounded-[6px]">
                                {dynamicMenuItems.map((item, index) => (
                                    <li key={index}
                                        className={`menu-item ${!userProfile ? 'last:bg-gray-400 last:rounded-[6px] last:bg-blur-5 last:bg-opacity-10 last:my-2' : ''}`}>
                                        <Link
                                            href={item.link}
                                            className={`block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-300 hover:text-primary-color text-secondary-color-text ${activeItem === item.name ? 'text-primary-color' : ''}`}
                                            onClick={() => handleItemClick(item.name)}
                                        >
                                            <span className="flex items-center text-label-text-secondary gap-2">
                                                {item.icon}
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
            }
        </>
    );
};

export default NavbarComponent;