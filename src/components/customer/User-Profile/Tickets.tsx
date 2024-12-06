"use client";

import Link from "next/link";
import {GiNotebook} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import React from "react";
import {CgProfile} from "react-icons/cg";
import Upcomming from "@/components/customer/User-Profile/Upcomming";
// import {router} from "next/client";

export default function Tickets() {
    return (
        <main className="container">
            <section className="container mt-7">
                <div className=" w-[1200px] mx-auto h-auto flex justify-center items-center lg:flex md:block mb-5">
                    <div
                        className="rounded-lg h-auto py-2 w-[100%] md:w-full lg:w-[92%] flex justify-center lg:justify-between md:justify-center gap-3.5">
                        <Link
                            href="/user-profile/ticket"
                            className=" flex justify-center py-2 items-center md:w-[170px] lg:w-full h-[60px] rounded-lg shadow-sm lg:gap-4"
                        >
                            <div
                                role="alert"
                                className=" dark:bg-green-900 w-[79px] h-[60px] md:w-[120px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 dark:border-green-700 text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div className="flex flex-col my-2 items-center justify-center">
                                    <div className="mb-2">
                                        <GiNotebook className="text-3xl text-label-text-description"/>
                                    </div>
                                    <div className="text-[16px] text-label-text-description">
                                        TICKETS
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/user-profile/payment"
                            className="flex justify-center items-center md:w-[120px] lg:w-full h-[60px] rounded-lg border-1 shadow-sm gap-4"
                        >
                            <div
                                role="alert"
                                className=" dark:bg-green-900 w-[60px] h-[50px] md:w-[120px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2 dark:border-green-700 text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <div className="mb-2">
                                        <RiSecurePaymentLine className="text-3xl text-label-text-description"/>
                                    </div>
                                    <div className="text-[16px] text-label-text-description">
                                        PAYMENT
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href=" /user-profile/profile"
                            className=" flex justify-center items-center md:w-auto lg:w-full h-[60px] rounded-lg border-1 shadow-sm gap-4"
                        >
                            <div
                                role="alert"
                                className="dark:bg-green-900 w-[79px] h-[60px] md:w-[170px] md:h-[60px] lg:w-full lg:h-[60px] border-r-2  dark:border-green-700 text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <div className="mb-2">
                                        <CgProfile className="text-3xl text-label-text-description"/>
                                    </div>
                                    <div className="text-[16px] text-label-text-description">
                                        PROFILE
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href=" /user-profile/setting"
                            className=" flex justify-center items-center md:w-auto lg:w-full h-[60px] rounded-lg border-1 shadow-sm gap-4"
                        >
                            <div
                                role="alert"
                                className=" dark:bg-green-900 w-[79px] h-[60px] md:w-[170px] md:h-[60px] lg:w-full lg:h-[60px] text-green-900 p-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <div className="mb-2">
                                        <IoSettingsOutline className="text-3xl text-label-text-description"/>
                                    </div>
                                    <div className="text-[16px] text-label-text-description">
                                        SETTING
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

                <section>
                    <div className="w-[1103px] mx-auto flex justify-center items-center">
                        <Tabs defaultValue="account" className="w-[1030px] mb-5">
                            <TabsList className="grid w-[400px] grid-cols-2">

                                <TabsTrigger
                                    value="account"
                                    className=" h-full  rounded-l-[5px] border-2">
                                    Upcoming
                                </TabsTrigger>
                                <TabsTrigger
                                    value="password"
                                    className=" h-full rounded-r-[5px] border-2 ">
                                    History
                                </TabsTrigger>

                            </TabsList>

                            {/*Change Password*/}
                            <TabsContent value="password" className="py-5">
                                <div>Wellcome</div>
                            </TabsContent>

                            {/*General Notification*/}
                            <TabsContent value="account">
                                <div className=" flex flex-col gap-4">
                                    <Upcomming/>
                                    <Upcomming/>
                                    <Upcomming/>
                                    <Upcomming/>
                                    <Upcomming/>

                                </div>
                            </TabsContent>


                        </Tabs>
                    </div>

                </section>



        </main>
    )
}

