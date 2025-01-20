'use client';
import React from 'react';
import {useEffect, useState} from "react";
import {AboutUsSkeletonComponent} from "@/components/customer/aboutus/AboutUsSkeletonComponent";
import {MdRemoveRedEye} from "react-icons/md";
import {LuTarget} from "react-icons/lu";
import {IoLogoGithub} from "react-icons/io5";
import {FaFacebook} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {AiFillGoogleCircle} from "react-icons/ai";
import {MemberData, MentorData} from "@/lib/customer/aboutUs";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    IoLogoGithub,
    FaFacebook,
    FaTelegram,
    AiFillGoogleCircle,
};
export default function AboutUsComponent() {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {
                isLoading ? <AboutUsSkeletonComponent/> :
                    <section className="space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-[80px] xl:mb-[100px] bg-khotixs-background-white dark:bg-khotixs-background-dark">
                        {/* Hero section */}
                        <section className="relative h-[400px] xl:h-[600px] w-full overflow-x-hidden">

                            <div
                                className="absolute bg-primary-color h-[400px] xl:h-[600px] w-[520px] rounded-bl-[100%] left-[-200px] overflow-x-hidden"></div>
                            <div className="absolute bg-primary-color h-[400px] xl:h-[600px] w-[1600px] left-[300px]">
                                <h1 className="absolute text-secondary-color-text text-2xl font-semibold mt-[100px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[10px] xl:text-5xl z-10">
                                    ABOUT US
                                </h1>
                                <p className="absolute text-white my-10 mt-[140px] max-w-[250px] text-md left-[-230px] sm:left-[-180px] md:left-[-130px] md:max-w-[350px] md:text-lg xl:left-[30px] xl:top-[30px] xl:max-w-[400px] xl:text-2xl dark:text-white dark:my-10 dark:mt-[140px] dark:max-w-[250px] dark:text-md dark:left-[-230px] dark:sm:left-[-180px] dark:md:left-[-130px] dark:md:max-w-[350px] dark:md:text-lg dark:xl:left-[30px] dark:xl:top-[30px] dark:xl:max-w-[400px] dark:xl:text-2xl">
                                    We’re here to help! Whether you have a question about your booking, need assistance,
                                    or want to
                                    share feedback, the KHOTIXS team is ready to assist you.
                                </p>
                            </div>

                        </section>

                        <section className="w-full h-auto text-secondary-color dark:text-secondary-color-text">
                            <section className="flex flex-col justify-center items-center ">
                                <div className="flex flex-col justify-center items-center px-5">
                                    <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase max-w-[350px] xl:max-w-full text-center dark:text-secondary-color-text ">
                                        Welcome To Our Website
                                    </h1>
                                    <hr className="w-[160px] h-2 bg-primary-color hidden sm:block dark:bg-white my-[20px] "/>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase dark:text-secondary-color-text  ">
                                        KHOTIXS
                                    </h1>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl text-center max-w-[350px] px-5 text-md  md:max-w-[700px] md:mx-[120px] dark:text-gray-200 my-[20px]">
                                        Welcome to KHOTIXS – Cambodia’s trusted platform for effortless ticket booking
                                        and event
                                        management. Whether you’re looking to book tickets for concerts, sports events,
                                        or cultural
                                        activities, or you’re an event organizer seeking to reach a broader audience,
                                        KHOTIXS is
                                        here to bridge the gap. Our platform is designed to make the entire booking
                                        process simple,
                                        fast, and reliable. With KHOTIXS, you can explore upcoming events, secure
                                        tickets, and
                                        connect with the latest happenings in Cambodia, all in one place.
                                    </p>
                                </div>
                            </section>

                            <section
                                className="container mx-auto flex justify-center w-full h-auto text-secondary-color dark:text-secondary-color-text">
                                <section
                                    className="grid justify-center w-full gap-5 grid-cols-1 max-w-[350px] px-5 md:grid-cols-2 md:max-w-full md:px-[40px]">
                                    <section
                                        className="bg-secondary-color-text flex flex-col w-full justify-center text-center max-w-full px-10 py-10 rounded-[5px] gap-y-5 md:max-w-[460px] lg:max-w-full dark:bg-secondary-color">
                                        {/* Icon */}
                                        <LuTarget
                                            className="w-full h-[70px] text-title-color dark:text-secondary-color-text"/>
                                        {/* Title */}
                                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase dark:text-secondary-color-text ">
                                            Our Mission
                                        </h1>
                                        {/* Description */}
                                        <p className="text-description-color text-base md:text-lg xl:text-xl text-center dark:text-secondary-color-text">
                                            Our mission is to empower individuals and organizations by providing a
                                            seamless,
                                            user-friendly ticketing solution that connects event organizers with their
                                            audiences. We aim
                                            to make every event accessible, every booking easy, and every experience
                                            unforgettable.
                                        </p>
                                    </section>
                                    <section
                                        className="bg-white text-center max-w-full flex flex-col justify-center px-10 py-10 rounded-[5px] gap-y-5 md:max-w-[460px] lg:max-w-full dark:bg-secondary-color">
                                        {/* Icon */}
                                        <MdRemoveRedEye
                                            className="w-full h-[70px] text-title-color dark:text-secondary-color-text"/>
                                        {/* Title */}
                                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase dark:text-secondary-color-text ">
                                            OUR VISION
                                        </h1>
                                        {/* Description */}
                                        <p className="text-description-color text-base md:text-lg xl:text-xl text-center dark:text-secondary-color-text">
                                            Our vision is to become the leading online ticketing platform in Cambodia,
                                            fostering a
                                            thriving events ecosystem where people can discover, participate in, and
                                            celebrate the
                                            vibrant culture and creativity of the nation. We envision a future where
                                            KHOTIXXS is the
                                            go-to platform for both customers and event organizers across the region.
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>


                        <section
                            className="container overflow-x-hidden mx-auto w-full h-auto text-secondary-color dark:text-secondary-color-text">
                            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase text-center dark:text-secondary-color-text ">
                                OUR MENTORS
                            </h1>
                            <section
                                className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-fullz gap-5 px-5 my-[20px]">
                                {MentorData.map((mentor) => (
                                    <div className="flex flex-col justify-center items-center" key={mentor.name}>
                                        <p className="text-[12px] text-title-color md:text-lg xl:text-2xl font-semibold uppercase my-[8px] dark:text-dark-description-color">
                                            {mentor.name}
                                        </p>
                                        <div className="flex gap-[15px] justify-center items-center">
                                            <div
                                                className="w-[100px] h-[100px] rounded-[5px] lg:w-[130px] lg:h-[130px] bg-cover bg-center"
                                                style={{backgroundImage: `url(${mentor.image})`}}
                                            />

                                            <div className=" w-[190px] sm:w-[180px] lg:w-[260px] flex flex-col text-center ">

                                                <ul className="flex flex-col gap-2 ">

                                                    {mentor.info?.map((link, index) => (
                                                        <a
                                                            href={link.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            key={index}>
                                                            <li className="flex items-center ">
                                                                {React.createElement(iconMap[link.icon], {
                                                                    className: "text-title-color w-[20px] h-[20px] md:w-[26px] md:h-[26px] dark:text-dark-description-color",
                                                                })}
                                                                <p className=" text-start text-description-color  mx-[2px] px-[2px] w-full rounded-[5px] text-[10px] line-clamp-1 md:text-sm  dark:text-gray-200">
                                                                    {link.name}
                                                                </p>
                                                            </li>
                                                        </a>
                                                    ))}

                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </section>
                        </section>


                        <section
                            className="container overflow-x-hidden mx-auto w-full h-auto text-secondary-color dark:text-secondary-color-text">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase text-center my-[20px] dark:text-secondary-color-text ">
                                OUR MEMBERS
                            </h1>
                            <section
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center items-center w-full gap-10 lg:gap-20 px-5">
                                {MemberData.map((mentor) => (
                                    <div
                                        className="flex flex-col justify-center items-center w-[300px] mx-auto sm:w-auto "
                                        key={mentor.name}>
                                        <p className="text-[12px] text-title-color md:text-lg xl:text-2xl font-semibold uppercase my-[8px] dark:text-dark-description-color">
                                            {mentor.name}
                                        </p>
                                        <div className="flex gap-[15px] justify-center items-center">
                                            <div
                                                className=" w-[100px] h-[100px] rounded-[5px] bg-cover bg-center"
                                                style={{backgroundImage: `url(${mentor.image})`}}
                                            />

                                            <div
                                                className="w-[200px] sm:w-[160px] md:w-[210px] flex flex-col text-center">

                                                <ul className="flex flex-col gap-2">

                                                    {mentor.info?.map((link, index) => (
                                                        <a href={link.link} target="_blank" rel="noopener noreferrer"
                                                           key={index}>
                                                            <li className="flex items-center">
                                                                {React.createElement(iconMap[link.icon], {
                                                                    className: "text-title-color w-[20px] h-[20px]  dark:text-dark-description-color",
                                                                })}
                                                                <p className=" text-start text-description-color  mx-[2px] px-[2px] max-w-full rounded-[5px] text-[10px] line-clamp-1 md:text-sm  dark:text-gray-200">
                                                                    {link.name}
                                                                </p>
                                                            </li>
                                                        </a>
                                                    ))}

                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </section>
                        </section>


                    </section>
            }
        </>

    )
}