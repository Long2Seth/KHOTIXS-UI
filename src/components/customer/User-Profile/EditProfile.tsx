'use client';
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import Image from "next/image";

type ProfileType = {
    id: string;
    username: string;
    fullName: string;
    gender: string;
    bio: string;
    dob: string;
    phoneNumber: string;
    address: string;
    avatar: string;
    status: number;
    position: string;
    email: string;
    businessName: string;
};

type EditProfileProps = {
    profile: ProfileType;
};

export default function EditProfile({ profile }: EditProfileProps) {
    const [formData, setFormData] = useState<ProfileType>(profile);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`/user-profile/api/v1/user-profiles/${formData.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    gender: formData.gender,
                    dob: formData.dob,
                    phoneNumber: formData.phoneNumber,
                    address: formData.address,
                    avatar: formData.avatar,
                    position: formData.position,
                    businessName: formData.businessName,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            // Handle successful update (e.g., show a success message)
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle error (e.g., show an error message)
        }
    };

    const handleCancel = () => {
        setFormData(profile); // Reset form data to initial profile data
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({ ...prevData, avatar: reader.result as string }));
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
                    >
                        EDIT
                    </Button>
                </DialogTrigger>
                <DialogContent
                    className="sm:max-w-[440px] md:max-w-[700px] dark:border-0 bg-secondary-color-text dark:bg-khotixs-background-dark rounded-[6px]"
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
                                        src={formData.avatar}
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
                                        htmlFor="fullName"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Full Name <span className="text-label-paid">*</span>
                                    </Label>
                                    <Input
                                        id="fullName"
                                        value={formData.fullName}
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
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="gender"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Gender <span className="text-label-paid">*</span>
                                    </Label>
                                    <Input
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className="border border-light-border-color rounded-[6px] text-base md:text-lg focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="businessName"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        Business Name <span className="text-label-paid">*</span>
                                    </Label>
                                    <Input
                                        id="businessName"
                                        value={formData.businessName}
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
                                    value={formData.bio}
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