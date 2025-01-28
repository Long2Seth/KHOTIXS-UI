'use client';
import {ModeToggle} from "@/components/ui/modeToggle";
import {IoMdCloseCircle} from "react-icons/io";
import {IoMenu} from "react-icons/io5";
import Link from "next/link";
import * as React from "react";
import {navItems} from "@/lib/types/organizer/navData";
import {useRouter, usePathname} from "next/navigation";
import {OrganizerProfileComponent} from "@/components/organizer/profile/UserProfileComponent";
import {useEffect, useState} from "react";
import {UserProfileType} from "@/lib/types/customer/userProfile";

export default function NavbarOrganizerComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const [profile, setProfile] = useState<UserProfileType | null>(null);

    const getMeData = async () => {
        await fetch('/user-profile/api/v1/user-profiles/me')
            .then((response) => response.json())
            .then((data) => {
                setProfile(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getMeData();

    }, []);

    React.useEffect(() => {
        const currentItem = navItems.find(item => item.link === pathname);
        if (currentItem) {
            setActiveItem(currentItem.label);
        }
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (itemLabel: string, itemLink: string) => {
        setActiveItem(itemLabel);
        router.push(itemLink);
    };

    return (
        <header className=" bg-white dark:bg-khotixs-background-dark dark:border-b-[1px] dark:border-gray-700 mb-5">
            <section
                className=" container mx-auto w-full z-20 top-0 sticky py-[10px] dark:bg-khotixs-background-dark bg-white  ">
                <section className="flex items-center gap-2 md:gap-4 justify-between pr-[10px]">
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-5 p-2  ">
                        <OrganizerProfileComponent data={profile}/>
                        <div>
                            <p className="text-[10px] md:text-lg text-gray-500">WELCOME BACK, ORGANIZER</p>
                            <h1 className="text-lg md:text-2xl font-bold uppercase">{profile?.username}</h1>
                        </div>
                    </div>
                    <ModeToggle/>
                </section>
                <button
                    onClick={toggleMenu}
                    className="absolute top-[32px] right-0 inline-flex items-center w-10 h-10 justify-center text-3xl text-primary-color md:hidden focus:outline-none dark:text-primary-color"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                    {isMenuOpen ? <IoMdCloseCircle/> : <IoMenu/>}
                </button>
                <div
                    id="mega-menu-full"
                    className={`md:hidden items-center justify-between font-semibold dark:bg-khotixs-background-dark border-b-[1px] ${isMenuOpen ? "block" : "hidden"} w-full`}
                >
                    <ul className="text-primary-color-text flex flex-col rounded-[6px] bg-khotixs-background-white dark:bg-khotixs-background-dark">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className={`flex items-center py-1 px-2 rounded  dark:bg-khotixs-background-dark dark:text-secondary-color-text  ${activeItem === item.label ? 'text-primary-color hover:text-white ' : 'hover:bg-primary-color hover:text-white dark:hover:bg-primary-color dark:hover:text-white'}`}
                                    onClick={() => handleItemClick(item.label, item.link)}
                                >
                                    <item.icon
                                        className={` h-5 w-5 mr-2 ${activeItem === item.label ? 'text-primary-color ' : 'hover:bg-primary-color hover:text-white'} `}/>
                                    <span className={activeItem === item.label ? 'text-primary-color ' : ''}>
                                    {item.label}
                                </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </header>
    )
}