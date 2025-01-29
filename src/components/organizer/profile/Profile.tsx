"use client";
import {useEffect, useState} from "react";
import {FaRegUser} from "react-icons/fa";
import {RiCalendarScheduleLine} from "react-icons/ri";
import {PiNotePencilBold, PiPhoneCallBold} from "react-icons/pi";
import {BsPostcard} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import {LuBriefcaseBusiness} from "react-icons/lu";
import {Card, CardContent} from "@/components/ui/card";
import {MapPin} from "lucide-react";
import Image from "next/image";
import EditProfile from "@/components/customer/User-Profile/EditProfile";
import {ProfileComponentSkeleton} from "@/components/customer/User-Profile/user/ProfileComponentSkeleton";
import {UserProfileType} from "@/lib/types/customer/userProfile";

type PropType = {
    id : string;
}

export default function ProfileComponent({id}: PropType) {
    const [profile, setProfile] = useState<UserProfileType | null>(null);

    useEffect(() => {
        const fetchAdminProfile = async () => {
            try {
                const response = await fetch(`/user-profile/api/v1/user-profiles/${id}`);
                if (response.ok) {
                    const data: UserProfileType = await response.json();
                    setProfile(data);
                }
            } catch (err) {
                console.error("Error fetching organizer profile:", err);
            }
        };

        fetchAdminProfile();
    }, [id]);


    if (!profile) {
        return <div><ProfileComponentSkeleton/></div>;
    }

    const fields = [
        {icon: HiOutlineMailOpen, label: "Email", value: profile.email},
    ];

    const fieldsbio = [
        {icon: LuBriefcaseBusiness, label: "Business", value: profile.businessName},
        {icon: PiNotePencilBold, label: "Bio", value: profile.bio},
    ]

    const fieldsinfo = [
        {icon: FaRegUser, label: "Gender", value: profile.gender},
        {icon: MapPin, label: "Address", value: profile.address},
        {icon: BsPostcard, label: "Position", value: profile.position},
        {icon: RiCalendarScheduleLine, label: "Birth Date", value: profile.dob}
    ];

    const fieldscontact = [
        {icon: PiPhoneCallBold, label: "Phone Number", value: profile.phoneNumber},
    ];

    return (
        <section className="container lg:max-w-[50%] mx-auto my-10 px-4">
            <Card className="w-full md:p-10 p-4 rounded-[6px] bg-white dark:backdrop-blur dark:bg-opacity-5">
                <CardContent className="w-full relative flex md:flex-row flex-col justify-between">
                    <section className="lg:max-w-[80%] items-start justify-center">
                        <div
                            className="relative w-44 rounded-full border-4 border-gray-200 dark:border-white">
                            <div className="aspect-square shadow-2xl rounded-full overflow-hidden">
                                <Image
                                    unoptimized
                                    src={profile.avatar}
                                    alt="Profile"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <h1 className="mt-4 text-primary-color text-lg md:text-xl xl:text-2xl font-bold dark:text-secondary-color-text uppercase">
                            HELLO, I&#39;M {profile.fullName}
                        </h1>
                        {fields.map((field, index) => (
                            <div key={index}>
                                <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-white">{field.value}</p>
                            </div>
                        ))}
                    </section>
                    <section className="absolute items-center right-0 justify-center">
                        <EditProfile
                            profile={profile}
                        />
                    </section>
                </CardContent>
            </Card>
            <section
                className="bg-white md:p-10 p-4 my-4 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <h2 className="text-primary-color mb-2 text-lg md:text-xl font-bold dark:text-secondary-color-text uppercase">
                    Information
                </h2>
                {fieldsinfo.map((field, index) => (
                    <div className="flex items-center mt-1" key={index}>
                        <div className="flex items-center gap-2 min-w-[170px]">
                            <field.icon className="w-8 h-8 bg-primary-color p-2 rounded-[6px] mt-1 text-white"/>
                            <div
                                className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-white">{field.label}</div>
                        </div>
                        <p className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-white min-w-[50px]">:</p>
                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-white">{field.value}</p>
                    </div>
                ))}
            </section>
            <section
                className="bg-white md:p-10 p-4 my-4 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <h2 className="text-primary-color mb-2 text-lg md:text-xl font-bold dark:text-secondary-color-text uppercase">
                    Bio
                </h2>
                {fieldsbio.map((field, index) => (
                    <div className="flex items-center mt-1" key={index}>
                        <div className="flex items-center gap-2 min-w-[170px]">
                            <field.icon className="w-8 h-8 bg-primary-color p-2 rounded-[6px] mt-1 text-white"/>
                            <div
                                className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-white">{field.label}</div>
                        </div>
                        <p className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-white min-w-[50px]">:</p>
                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-white">{field.value}</p>
                    </div>
                ))}
            </section>
            <section
                className="bg-white md:p-10 p-4 my-4 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <h2 className="text-primary-color mb-2 text-lg md:text-xl font-bold dark:text-secondary-color-text uppercase">
                    Contact Information
                </h2>
                {fieldscontact.map((field, index) => (
                    <div className="flex items-center mt-1" key={index}>
                        <div className="flex items-center gap-2 min-w-[170px]">
                            <field.icon className="w-8 h-8 bg-primary-color p-2 rounded-[6px] mt-1 text-white"/>
                            <div
                                className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-white">{field.label}</div>
                        </div>
                        <p className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-white min-w-[50px]">:</p>
                        <p className="text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-white">{field.value}</p>
                    </div>
                ))}
            </section>
        </section>
    );
}