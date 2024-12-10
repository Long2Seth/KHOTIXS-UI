"use client";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { router } from "next/client";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState,useEffect } from "react";
import {ProfileSkeleton} from "@/components/customer/User-Profile/ProfileSkeleton";

export default function Profile() {
    const [image, setImage] = useState<string>("/placeholder.svg");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isLoading , setIsLoading ] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        },2000);
        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <>
            {
                isLoading ? <ProfileSkeleton/> :
                    <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
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
                        <div className="w-full max-w-[1200px] mx-auto py-4">
                            <h1 className="w-full text-3xl font-bold text-[#4A0635] mb-6 md:text-start text-center">MY
                                PROFILE</h1>
                            <div
                                className="w-full flex flex-col md:flex-row justify-start items-center md:items-start gap-6">
                                {/* Profile Image Section */}
                                <div className="relative w-[170px] rounded-lg border-4 border-white shadow-lg">
                                    <div
                                        onClick={handleImageClick}
                                        className="relative cursor-pointer aspect-square overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src={image}
                                            alt="Profile"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <button
                                        onClick={handleImageClick}
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
                                        aria-label="Upload new image"
                                    >
                                        <Camera className="h-6 w-6 text-gray-600"/>
                                    </button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        aria-label="Image upload input"
                                    />
                                </div>
                                <Card className="w-full md:w-[897px]">
                                    <CardContent className="p-6 dark:bg-khotixs-background-dark">
                                        <div className="flex md:flex-row flex-col gap-6">
                                            {/* Profile Details Section */}
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2">
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
                                                    <div>24, Street 562, Sangkat Boeung, Kak I, Khan Toul Kork, Phnom
                                                        Penh
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-2 col-span-1">
                                                    <PiNotePencilLight className="w-5 h-5 mt-1 text-gray-500"/>
                                                    <div className="text-sm text-gray-500">Description</div>
                                                </div>
                                                <div className="font-medium text-sm col-span-3">
                                                    <div>ផ្តល់វិញ្ញាបនបត្រទទួលស្គាល់គុណភាព ផ្តល់វិញ្ញាបនបត្រ
                                                        ជាភាពិកភាពដល់ STING
                                                        MUSICVERSE សម្រាប់ចាក់ ការប្រគំតន្ត្រី THE Q RISE OF THE QUEEN -
                                                        AOK
                                                        SOKUNKANHA
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button
                                                            type="submit"
                                                            className="w-full bg-secondary-color hover:bg-red-900 dark:text-secondary-color-text"
                                                        >
                                                            EDIT
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent
                                                        className="sm:max-w-[440px] bg-secondary-color-text dark:bg-khotixs-background-dark">
                                                        <DialogHeader>
                                                            <DialogTitle className="dark:bg-khotixs-background-dark">EDIT
                                                                PROFILE</DialogTitle>
                                                            <DialogDescription
                                                                className="border-[1px]"></DialogDescription>
                                                        </DialogHeader>
                                                        <div className="flex flex-col space-y-4 rounded-[5px]">
                                                            <div className="flex items-start space-x-6">
                                                                <div
                                                                    className="relative w-[135px] rounded-lg border-4 border-white shadow-lg">
                                                                    <div
                                                                        onClick={handleImageClick}
                                                                        className="relative cursor-pointer aspect-square overflow-hidden rounded-lg"
                                                                    >
                                                                        <Image
                                                                            src={image}
                                                                            alt="Profile"
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        onClick={handleImageClick}
                                                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
                                                                        aria-label="Upload new image"
                                                                    >
                                                                        <Camera className="h-6 w-6 text-gray-600"/>
                                                                    </button>
                                                                    <input
                                                                        ref={fileInputRef}
                                                                        type="file"
                                                                        accept="image/*"
                                                                        onChange={handleImageChange}
                                                                        className="hidden"
                                                                        aria-label="Image upload input"
                                                                    />
                                                                </div>
                                                                <div className="w-[240px] h-[140px] rounded-[5px]">
                                                                    <div>
                                                                        <Label
                                                                            htmlFor="name"
                                                                            className="text-sm font-medium text-label-text-description dark:bg-khotixs-background-dark"
                                                                        >
                                                                            Name <span
                                                                            className="text-label-paid">*</span>
                                                                        </Label>
                                                                        <Input
                                                                            id="name"
                                                                            defaultValue="Pedro Duarte"
                                                                            className="max-w-[300px] text-label-text-description dark:bg-khotixs-background-dark"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="text-label-text-description py-[15px]">
                                                                        <Label
                                                                            htmlFor="username"
                                                                            className="text-sm font-medium dark:bg-khotixs-background-dark"
                                                                        >
                                                                            Username <span
                                                                            className="text-label-paid">*</span>
                                                                        </Label>
                                                                        <Input
                                                                            id="username"
                                                                            defaultValue="@peduarte"
                                                                            className="max-w-[250px] dark:bg-khotixs-background-dark"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-label-text-description">
                                                                <div className="items-center">
                                                                    <Label
                                                                        htmlFor="name"
                                                                        className="text-right dark:bg-khotixs-background-dark"
                                                                    >
                                                                        Location <span
                                                                        className="text-label-paid">*</span>
                                                                    </Label>
                                                                    <Input
                                                                        id="name"
                                                                        value="Pedro Duarte"
                                                                        className="focus:outline-none col-span-3 dark:bg-khotixs-background-dark"
                                                                    />
                                                                </div>
                                                                <div className="items-center gap-4">
                                                                    <Label
                                                                        htmlFor="username"
                                                                        className="text-right dark:bg-khotixs-background-dark"
                                                                    >
                                                                        Description <span
                                                                        className="text-label-paid">*</span>
                                                                    </Label>
                                                                    <Input
                                                                        id="username"
                                                                        value="ក្តីស្រមៃដែលគ្រប់គ្នាៗចង់ឲកើតមានឡើង ក្តីស្រមៃន���ះបាន"
                                                                        className="w-full h-[120px] justify-start dark:bg-khotixs-background-dark"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <section>
                                                            <div className="flex gap-[10px] pt-[10px]">
                                                                <Button
                                                                    className="w-full bg-white hover:bg-slate-200 dark:text-secondary-color-text dark:bg-khotixs-background-dark text-primary-color-text border-solid border-[1px]"
                                                                    onClick={() => router.back()}
                                                                >
                                                                    Cancel
                                                                </Button>
                                                                <Button
                                                                    type="submit"
                                                                    className="w-full bg-secondary-color hover:bg-red-900 dark:text-secondary-color-text"
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
            }
        </>

    );
}