'use client'
import React from 'react';
import {useEffect, useState} from "react";
import {ContactSkeletonComponent} from "@/components/customer/contact/ContactSkeletonComponent";
import {GrLocation} from "react-icons/gr";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {Input} from "@/components/ui/input";


export default function ContactUsComponent() {
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
                isLoading ? <ContactSkeletonComponent/> :
                    <section className=" flex flex-col space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-[80px] xl:mb-[100px] bg-khotixs-background-white dark:bg-khotixs-background-dark ">
                        {/* Hero section */}
                        <section className="relative h-[400px] w-full overflow-x-hidden xl:h-[600px]">
                            <div
                                className="absolute bg-primary-color h-[400px] w-[520px] rounded-bl-[100%] left-[-200px] overflow-x-hidden xl:h-[600px]"></div>
                            <div className="absolute bg-primary-color h-[400px] w-[1600px] left-[300px] xl:h-[600px]">
                                <h1 className="absolute text-secondary-color-text  text-lg md:text-2xl xl:text-4xl font-bold mt-[100px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[10px] z-10">
                                    CONTACT US
                                </h1>
                                <p className="absolute text-base md:text-lg xl:text-xl text-white my-10 mt-[140px] max-w-[250px] text-md left-[-230px] sm:left-[-180px] md:left-[-130px] md:max-w-[350px] xl:left-[30px] xl:top-[30px] xl:max-w-[400px] dark:text-white dark:my-10 dark:mt-[140px] dark:max-w-[250px] dark:text-md dark:left-[-230px] dark:sm:left-[-180px] dark:md:left-[-130px] dark:md:max-w-[350px] dark:md:text-lg dark:xl:left-[30px] dark:xl:top-[30px] dark:xl:max-w-[400px] dark:xl:text-2xl">
                                    We’re here to help! Whether you have a question about your booking, need assistance,
                                    or want to
                                    share feedback, the KHOTIXS team is ready to assist you.
                                </p>
                            </div>
                        </section>

                        {/* Contact Info and Form */}
                        <section
                            className="container mx-auto w-full h-auto text-primary-color-text dark:text-secondary-color-text">
                            <div className="grid grid-cols-1 gap-[100px] w-full md:grid-cols-2 px-[24px]">
                                {/* Left Section: Contact Information */}
                                <div className="flex flex-col gap-8 text-center">
                                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase w-full text-center dark:text-white">
                                        OUR CONTACT
                                    </h1>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl text-start px-3 dark:text-dark-description-color ">
                                        Looking for more information or need assistance? Our friendly team is here to
                                        help. Reach
                                        out to us by filling out the contact form below. We&apos;ll be in touch shortly.
                                    </p>
                                    <div className="flex flex-col gap-5 text-lg">
                                        <div
                                            className="flex items-center gap-4 bg-white px-5 py-2 rounded-[5px] dark:bg-khotixs-background-dark dark:border dark:border-secondary-color-text">
                                            <GrLocation className="w-[30px] h-[30px]"/>
                                            <div className="text-start">
                                                <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                                    Location
                                                </h3>
                                                <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                                    No. 24, St 562, Sangkat Boeung Kak I, Khan Toul Kork, Phnom Penh.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 bg-white px-5 py-2 rounded-[5px] dark:bg-khotixs-background-dark dark:border dark:border-secondary-color-text">
                                            <FiPhone className="w-[30px] h-[30px]"/>
                                            <div className="text-start">
                                                <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                                    Phone
                                                </h3>
                                                <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">(+855)
                                                    95 990 910</p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 bg-white px-5 py-2 rounded-[5px] dark:bg-khotixs-background-dark dark:border dark:border-secondary-color-text">
                                            <HiOutlineMail className="w-[30px] h-[30px]"/>
                                            <div className="text-start">
                                                <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                                    Email
                                                </h3>
                                                <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">inform.service@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section: Contact Form */}
                                <div className="flex flex-col gap-8 w-full text-center">
                                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase max-w-[350px] xl:max-w-full text-center dark:text-white">
                                        WRITE A MESSAGE
                                    </h1>
                                    <p className="text-description-color text-base md:text-lg xl:text-xl text-start dark:text-dark-description-color">
                                        Please use this space to share your message, questions, or specific requests.
                                        We&apos;ll do
                                        our best to respond promptly.
                                    </p>
                                    <div
                                        className="p-5 xl:p-20 text-start rounded-[5px] bg-white dark:bg-khotixs-background-dark dark:border-[1px] dark:border-white">
                                        <form className="flex flex-col gap-4">
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="name"
                                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                                    Name <span className="text-red-500">*</span>
                                                </label>
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    placeholder="Name"
                                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="email"
                                                       className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="message"
                                                       className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                                    Message <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    placeholder="Message"
                                                    className="p-2 text-lg border border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-primary-color text-white text-lg py-2 px-4 rounded-[5px] hover:bg-primary-color-dark transition"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Location Section */}
                        <section
                            className="container mx-auto w-full text-primary-color-text dark:text-secondary-color-text space-y-[30px] ">
                            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase w-[300px] text-center mx-auto dark:text-white">
                                OUR LOCATION
                            </h1>
                            <div className="m-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6314046843904!2d104.89920651123596!3d11.578259843843679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sus!4v1733450750727!5m2!1sen!2sus"
                                    style={{border: 0, height: '600px', width: '100%'}}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </section>
                    </section>
            }
        </>

    )
}