"use client";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
// import { IoSettingsOutline } from "react-icons/io5";
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
import {Camera, Mail, MapPin, Phone, Settings} from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

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

export default function Profile() {
    const [image, setImage] = useState<string>("/placeholder.svg");
    const fileInputRef = useRef<HTMLInputElement>(null);

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
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            <NavMenu/>
            <div className="w-full max-w-[1200px] mx-auto py-4">
                <h1 className="w-full text-3xl font-bold text-[#4A0635] mb-6 md:text-start text-center">MY PROFILE</h1>
                <div className="w-full flex flex-col md:flex-row justify-start items-center md:items-start gap-6">
                    {/* Profile Image Section */}
                    <div className="relative w-[170px] rounded-lg border-4 border-white shadow-lg">
                    <div
                            onClick={handleImageClick}
                            className="relative cursor-pointer aspect-square overflow-hidden rounded-lg"
                        >
                            <Image
                                src="/cher-chhaya.png"
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
                                        <div>24, Street 562, Sangkat Boeung, Kak I, Khan Toul Kork, Phnom Penh</div>
                                    </div>

                                    <div className="flex items-start gap-2 col-span-1">
                                        <PiNotePencilLight className="w-5 h-5 mt-1 text-gray-500"/>
                                        <div className="text-sm text-gray-500">Description</div>
                                    </div>
                                    <div className="font-medium text-sm col-span-3">
                                        <div>ផ្តល់វិញ្ញាបនបត្រទទួលស្គាល់គុណភាព ផ្តល់វិញ្ញាបនបត្រ ជាភាពិកភាពដល់ STING
                                            MUSICVERSE សម្រាប់ចាក់ ការប្រគំតន្ត្រី THE Q RISE OF THE QUEEN - AOK
                                            SOKUNKANHA
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                type="submit"
                                                className="w-full bg-primary-color hover:bg-red-900 dark:text-secondary-color-text"
                                            >
                                                EDIT
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent
                                            className="sm:max-w-[440px] bg-secondary-color-text dark:bg-khotixs-background-dark">
                                            <DialogHeader>
                                                <DialogTitle className="dark:bg-khotixs-background-dark">EDIT
                                                    PROFILE</DialogTitle>
                                                <DialogDescription className="border-[1px]"></DialogDescription>
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
                                                                src="/cher-chhaya.png"
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
                                                                Name <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input
                                                                id="name"
                                                                defaultValue="Pedro Duarte"
                                                                className="max-w-[300px] text-label-text-description dark:bg-khotixs-background-dark"
                                                            />
                                                        </div>
                                                        <div className="text-label-text-description py-[15px]">
                                                            <Label
                                                                htmlFor="username"
                                                                className="text-sm font-medium dark:bg-khotixs-background-dark"
                                                            >
                                                                Username <span className="text-label-paid">*</span>
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
                                                            Location <span className="text-label-paid">*</span>
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
                                                            Description <span className="text-label-paid">*</span>
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
                                                        className="w-full bg-primary-color hover:bg-red-900 dark:text-secondary-color-text"
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
    );
}