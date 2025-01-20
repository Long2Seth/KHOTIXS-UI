'use client';

import { FaRegUser } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { PiPhoneCallLight } from "react-icons/pi";
import { BsPostcard } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiNotePencilLight } from "react-icons/pi";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import EditProfile from "@/components/customer/user_profile/EditProfile";
import { ProfileComponentSkeleton } from "@/components/customer/user_profile/user/ProfileComponentSkeleton";

type Profile = {
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
    username: string;
};

type ProfileComponentProps = {
    userProfile: Profile;
};

export default function ProfileComponent({ userProfile }: ProfileComponentProps) {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string | null>(null);

    const placeholderImage: string = "http://khotixs.devkh.asia/asset/api/v1/files/view/64bd74e3-64ae-4d4a-a390-43c9224a007d.png"

    useEffect(() => {
        const fetchAdminProfile = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/user-profile/api/v1/user-profiles/${userProfile.username}`
                );
                if (response.ok) {
                    const data: Profile = await response.json();
                    setProfile(data);
                } else {
                    setError("Failed to fetch profile data.");
                }
            } catch (err) {
                console.error("Error fetching admin profile:", err);
                setError("An error occurred while fetching the profile.");
            }
        };

        fetchAdminProfile();
    }, [userProfile.email, userProfile.username]);

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!profile) {
        return <ProfileComponentSkeleton />;
    }

    const fields = [
        { icon: <HiOutlineMailOpen className="w-5 h-5 mt-1 text-gray-400" />, label: "Email", value: profile.email },
        { icon: <FaRegUser className="w-5 h-5 mt-1 text-gray-400" />, label: "Gender", value: profile.gender },
        { icon: <MapPin className="w-5 h-5 mt-1 text-gray-400" />, label: "Address", value: profile.address },
        { icon: <BsPostcard className="w-5 h-5 mt-1 text-gray-400" />, label: "Position", value: profile.position },
        { icon: <LuBriefcaseBusiness className="w-5 h-5 mt-1 text-gray-400" />, label: "Business", value: profile.businessName },
        { icon: <RiCalendarScheduleLine className="w-5 h-5 mt-1 text-gray-400" />, label: "Birth Date", value: profile.dob },
        { icon: <PiNotePencilLight className="w-5 h-5 mt-1 text-gray-400" />, label: "Description", value: profile.description },
        { icon: <PiPhoneCallLight className="w-5 h-5 mt-1 text-gray-400" />, label: "Phone Number", value: profile.phoneNumber },
    ];

    return (
        <section className="container mx-auto px-4">
            <section className="w-full bg-white p-5 rounded-[6px] flex flex-col md:flex-row justify-start items-center md:items-start gap-5 dark:backdrop-blur dark:bg-opacity-5 my-10">
                <Card className="w-full">
                    <CardContent className="w-full flex md:flex-row flex-col justify-between">
                        <section className="lg:max-w-[80%] flex flex-col items-start justify-center">
                            <h1 className="text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text mb-5 uppercase">
                                HELLO, I&#39;M {profile.fullName}
                            </h1>
                            <section className="w-full flex flex-col md:flex-row space-x-6">
                                <div className="relative min-w-[260px] overflow-hidden h-auto rounded-[6px] border-2 border-gray-400 dark:border-white">
                                    <Image
                                        unoptimized
                                        src={profile.avatar ?? placeholderImage}
                                        alt={profile.avatar}
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex flex-col gap-y-2">
                                        {fields.map((field, index) => (
                                            <div className="flex" key={index}>
                                                <div className="flex items-start gap-2 min-w-[170px]">
                                                    {field.icon}
                                                    <div className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300">
                                                        {field.label}
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300 min-w-[50px]">
                                                    :
                                                </p>
                                                <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-dark-description-color">
                                                    {field.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="items-center justify-center">
                            <EditProfile profile={profile} />
                        </section>
                    </CardContent>
                </Card>
            </section>
        </section>
    );
}
