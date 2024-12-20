"use client";
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {IoMenu, IoSearch} from 'react-icons/io5';
import {IoMdCloseCircle} from 'react-icons/io';
import {FaArrowRightLong} from "react-icons/fa6";
import {menuItems} from "@/lib/navbar/navbar";
import * as React from "react";
import {CiBullhorn} from "react-icons/ci";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {cn} from "@/lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {ModeToggle} from "@/components/ui/modeToggle";
import {NavigationMenuDemo} from "@/components/customer/navbar/NavigationMenuDemo";
import SkeletonNavbarComponent from "@/components/customer/navbar/SkeletonNavbar";

const NavbarComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = React.useState<string | undefined>();
    const [date, setDate] = React.useState<Date>();




    useEffect(() => {
        // Simulate a network request delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay as needed

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
            {isLoading ? <SkeletonNavbarComponent /> :
                <nav className=" w-full top-[-60px] sticky z-50 bg-white flex flex-col dark:bg-khotixs-background-dark ">
                    <section
                        className=" container mx-auto w-full h-[60px] bg-white py-[10px]  flex  justify-center gap-5 dark:bg-khotixs-background-dark ">
                        <CiBullhorn className="  w-[40px] p-[8px] rounded-[50%] text-gray-400 bg-gray-200  h-full "/>
                        <p className="  text-[10px] sm:text-sm lg:text-lg font-semibold flex items-center">Do you organize events? </p>
                        <Button className="   text-[10px] sm:text-sm lg:text-lg font-semibold text-white hover:bg-primary-color bg-primary-color rounded-[5px] ">
                            Become a Partner <span><FaArrowRightLong/></span>
                        </Button>
                    </section>

                    <section
                        className=" container  mx-auto w-full py-[15px] ">
                        <div className=" flex  justify-between h-14 items-center ">
                            {/* KHOTIXS LOGO */}
                            <Link href="/" className="flex items-center">
                                <Image className=" w-[40px] h-40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] " width={80} height={80} src="/khotixs_logo.png" alt="Khotixs Logo"/>
                            </Link>

                            {/* Search form */}
                            <section className="  rounded-[5px] flex justify-center drop-shadow-xl">

                                <form className=" w-full rounded-[5px] bg-gray-50 flex items-center ">

                                    {/* Search  */}
                                    <div className=" flex items-center w-auto ">
                                        <input
                                            type="text"
                                            placeholder="Search events name"
                                            className=" w-auto bg-transparent h-full rounded-tl-[5px] text-[12px] lg:text-[14px] focus:text-gray-500 rounded-bl-[5px] pl-5  focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-2 dark:text-primary-color-text "
                                            name="topic"
                                        />
                                        <hr className=" hidden md:block w-[20px] bg-gray-400 rotate-90"/>
                                    </div>

                                    {/* Select Location */}
                                    <div className=" hidden lg:flex lg:w-auto items-center ">
                                        <Select onValueChange={setSelectedLocation}>
                                            <SelectTrigger
                                                className={cn(
                                                    "w-[180px] text-[12px] lg:text-[14px] focus:outline-none ring-0 bg-transparent border-0",
                                                    selectedLocation ? "text-black" : "text-gray-400"
                                                )}
                                            >
                                                <SelectValue className="text-gray-400" placeholder="Select location"/>
                                            </SelectTrigger>
                                            <SelectContent className="text-gray-800 bg-gray-100">
                                                <SelectGroup>
                                                    <SelectItem value="Phnome Phenh">Phnome Phenh</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <hr className="w-[20px] bg-gray-400 rotate-90"/>
                                    </div>


                                    {/* Popover Component */}
                                    <div className=" hidden md:flex md:w-auto ">
                                        <Popover>
                                            <PopoverTrigger
                                                className=" text-[12px] lg:text-[14px] bg-red-950 focus:outline-none ring-0 dark:text-primary-color-text dark:hover:bg-white "
                                                asChild>
                                                <Button
                                                    variant="ghost"
                                                    className={cn(
                                                        "w-[200px] justify-start text-left bg-transparent border-0 focus:ring-0 focus:outline-none",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 text-gray-400"/>
                                                    {date ? format(date, "PPP") :
                                                        <span className="text-gray-400">Enter date</span>}
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
                                            className="bg-primary-color text-2xl text-white p-2 lg:p-3 rounded-tr-[5px] rounded-br-[5px]">
                                            <IoSearch/>
                                        </div>
                                    </button>
                                </form>

                            </section>

                            {/* Login and Sign up buttons */}
                            <div className="items-center flex gap-0 ">
                                <ModeToggle/>
                                <NavigationMenuDemo/>

                                <div className="hidden lg:flex items-center gap-2">
                                    {/*<Button*/}
                                    {/*    className="rounded-[5px] lg:text-md xl:text-lg border-[1px] border-primary-color text-primary-color font-medium dark:text-secondary-color-text dark:border-label-text-primary ">*/}
                                    {/*    Login*/}
                                    {/*</Button>*/}
                                    <Button
                                        className=" bg-primary-color lg:text-md xl:text-lg border-[1px] rounded-[5px] text-secondary-color-text font-[10px] hover:bg-primary-color border-primary-color">
                                        Log In
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>



                    <div
                        onClick={toggleMenu}
                        className=" absolute top-[85px] right-0 inline-flex items-center w-10 h-10 justify-center text-3xl text-primary-color lg:hidden focus:outline-none dark:text-primary-color "
                        aria-controls="mega-menu-full"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                        {isMenuOpen ? <IoMdCloseCircle /> : <IoMenu/>}
                    </div>
                    <div
                        id="mega-menu-full"
                        className={` lg:hidden items-center justify-between font-semibold dark:bg-khotixs-background-dark ${isMenuOpen ? "block" : "hidden"} w-full `}
                    >
                        <ul className="text-primary-color-text flex flex-col p-1 mt-4 rounded-[6px] bg-white dark:bg-khotixs-background-dark ">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className={`block py-1 px-2 rounded hover:bg-gray-300 dark:hover:bg-gray-300 dark:bg-khotixs-background-dark dark:text-secondary-color-text ${activeItem === item.name ? 'text-primary-color' : ''}`}
                                        onClick={() => handleItemClick(item.name)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            }
        </>
    );
};


export default NavbarComponent;