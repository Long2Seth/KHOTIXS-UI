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
import {CgProfile} from "react-icons/cg";
import React, { useState,useEffect } from "react";
import {ProfileComponentSkeleton} from "@/components/customer/User-Profile/ProfileComponentSkeleton";

export default function Setting () {
    const [activeTab, setActiveTab] = useState("account");
    const [isLoading , setIsLoading ] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        },2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {
            isLoading ? <ProfileComponentSkeleton/> :
            <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">

        {/*List all tab have 4*/}
        <div className="w-full mx-auto h-auto flex justify-center items-center mb-5">
            <div className="rounded-lg w-full max-w-[1200px] flex flex-wrap justify-center gap-y-4">
                <Link
                    href="/(customer)/profile/ticket"
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
                    href="/(customer)/profile/payment"
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
                    href="/(customer)/profile/profile"
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
                    href="/(customer)/profile/setting"
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

        {/*Have Function 2: Change Password and General Notification*/}
        <div className="w-full mx-auto h-auto flex justify-center items-center">
            <Tabs defaultValue="account" className="w-full max-w-[1200px] " onValueChange={setActiveTab}>
                <TabsList className="grid w-full max-w-[400px] grid-cols-2 mb-6">
                    <TabsTrigger
                        value="account"
                        className={`h-full rounded-l-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "account" ? "border-secondary-color" : "border-gray-300"}`}
                    >
                        Change Password
                    </TabsTrigger>
                    <TabsTrigger
                        value="password"
                        className={`h-full rounded-r-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "password" ? "border-secondary-color" : "border-gray-300"} py-3`}
                    >
                        General Notification
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="password" className="w-full">
                    {[
                        "News and updates",
                        "Tips and tutorials",
                        "Comments and replies",
                    ].map((title, index) => (
                        <div key={index}
                             className="flex justify-between items-center py-5 border-b last:border-b-0">
                            <div>
                                <h2 className="text-xl font-bold">{title}</h2>
                                <p className="text-sm text-gray-600">New about events and order tickets</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id={`switch-${index}`}/>
                                <Label htmlFor={`switch-${index}`} className="text-primary-color-text"></Label>
                            </div>
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="account" className="py-5 ">
                    <Card className="dark:bg-khotixs-background-dark ">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-secondary-color">CHANGE PASSWORD</CardTitle>
                            <CardDescription className="text-sm font-medium text-label-text-description">
                                On this page, you can change your password in two simple steps. First, enter your
                                current password for verification. Then, set your new password. It is that easy!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4  ">
                            <div className="space-y-1">
                                <Label htmlFor="current"
                                       className="text-sm font-medium text-label-text-description  ">
                                    Current password <span className="text-label-paid">*</span>
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="current"
                                        type="password"
                                        placeholder="Enter your current password"
                                        className="dark:bg-khotixs-background-dark rounded-[5px] text-label-text-description border-[1px] border-secondary-color"
                                    />
                                    <IoEyeOffOutline
                                        className="absolute right-4 top-3 cursor-pointer text-label-text-description"/>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="new"
                                           className="text-sm font-medium text-label-text-description ">
                                        New password<span className="text-label-paid">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="new"
                                            type="password"
                                            placeholder="Enter your new password"
                                            className="dark:bg-khotixs-background-dark rounded-[5px] text-label-text-description border-[1px] border-secondary-color"
                                        />
                                        <IoEyeOffOutline
                                            className="absolute right-4 top-3 cursor-pointer text-label-text-description"/>
                                    </div>
                                </div>
                                <div className="space-y-1 ">
                                    <Label htmlFor="confirm"
                                           className="text-sm font-medium text-label-text-description">
                                        Confirm Password <span className="text-label-paid">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="confirm"
                                            type="password"
                                            placeholder="Enter your confirm password"
                                            className="dark:bg-khotixs-background-dark rounded-[5px] text-label-text-description border-[1px] border-secondary-color"
                                        />
                                        <IoEyeOffOutline
                                            className="absolute right-4 top-3 cursor-pointer text-label-text-description"/>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <div className="space-y-1 ">
                            <CardFooter className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ">
                                <Button
                                    className="w-full mx-auto sm:w-1/2 bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text  hover:bg-slate-200 text-primary-color-text border-solid dark:border-[1px] border-[1px] "
                                    onClick={() => router.back()}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-1/2 bg-secondary-color hover:bg-red-900 dark:text-secondary-color-text"
                                >
                                    Save
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

        </section>
}
</>
)
}