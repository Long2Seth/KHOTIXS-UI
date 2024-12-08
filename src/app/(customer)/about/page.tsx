import * as React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { LuTarget } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { MemberData, MentorData } from "@/lib/customer/aboutUs";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    IoLogoGithub,
    FaFacebook,
    FaTelegram,
    AiFillGoogleCircle,
};

export default function About() {
    return (
        <main className="flex flex-col dark:bg-khotixs-background-dark">
            {/* Hero section */}
            <section className="relative h-[400px] xl:h-[600px] w-full overflow-x-hidden ">
                <div
                    className="absolute bg-primary-color h-[400px] xl:h-[600px] w-[520px] rounded-bl-[100%] left-[-200px] overflow-x-hidden ">

                </div>
                <div className="absolute bg-primary-color h-[400px] xl:h-[600px] w-[1600px] left-[300px]">
                    <h1 className="absolute mt-[100px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[10px] z-10 text-secondary-color-text text-2xl xl:text-5xl font-semibold">
                        ABOUT US
                    </h1>
                    <p className="absolute mt-[140px] left-[-230px] sm:left-[-180px] md:left-[-130px] md:max-w-[350px] xl:left-[30px] xl:top-[30px] xl:max-w-[400px]  max-w-[250px] text-md md:text-lg xl:text-2xl text-white my-10">
                        We’re here to help! Whether you have a question about your booking, need assistance, or want to
                        share feedback, the KHOTIXS team is ready to assist you.
                    </p>
                </div>
            </section>

            <section className="w-full h-auto my-20 text-secondary-color dark:text-secondary-color-text">

                <section className="flex flex-col justify-center items-center gap-[20px] ">
                    <div className="flex flex-col justify-center items-center px-5 ">
                        <h1 className=" text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase max-w-[350px] xl:max-w-full text-center">
                            Welcome To Our Website
                        </h1>
                        <hr className="w-[160px] h-2 bg-primary-color hidden sm:block dark:bg-white"/>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase my-[20px]">
                            KHOTIXS
                        </h1>
                        <p className="text-center max-w-[350px] px-5 text-md xl:text-xl text-primary-color-text md:max-w-[700px]   md:mx-[120px] dark:text-gray-200">
                            Welcome to KHOTIXS – Cambodia’s trusted platform for effortless ticket booking and event
                            management. Whether you’re looking to book tickets for concerts, sports events, or cultural
                            activities, or you’re an event organizer seeking to reach a broader audience, KHOTIXS is
                            here to bridge the gap. Our platform is designed to make the entire booking process simple,
                            fast, and reliable. With KHOTIXS, you can explore upcoming events, secure tickets, and
                            connect with the latest happenings in Cambodia,
                            all in one place.
                        </p>
                    </div>
                </section>
            </section>


            <section className=" container mx-auto flex justify-center w-full h-auto text-secondary-color dark:text-secondary-color-text ">

                <section
                    className="grid justify-center w-full gap-5 grid-cols-1 max-w-[350px] px-5 md:grid-cols-2 md:max-w-full md:px-[40px] ">

                    <section
                        className="bg-secondary-color-text flex flex-col w-full justify-center text-center max-w-full px-10 py-10 rounded-[5px] gap-y-5  md:max-w-[460px] lg:max-w-full dark:bg-secondary-color">
                        {/* Icon */}
                        <LuTarget className=" w-full h-[70px] dark:text-secondary-color-text"/>
                        {/* Title */}
                        <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase">
                            Our Mission
                        </h1>
                        {/* Description */}
                        <p className="text-center px-[15px] text-md xl:text-xl text-primary-color-text dark:text-secondary-color-text">
                            Our mission is to empower individuals and organizations by providing a seamless,
                            user-friendly ticketing solution that connects event organizers with their audiences. We aim
                            to make every
                            event accessible, every booking easy, and every experience unforgettable.
                        </p>
                    </section>
                    <section
                        className="bg-white text-center max-w-full flex flex-col justify-center px-10 py-10 rounded-[5px] gap-y-5 md:max-w-[460px] lg:max-w-full dark:bg-secondary-color">
                        {/* Icon */}
                        <MdRemoveRedEye className="w-full h-[70px] dark:text-secondary-color-text"/>
                        {/* Title */}
                        <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase">
                            OUR VISION
                        </h1>
                        {/* Description */}
                        <p className="text-center px-[15px] text-md xl:text-xl text-primary-color-text dark:text-secondary-color-text">
                            Our vision is to become the leading online ticketing platform in Cambodia, fostering a
                            thriving events ecosystem where people can discover, participate in, and celebrate the
                            vibrant
                            culture and creativity of the nation. We envision a future where KHOTIXXS is the go-to
                            platform for
                            both customers and event organizers across the region.
                        </p>
                    </section>

                </section>
            </section>

            <section
                className="container mx-auto w-full h-auto my-20 text-secondary-color dark:text-secondary-color-text">
                <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase text-center my-[20px]">
                    OUR MENTOR
                </h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-5 px-5 ">
                    {MentorData.map((mentor) => (
                        <div className="flex flex-col justify-center items-center " key={mentor.name}>
                            <p className="text-[12px] md:text-lg xl:text-2xl font-semibold uppercase my-[8px] ">
                                {mentor.name}
                            </p>
                            <div className="flex gap-[5px] justify-center items-center ">
                                <div
                                    className="w-[120px] h-[120px] rounded-[5px] md:w-[140px] md:h-[140px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${mentor.image})` }}
                                />
                                <div className="max-w-[60%] flex flex-col text-center">
                                    <ul className="flex flex-col gap-2">
                                        {mentor.info?.map((link, index) => (
                                            <a href={link.link} target="_blank" rel="noopener noreferrer" key={index}>
                                                <li className="flex items-center">
                                                    {React.createElement(iconMap[link.icon], {
                                                        className: "w-[22px] h-[22px] md:w-[30px] md:h-[30px]",
                                                    })}
                                                    <p className="bg-gray-200 text-start mx-[2px] px-[2px] w-[70%] rounded-[5px] text-[10px] line-clamp-1 md:text-sm dark:bg-secondary-color dark:text-gray-200">
                                                        {link.link}
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
                className="container mx-auto w-full h-auto text-secondary-color dark:text-secondary-color-text">
                <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase text-center my-[20px]">
                    OUR MEMBER
                </h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full gap-5 px-5 ">
                    {MemberData.map((mentor) => (
                        <div className="flex flex-col justify-center items-center " key={mentor.name}>
                            <p className="text-[12px] md:text-lg xl:text-2xl font-semibold uppercase my-[8px] ">
                                {mentor.name}
                            </p>
                            <div className="flex gap-[5px] justify-center items-center ">
                                <div
                                    className="w-[120px] h-[120px] rounded-[5px] md:w-[140px] md:h-[140px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${mentor.image})` }}

                                />
                                <div className=" max-w-[60%] lg:max-w-[40%] xl:max-w-[60%] flex flex-col text-center">
                                    <ul className="flex flex-col gap-2">
                                        {mentor.info?.map((link, index) => (
                                            <a href={link.link} target="_blank" rel="noopener noreferrer" key={index}>
                                                <li className="flex items-center">
                                                    {React.createElement(iconMap[link.icon], {
                                                        className: "w-[22px] h-[22px] md:w-[30px] md:h-[30px] ",
                                                    })}
                                                    <p className="bg-gray-200 text-start mx-[2px] px-[2px] w-[70%] rounded-[5px] text-[10px] line-clamp-1 md:text-sm dark:bg-secondary-color dark:text-gray-200">
                                                        {link.link}
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
        </main>
    );
}