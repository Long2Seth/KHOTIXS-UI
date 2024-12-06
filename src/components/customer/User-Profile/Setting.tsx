"use client";

import Link from "next/link";
import {GiNotebook} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
// import {DialogFooter} from "@/components/ui/dialog";

import { Switch } from "@/components/ui/switch"
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
import {router} from "next/client";
import React from "react";
import {CgProfile} from "react-icons/cg";

export default function Setting () {
    return (
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
            <div className="w-[1103px] mx-auto flex justify-center items-center">
                <Tabs defaultValue="account" className="w-[1030px] mb-5">
                    <TabsList className="grid w-[400px] h-full grid-cols-2">
                        <TabsTrigger
                            value="account"
                            className=" h-full border-2 rounded-l-[5px]">
                            Change Password
                        </TabsTrigger>
                        <TabsTrigger
                            value="password"
                            className=" h-full border-2 rounded-r-[5px] ">
                            General Notification
                        </TabsTrigger>

                    </TabsList>

                    {/*General Notification*/}
                    <TabsContent value="password">
                        <div className="flex justify-between py-5">
                            <div className="pl-6 pt-[-50px]">
                                <h2 className="text-xl font-bold ">News and updates</h2>
                                <p>New about events and order tickets</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode"/>
                                <Label htmlFor="airplane-mode" className="bg-primary-color"></Label>
                            </div>
                        </div>
                        <div className="flex justify-between pb-5">
                            <div className="pl-6 pt-[-50px]">
                                <h2 className="text-xl font-bold ">News and updates</h2>
                                <p>New about events and order tickets</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode"/>
                                <Label htmlFor="airplane-mode" className="text-primary-color-text"></Label>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="pl-6 pt-[-50px]">
                                <h2 className="text-xl font-bold">News and updates</h2>
                                <p>New about events and order tickets</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode"/>
                                <Label htmlFor="airplane-mode" className="text-primary-color-text"></Label>
                            </div>
                        </div>
                    </TabsContent>

                    {/*Change Password*/}
                    <TabsContent value="account" className="py-5">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-secondary-color">CHANGE PASSWORD</CardTitle>
                                <CardDescription className="text-sm font-medium">
                                    On this page, you can change your password in two simple steps. First, enter your
                                    current password for verification. Then, set your new password. It is that easy!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current"
                                           className="text-sm font-medium text-label-text-description">Current
                                        password <span className="text-label-paid">*</span></Label>
                                    <div className="relative">
                                        <Input id="new" type="password"
                                               className="rounded-[5px] text-label-text-description border-[1px] border-secondary-color  "/>
                                        <IoEyeOffOutline
                                            className="absolute right-4 top-3 cursor-pointer text-label-text-description"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-[18px]">
                                    <div className="space-y-1 ">
                                        <Label htmlFor="new"
                                               className="text-sm font-medium text-label-text-description">New
                                            password<span className="text-label-paid">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Input id="new" type="password"
                                                   className="rounded-[5px] text-label-text-description border-[1px] border-secondary-color  "/>
                                            <IoEyeOffOutline
                                                className="absolute right-4 top-3 cursor-pointer text-label-text-description"/>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new"
                                               className="text-sm font-medium text-label-text-description">New Password
                                            Confirmation <span
                                                className="text-label-paid">*</span> </Label>
                                        <div className="relative">
                                            <Input id="new" type="password"
                                                   className="rounded-[5px] text-label-text-description border-[1px] border-secondary-color  "/>
                                            <IoEyeOffOutline
                                                className="absolute right-4 top-3 cursor-pointer text-label-text-description"/>
                                        </div>
                                    </div>
                                </div>

                            </CardContent>
                            <CardFooter className="grid grid-cols-2 w-[1030px] flex space-x-4">
                                <Button
                                    className="w-full bg-white hover:bg-slate-200 text-primary-color-text border-solid border-[1px] border-black"
                                    onClick={() => router.back()}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-full bg-secondary-color hover:bg-red-900"
                                >
                                    Pay Now
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

        </section>
    )
}

