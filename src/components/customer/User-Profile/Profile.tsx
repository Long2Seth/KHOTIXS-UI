"use client";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { User, Building2, Phone, Mail, MapPin, FileText } from 'lucide-react';
import React from "react";
import {router} from "next/client";
import {Mail, MapPin, Phone} from "lucide-react";



export default function Profile() {
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
            <div className="container mx-auto p-4">
                <h1 className=" w-[1200px] mx-auto h-auto flex justify-start items-start text-3xl font-bold text-[#4A0635] mb-6">MY
                    PROFILE</h1>
                <div className="w-[1200px] mx-auto h-auto flex justify-start items-start  flex gap-7">
                    {/* Profile Image Section */}
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="w-[160px] h-[160px] rounded-[5px]">
                            <AvatarImage src="/cher-chhaya.png"/>
                        </Avatar>
                    </div>
                    <Card className="w-[897px] mx-auto ">
                        <CardContent className="p-6 ">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Profile Details Section */}
                                <div className="flex space-y-2">
                                    <div>
                                        <div className="grid grid-cols-4 gap-y-2">
                                            <div className="flex items-start gap-2 col-span-1">
                                                <CgProfile className="w-5 h-5 mt-1 text-gray-500"/>
                                                <div className="text-sm text-gray-500">Username</div>
                                            </div>
                                            <div className="col-span-3">
                                                <div>PHAL SOPHANMAI</div>
                                            </div>

                                            <div className="flex items-start gap-2 col-span-1">
                                                <MdOutlineWorkOutline className="w-5 h-5 mt-1 text-gray-500"/>
                                                <div className="text-sm text-gray-500">Position</div>
                                            </div>
                                            <div className="col-span-3">
                                                <div>Team Manager</div>
                                            </div>

                                            <div className="flex items-start gap-2 col-span-1">
                                                <Phone className="w-5 h-5 mt-1 text-gray-500"/>
                                                <div className="text-sm text-gray-500">Phone</div>
                                            </div>
                                            <div className="col-span-3">
                                                <div>096 830 2233</div>
                                            </div>

                                            <div className="flex items-start gap-2 col-span-1">
                                                <Mail className="w-5 h-5 mt-1 text-gray-500"/>
                                                <div className="text-sm text-gray-500">Email</div>
                                            </div>
                                            <div className="col-span-3">
                                                <div>phannmai168@gmail.com</div>
                                            </div>

                                            <div className="flex items-start gap-2 col-span-1">
                                                <MapPin className="w-5 h-5 mt-1 text-gray-500"/>
                                                <div className="text-sm text-gray-500">Address</div>
                                            </div>
                                            <div className="col-span-3">
                                                <div>24, Street 562,Sangkat Boeung ,Kak I, Khan Toul Kork,Phnom
                                                    Penh
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-2 col-span-1">
                                                <PiNotePencilLight className="w-5 h-5 mt-1 text-gray-500"/>
                                                <div className="text-sm text-gray-500">Description</div>
                                            </div>
                                            <div className="font-medium text-sm col-span-3">
                                                <div>ផ្តល់វិញ្ញាបនបត្រទទួលស្គាល់គុណភាព ផ្តល់វិញ្ញាបនបត្រ
                                                    ជាភាពិកភាពដល់ STING MUSICVERSE សម្រាប់ចាក់ ការប្រគំតន្ត្រី THE Q
                                                    RISE OF THE QUEEN - AOK SOKUNKANHA
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                type="submit"
                                                className="w-full bg-secondary-color hover:bg-red-900"
                                            >
                                                EDIT
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[440px] bg-secondary-color-text">
                                            <DialogHeader>
                                                <DialogTitle>EDIT PROFILE</DialogTitle>
                                                <DialogDescription className="border-[1px]">

                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="flex flex-col space-y-4 rounded-[5px]">
                                                <div className="flex items-start space-x-6">
                                                    <div>
                                                        <Avatar className="w-[130px] h-[140px] rounded-[5px]">
                                                            <AvatarImage src="/cher-chhaya.png"
                                                                         alt="Profile picture"/>
                                                        </Avatar>
                                                    </div>
                                                    <div className="w-[240px] h-[140px] rounded-[5px] ">
                                                        <div className="">
                                                            <Label htmlFor="name"
                                                                   className="text-sm font-medium text-label-text-description">
                                                                Name <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input id="name" defaultValue="Pedro Duarte"
                                                                   className="max-w-[300px] text-label-text-description"/>
                                                        </div>
                                                        <div className="text-label-text-description py-[15px]">
                                                            <Label htmlFor="username"
                                                                   className="text-sm font-medium">
                                                                Username <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input id="username" defaultValue="@peduarte"
                                                                   className="max-w-[250px]"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-label-text-description">
                                                    <div className="items-center">
                                                        <Label htmlFor="name" className="text-right">
                                                            Location <span className="text-label-paid">*</span>
                                                        </Label>
                                                        <Input id="name" value="Pedro Duarte"
                                                               className=" focus:outline-none col-span-3 "/>
                                                    </div>
                                                    <div className=" items-center gap-4">
                                                        <Label htmlFor="username" className="text-right">
                                                            Description <span className="text-label-paid">*</span>
                                                        </Label>
                                                        <Input id="username"
                                                               value="ក្តីស្រមៃដែលគ្រប់គ្នាៗចង់ឲកើតមានឡើង ក្តីស្រមៃនោះបាន "
                                                               className=" w-[400px] h-[120px] justify-start"/>
                                                    </div>
                                                </div>

                                            </div>
                                            <section>
                                                <div className="flex gap-[10px] pt-[10px]">
                                                    <Button
                                                        className="w-full bg-white hover:bg-slate-200 text-primary-color-text border-solid border-[1px] border-black"
                                                        onClick={() => router.back()}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        className="w-full bg-secondary-color hover:bg-red-900"
                                                    >
                                                        Save
                                                    </Button>
                                                </div>
                                            </section>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                            </div>

                        </CardContent>
                    </Card>
                </div>

            </div>

    </section>
)
    ;
}