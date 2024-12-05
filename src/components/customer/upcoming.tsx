"use client";

import Link from "next/link";
import {GiNotebook} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
// import {DialogFooter} from "@/components/ui/dialog";

import { Switch } from "@/components/ui/switch"
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoEyeOffOutline } from "react-icons/io5";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import React from "react";
import {router} from "next/client";

export default function Upcoming() {
    return (
        <section className="container">
            <div className=" w-[1103px] mx-auto h-auto flex justify-center items-center lg:flex md:block mt-2 mb-5">
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
                                    <HiOutlineUserCircle className="text-3xl text-label-text-description"/>
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

            <div className="w-[1103px] mx-auto flex justify-center items-center">
                <Tabs defaultValue="account" className="w-[1030px] mb-5">
                    <TabsList className="grid w-[400px] grid-cols-2">

                        <TabsTrigger
                            value="account"
                            className=" h-full  rounded-l-[5px]">
                            Upcoming
                        </TabsTrigger>
                        <TabsTrigger
                            value="password"
                            className=" h-full rounded-r-[5px] ">
                            History
                        </TabsTrigger>

                    </TabsList>

                    {/*General Notification*/}
                    <TabsContent value="password">
                        <div>Hello</div>
                    </TabsContent>

                    {/*Change Password*/}
                    <TabsContent value="account" className="py-5">
                        <div>Wellcome</div>
                    </TabsContent>
                </Tabs>
            </div>

        </section>
    )
}

