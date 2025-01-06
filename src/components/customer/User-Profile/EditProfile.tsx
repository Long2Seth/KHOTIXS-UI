'use client';
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import Image from "next/image";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

type ProfileType = {
    fullName: string;
    position: string;
    phoneNumber: string;
    address: string;
    description: string;
    gender: string;
    dob: string;
    email: string;
    businessName: string;
    avatar: string;
};

type EditProfileProps = {
    profile: ProfileType;
};

export default function EditProfile({ profile }: EditProfileProps) {
    const [formData, setFormData] = useState<ProfileType | null>(profile);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => (prevData ? { ...prevData, [id]: value } : null));
    };

    const handleSave = () => {
        // Save logic here
    };

    const handleCancel = () => {
        // Cancel logic here
    };

    const handleEditClick = () => {
        // Edit click logic here
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => (prevData ? { ...prevData, avatar: reader.result as string } : null));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        className="w-full text-white bg-primary-color hover:bg-primary-color/80 dark:text-secondary-color-text"
                        onClick={handleEditClick}
                    >
                        EDIT
                    </Button>
                </DialogTrigger>
                <DialogContent
                    className="sm:max-w-[440px] md:max-w-[680px] dark:border-0 bg-secondary-color-text dark:bg-khotixs-background-dark rounded-[6px]"
                >
                    <DialogHeader>
                        <DialogTitle
                            className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color dark:bg-khotixs-background-dark"
                        >
                            EDIT PROFILE
                        </DialogTitle>
                        <DialogDescription className="border-[1px]"></DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col space-y-4 rounded-[5px]">

                        <div className="flex items-start space-x-6">

                            <div className="relative w-full rounded-lg border-2 border-white shadow-lg">
                                <div
                                    onClick={handleImageClick}
                                    className="relative cursor-pointer aspect-square overflow-hidden rounded-[6px]"
                                >
                                    <Image
                                        src={formData?.avatar || ""}
                                        alt="Profile"
                                        fill
                                        className="object-cover rounded-[6px]"
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

                            <div className="w-full space-y-2">

                                <div>
                                    <Label
                                        htmlFor="username"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Username <span className="text-label-paid">*</span>
                                    </Label>
                                    <Input
                                        id="username"
                                        value={formData?.fullName || ""}
                                        onChange={handleInputChange}
                                        className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                    />
                                </div>


                                <div>
                                    <Label
                                        htmlFor="position"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Position <span className="text-label-paid">*</span>
                                    </Label>
                                    <Input
                                        id="position"
                                        value={formData?.position || ""}
                                        onChange={handleInputChange}
                                        className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                    />
                                </div>


                                <div>
                                    <Label
                                        htmlFor="username"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Gender <span className="text-label-paid">*</span>
                                    </Label>
                                    <Select>
                                        <SelectTrigger
                                            className={`w-full border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text `}>
                                            <SelectValue placeholder="Gender"/>
                                        </SelectTrigger>
                                        <SelectContent
                                            className=" w-full border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                            <SelectItem value="enable">Male</SelectItem>
                                            <SelectItem value="disable">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>


                                <div className="text-label-text-description">
                                    <Label
                                        htmlFor="position"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Phone Number <span className="text-label-paid">*</span>
                                    </Label>
                                    <Input
                                        id="position"
                                        value={formData?.phoneNumber || ""}
                                        onChange={handleInputChange}
                                        className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="text-label-text-description space-y-2">
                            <div className="items-center">
                                <Label
                                    htmlFor="address"
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                >
                                    Address <span className="text-label-paid">*</span>
                                </Label>
                                <Input
                                    id="address"
                                    value={formData?.address || ""}
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
                                    value={formData?.description || ""}
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
    );
}