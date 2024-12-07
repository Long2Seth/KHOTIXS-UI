"use client";

import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CgProfile } from "react-icons/cg";
import Upcoming from "@/components/customer/User-Profile/Upcomming";
import React, {useState} from "react";


export default function Tickets() {
    const [activeTab, setActiveTab] = useState("account");

    return (
        <main className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto h-auto flex justify-center items-center mb-5">
                <div className="rounded-lg w-full max-w-[1200px] flex flex-wrap justify-center gap-y-4">
                    <Link
                        href="/user-profile/ticket"
                        className="flex justify-center items-center w-[48%] sm:w-[45%] md:w-[22%] lg:w-[22%] h-[60px] rounded-lg shadow-sm"
                    >
                        <div
                            className="w-full h-full border-l-4 border-primary-color p-4 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex flex-col items-center justify-center">
                                <GiNotebook className="text-3xl text-label-text-description mb-2"/>
                                <div className="text-[16px] text-label-text-description">TICKETS</div>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/user-profile/payment"
                        className="flex justify-center items-center w-[48%] sm:w-[45%] md:w-[22%] lg:w-[22%] h-[60px] rounded-lg shadow-sm"
                    >
                        <div
                            className="w-full h-full border-l-4 border-primary-color p-4 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex flex-col items-center justify-center">
                                <RiSecurePaymentLine className="text-3xl text-label-text-description mb-2"/>
                                <div className="text-[16px] text-label-text-description">PAYMENT</div>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/user-profile/profile"
                        className="flex justify-center items-center w-[48%] sm:w-[45%] md:w-[22%] lg:w-[22%] h-[60px] rounded-lg shadow-sm"
                    >
                        <div
                            className="w-full h-full border-l-4 border-primary-color p-4 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex flex-col items-center justify-center">
                                <CgProfile className="text-3xl text-label-text-description mb-2"/>
                                <div className="text-[16px] text-label-text-description">PROFILE</div>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/user-profile/setting"
                        className="flex justify-center items-center w-[48%] sm:w-[45%] md:w-[22%] lg:w-[22%] h-[60px] rounded-lg shadow-sm"
                    >
                        <div
                            className="w-full h-full border-l-4 border-primary-color p-4 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex flex-col items-center justify-center">
                                <IoSettingsOutline className="text-3xl text-label-text-description mb-2"/>
                                <div className="text-[16px] text-label-text-description">SETTING</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <section className="w-full max-w-[1200px] mx-auto">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center">
                    <Tabs defaultValue="account" className="mb-5 w-full" onValueChange={setActiveTab}>
                        <TabsList className="grid w-[400px] grid-cols-2 ">
                            <TabsTrigger
                                value="account"
                                className={`h-full rounded-l-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "account" ? "border-secondary-color" : "border-gray-300"}`}
                            >
                                Upcoming
                            </TabsTrigger>
                            <TabsTrigger
                                value="password"
                                className={`h-full rounded-r-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "password" ? "border-secondary-color" : "border-gray-300"} py-3`}
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