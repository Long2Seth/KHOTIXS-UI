"use client";

import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CgProfile } from "react-icons/cg";
import Upcoming from "@/components/customer/User-Profile/Upcomming";
import React, {useState} from "react";
import {Settings} from "lucide-react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

// List All Menu have 4 tabs
interface NavItem {
    label: string
    icon: React.ReactNode
    href: string
}
export function NavMenu() {
    const pathname = usePathname()

    const navItems: NavItem[] = [
        {
            label: "TICKETS",
            icon: <GiNotebook className="h-[32px] w-[32px]" />,
            href: "/user-profile/ticket",
        },
        {
            label: "PAYMENT",
            icon: <RiSecurePaymentLine className="h-[32px] w-[32px]" />,
            href: "/user-profile/payment",
        },
        {
            label: "PROFILE",
            icon: <CgProfile className="h-[32px] w-[32px]" />,
            href: "/user-profile/profile",
        },
        {
            label: "SETTING",
            icon: <Settings className="h-[32px] w-[32px]" />,
            href: "/user-profile/settings",
        },
    ]

    return (
        <div className="flex justify-center items-start w-full">
            <nav className="w-full max-w-[1200px]">
                <ul className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <li key={item.href} className="bg-khotixs-background-white dark:bg-khotixs-background-dark">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex flex-col items-center text-[18px] justify-center p-4 transition duration-300 ease-in-out transform hover:scale-105",
                                        isActive && "text-primary"
                                    )}
                                >
                                    {item.icon}
                                    <span className="mt-2 text-[18px] font-medium">{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>

    )
}

export default function Tickets() {
    const [activeTab, setActiveTab] = useState("account");

    return (
        <main className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">

            <NavMenu/>
            <section className="w-full max-w-[1200px] mx-auto py-4">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center">
                    <Tabs defaultValue="account" className="mb-5 w-full" onValueChange={setActiveTab}>
                        <TabsList className="grid w-[400px] grid-cols-2 ">
                            <TabsTrigger
                                value="account"
                                className={`h-full rounded-l-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "account" ? "border-bg-primary-color" : "border-gray-300"}`}
                            >
                                Upcoming
                            </TabsTrigger>
                            <TabsTrigger
                                value="password"
                                className={`h-full rounded-r-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "password" ? "border-bg-primary-color" : "border-gray-300"} py-3`}
                            >
                                History
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="password" className="pt-5">
                            <div className="flex flex-col ">
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                            </div>
                        </TabsContent>

                        <TabsContent value="account" className="pt-5">
                            <div className="flex flex-col">
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}