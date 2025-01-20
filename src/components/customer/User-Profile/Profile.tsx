"use client";
import { CgProfile } from "react-icons/cg";
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
import { Camera, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NavbarMenuComponent from "@/components/customer/User-Profile/navbarMenuComponent";

export default function Profile() {
    const [image, setImage] = useState<string>("/cher-chhaya.png");
    const [profiles, setProfiles] = useState([
        {
            username: "PHAL SOPHANMAI",
            position: "Team Manager",
            address: "24, Street 562, Sangkat Boeung, Kak I, Khan Toul Kork, Phnom Penh",
            description: "ផ្តល់វិញ្ញាបនបត្រទទួលស្គាល់គុណភាព ផ្តល់វិញ្ញាបនបត្រ ជាភាពិកភាពដល់ STING MUSICVERSE សម្រាប់ចាក់ ការប្រគំតន្ត្រី THE Q RISE OF THE QUEEN - AOK SOKUNKANHA",
        },
    ]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState(profiles[0]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
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

    const handleEditClick = (index: number) => {
        setEditIndex(index);
        setFormData(profiles[index]);
        setIsDialogOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSave = () => {
        if (editIndex !== null) {
            const updatedProfiles = [...profiles];
            updatedProfiles[editIndex] = formData;
            setProfiles(updatedProfiles);
            setEditIndex(null);
            setIsDialogOpen(false);
        }
    };

    const handleCancel = () => {
        setEditIndex(null);
        setIsDialogOpen(false);
    };

    return (
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            <NavbarMenuComponent />
            <div className="w-full max-w-[1100px] mx-auto py-4">
                <h1 className="w-full text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text py-5">MY PROFILE</h1>

                <div className="w-full bg-white p-5 rounded-[6px] flex flex-col md:flex-row justify-start items-center md:items-start gap-5 dark:backdrop-blur dark:bg-opacity-5">
                    {/* Profile Image Section */}
                    <div className="relative w-[170px] rounded-[6px] border-4 border-white m-1">
                        <div
                            onClick={handleImageClick}
                            className="relative cursor-pointer aspect-square overflow-hidden rounded-[6px]"
                        >
                            <Image
                                src={image}
                                alt="Profile"
                                fill
                                className="object-cover rounded-[6px]"
                            />
                        </div>
                    </div>

                    <Card className="w-full md:w-[897px]">
                        <CardContent>
                            <div className="flex md:flex-row flex-col gap-6">
                                {/* Profile Details Section */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2">
                                    <div className="flex items-start gap-2 col-span-1">
                                        <CgProfile className="w-5 h-5 mt-1 text-gray-400" />
                                        <div className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300">Username</div>
                                    </div>
                                    <div className="col-span-3">
                                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-dark-description-color">{profiles[0].username}</p>
                                    </div>

                                    <div className="flex items-start gap-2 col-span-1">
                                        <MdOutlineWorkOutline className="w-5 h-5 mt-1 text-gray-400" />
                                        <div className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300">Position</div>
                                    </div>
                                    <div className="col-span-3">
                                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-dark-description-color">{profiles[0].position}</p>
                                    </div>


                                    <div className="flex items-start gap-2 col-span-1">
                                        <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                                        <div className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300">Address</div>
                                    </div>
                                    <div className="col-span-3">
                                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-dark-description-color">{profiles[0].address}</p>
                                    </div>

                                    <div className="flex items-start gap-2 col-span-1">
                                        <PiNotePencilLight className="w-5 h-5 mt-1 text-gray-400" />
                                        <div className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300">Description</div>
                                    </div>
                                    <div className="font-medium text-sm col-span-3">
                                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-dark-description-color">{profiles[0].description}</p>
                                    </div>
                                </div>
                                <div>
                                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                        <DialogTrigger asChild>
                                            <Button
                                                type="submit"
                                                className="w-full text-white bg-primary-color hover:bg-primary-color/80 dark:text-secondary-color-text"
                                                onClick={() => handleEditClick(0)}
                                            >
                                                EDIT
                                            </Button>
                                        </DialogTrigger>

                                        <DialogContent
                                            className="sm:max-w-[440px] md:max-w-[600px] dark:border-0 bg-secondary-color-text dark:bg-khotixs-background-dark rounded-[6px]"
                                        >
                                            <DialogHeader>
                                                <DialogTitle className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color dark:bg-khotixs-background-dark">EDIT PROFILE</DialogTitle>
                                                <DialogDescription className="border-[1px]"></DialogDescription>
                                            </DialogHeader>
                                            <div className="flex flex-col space-y-4 rounded-[5px]">
                                                <div className="flex items-start space-x-6">
                                                    <div className="relative w-[235px] rounded-lg border-2 border-white shadow-lg">
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
                                                            <Camera className="h-6 w-6 text-gray-600" />
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
                                                    <div className="w-full">
                                                        <div>
                                                            <Label
                                                                htmlFor="username"
                                                                className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                                            >
                                                                Username <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input
                                                                id="username"
                                                                value={formData.username}
                                                                onChange={handleInputChange}
                                                                className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="text-label-text-description py-[15px]">
                                                            <Label
                                                                htmlFor="position"
                                                                className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                                            >
                                                                Position <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input
                                                                id="position"
                                                                value={formData.position}
                                                                onChange={handleInputChange}
                                                                className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-label-text-description">

                                                    <div className="items-center">
                                                        <Label
                                                            htmlFor="address"
                                                            className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                                        >
                                                            Address <span className="text-label-paid">*</span>
                                                        </Label>
                                                        <Input
                                                            id="address"
                                                            value={formData.address}
                                                            onChange={handleInputChange}
                                                            className="border placeholder:text-gray-300 border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <Label
                                                            htmlFor="description"
                                                            className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                                        >
                                                            Description <span className="text-label-paid">*</span>
                                                        </Label>
                                                        <textarea
                                                            id="description"
                                                            value={formData.description}
                                                            onChange={handleInputChange}
                                                            className="p-2 text-lg border border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <section>
                                                <div className="flex gap-[10px] pt-[10px]">
                                                    <Button
                                                        className="w-full bg-white border hover:text-white hover:bg-red-500 border-red-600 dark:hover:bg-red-500 dark:bg-khotixs-background-dark border-solid text-red-500"
                                                        onClick={handleCancel}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        className="w-full text-white bg-primary-color hover:bg-primary-color hover:bg-primary-color/80 dark:text-secondary-color-text"
                                                        onClick={handleSave}
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