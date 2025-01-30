'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {IoMenu, IoSearch} from 'react-icons/io5';
import {IoMdCloseCircle} from 'react-icons/io';
import {FaArrowRightLong} from "react-icons/fa6";
import {menuItems, MenuType} from "@/lib/types/navbar/navbar";
import * as React from "react";
import {CiBullhorn} from "react-icons/ci";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {cn} from "@/lib/types/utils";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {ModeToggle} from "@/components/ui/modeToggle";
import {NavigationMenuDemo} from "@/components/customer/navbar/NavigationMenuDemo";
import SkeletonNavbarComponent from "@/components/customer/navbar/SkeletonNavbar";
import {useRouter} from "next/navigation";
import {UserProfileComponent} from "@/components/customer/navbar/UserProfileComponent";
import NotificationComponent from "@/components/customer/notification/NotificationComponent";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { useGetUserProfileQuery } from "@/redux/feature/user/UserProfile";

const NavbarComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = React.useState<string | undefined>();
    const [date, setDate] = React.useState<Date>();
    const router = useRouter();
    const { data: userProfile, error } = useGetUserProfileQuery();
    const [dynamicMenuItems, setDynamicMenuItems] = useState<MenuType[]>(menuItems);
    const route = useRouter();
    const [notifications, setNotifications] = useState<any[]>([]);
    const [unreadCount, setUnreadCount] = useState<number>(0);
    const [lastCheckedTime, setLastCheckedTime] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLastCheckedTime(Number(localStorage.getItem('lastNotificationCheck') || '0'));
        }
    }, []);

    const handleNotificationClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const currentTime = Date.now();
        setLastCheckedTime(currentTime);
        setUnreadCount(0);

        if (typeof window !== 'undefined') {
            localStorage.setItem('lastNotificationCheck', currentTime.toString());
        }

        route.push('/notification');
    };

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
        }, 2000);

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
                <nav className="w-full top-[0px] sticky z-50 bg-white flex flex-col dark:bg-khotixs-background-dark">
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

                    <section
                        className="container mx-auto w-full md:py-[15px] md:px-5 lg:px-10">
                        <div className="flex justify-between h-12 md:h-14 items-center">
                            <Link href="/" className="flex items-center">
                                <Image className="w-[40px] h-40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] "
                                    width={80} height={80} src="/khotixs_logo.png" alt="Khotixs Logo"/>
                            </Link>

                            <section className="rounded-[5px] flex justify-center drop-shadow-xl">
                                <form className="w-full rounded-[5px] bg-gray-50 flex items-center">
                                    <div
                                        className="flex items-center w-[160px] md:max-w-[200px] lg:max-w-[220px] xl:w-auto">
                                        <input
                                            type="text"
                                            placeholder="Search events name"
                                            className="w-auto bg-transparent h-full rounded-tl-[5px] text-[12px] lg:text-[14px] focus:text-gray-500 rounded-bl-[5px] md:pl-5 pl-2 lg:pl-2 xl:pl-5 focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-2 dark:text-primary-color-text "
                                            name="topic"
                                        />
                                        <hr className="w-[20px] bg-gray-400 rotate-90"/>
                                        <hr className="hidden md:block xl:block  w-[20px] bg-gray-400 rotate-90"/>
                                    </div>

                                    <div className="hidden lg:flex lg:w-auto items-center">
                                        <Select onValueChange={setSelectedLocation}>
                                            <SelectTrigger
                                                className={cn(
                                                    "w-[170px] lg:w-[130px] xl:w-[180px] text-[12px] lg:text-[14px] focus:outline-none ring-0 bg-transparent border-0",
                                                    selectedLocation ? "text-black" : "text-gray-400"
                                                )}
                                            >
                                                <SelectValue className="text-gray-400" placeholder="Select location"/>
                                            </SelectTrigger>
                                            <SelectContent className="text-gray-800 bg-gray-100">
                                                <SelectGroup>
                                                    <SelectItem value="Phnome Phenh">Phnom Penh</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <hr className="w-[20px] bg-gray-400 rotate-90"/>
                                    </div>

                                    <div className="hidden md:block">
                                        <Popover>
                                            <PopoverTrigger
                                                className="text-[12px] lg:text-[14px] bg-red-950 focus:outline-none ring-0 dark:text-primary-color-text dark:hover:bg-white "
                                                asChild>
                                                <Button
                                                    variant="ghost"
                                                    className={cn(
                                                        "md:w-[180px] lg:w-[190px] justify-start text-left bg-transparent border-0 focus:ring-0 focus:outline-none",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 text-gray-400"/>
                                                    {date ? format(date, "PPP") :
                                                        <span className="text-gray-400">Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 text-black outline-none border-0">
                                                <Calendar
                                                    className="text-gray-600 border-0 bg-white z-50 rounded-[5px] "
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <button
                                        className="flex flex-row items-center justify-center rounded-tr-[5px] rounded-br-[5px]">
                                        <div
                                            className="bg-primary-color text-2xl text-white p-1 md:px-2 lg:p-3 rounded-tr-[5px] rounded-br-[5px]">
                                            <IoSearch className="w-4"/>
                                        </div>
                                    </button>
                                </form>
                            </section>

                            <div className="justify-center items-center flex gap-2 md:gap-0">
                                {userProfile ? null : <ModeToggle/>}
                                <NavigationMenuDemo/>

                                <div className="flex items-center">
                                    {userProfile ? (
                                        <div className={`flex gap-x-2 `}>
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
                                className="absolute cursor-pointer top-[52px] hover:bg-gray-100 rounded-[6px] sm:mr-[70px] md:mr-0 pr-0 lg:pr-10 right-0 inline-flex w-8 h-8 text-2xl text-primary-color md:hidden focus:outline-none dark:text-primary-color"
                                aria-controls="mega-menu-full"
                                aria-expanded={isMenuOpen ? "true" : "false"}
                            >
                                <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                                {isMenuOpen ? <IoMdCloseCircle/> : <IoMenu/>}
                            </div>
                        </SheetTrigger>
                        <SheetContent className="mt-[48px] rounded-tl-[6px]">
                            <SheetHeader>
                                <SheetTitle className={`text-secondary-color-text uppercase text-start`}>Menu</SheetTitle>
                            </SheetHeader>
                            <ul className="flex flex-col p-1 mt-2 rounded-[6px]">
                                {dynamicMenuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.link}
                                            className={`block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-300 hover:text-primary-color text-secondary-color-text ${activeItem === item.name ? 'text-primary-color' : ''}`}
                                            onClick={() => handleItemClick(item.name)}
                                        >
                                            <span className="flex items-center gap-2">
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