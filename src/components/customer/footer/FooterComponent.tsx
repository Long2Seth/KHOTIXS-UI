'use client'
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {FooterSkeletonComponent} from "@/components/customer/footer/FooterSkeletonComponent";

export function FooterComponent() {
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
                isLoading ? <FooterSkeletonComponent/> :
                    <footer className=" w-full bg-white dark:bg-khotixs-background-dark p-10 mt-20">


                        {/* Main Footer Section */}
                        <section
                            className="container mx-auto w-full xl:px-10">

                            <section className=" grid md:grid-cols-2 xl:grid-cols-4 justify-center xl:justify-between gap-5">
                                {/* Logo and Description */}
                                <div className=" flex flex-col w-full items-start ">
                                    <div className=" max-w-[300px]">
                                        <Link href="#" className="flex items-center mb-4">
                                            <Image
                                                width={100}
                                                height={100}
                                                src="/khotixs_logo.png"
                                                alt="Khotixs Logo"
                                            />
                                        </Link>
                                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">
                                            Without creating an account, KHOTIXS still allows you to order tickets.
                                            Boost your ticket sales with KHOTIXS—why not give it a try?
                                        </p>
                                    </div>
                                </div>

                                {/* Event Category */}
                                <div className="w-full md:pl-[50px] lg:pl-[0px] xl:ml-[100px] ">
                                    <div className=" w-auto ">
                                        <h3 className="text-title-color text-xl font-bold dark:text-secondary-color-text  my-5">Event
                                            Category</h3>
                                        <ul className="space-y-2 text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                                            <li className="  hover:underline cursor-pointer inline ">
                                                <Link href="/concerts">Concerts</Link>
                                            </li>
                                            <li className="  hover:underline cursor-pointer">
                                                <Link href="/technology">Technology</Link>
                                            </li>
                                            <li className="  hover:underline cursor-pointer ">
                                                <Link href="/conferences">Conferences</Link>
                                            </li>
                                            <li className="  hover:underline cursor-pointer ">
                                                <Link href="/sports">Sports</Link>
                                            </li>
                                            <li className="  hover:underline cursor-pointer ">
                                                <Link href="/community">Community</Link>
                                            </li>
                                            <li className="  hover:underline cursor-pointer ">
                                                <Link href="/general">General</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Support & Information */}
                                <div className="w-full xl:ml-[100px]">
                                    <div className=" w-auto ">
                                        <h3 className="text-title-color text-xl font-bold dark:text-secondary-color-text my-5 ">Support
                                            & Information</h3>
                                        <ul className="space-y-2 text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                                            <li className=" hover:underline cursor-pointer">
                                            <Link href="/how-to-use">How to use?</Link>
                                            </li>
                                            <li className=" hover:underline cursor-pointer">
                                                <Link href="/policy">Policy</Link>
                                            </li>
                                            <li className=" hover:underline cursor-pointer">
                                                <Link href="/contact-us">Contact us</Link>
                                            </li>
                                            <li className=" hover:underline cursor-pointer">
                                                <Link href="/about-us">About us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Sponsors and Organizer */}
                                <div className="w-full flex flex-col md:pl-[50px] lg:pl-[0px] xl:ml-0 xl:items-end my-5">
                                    <div className=" flex flex-col ">
                                        <h3 className="text-title-color text-xl font-bold dark:text-secondary-color-text">
                                            Sponsors By
                                        </h3>
                                        <div className="flex space-x-4 mb-4">
                                            <Image
                                                width={100}
                                                height={100}
                                                src="/MPTG.png"
                                                alt="Sponsor 1 Logo"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                src="/CBRD.png"
                                                alt="Sponsor 2 Logo"
                                            />
                                        </div>
                                    </div>
                                    <div className=" ">
                                        <h3 className="text-title-color text-xl font-bold dark:text-secondary-color-text my-2 ">
                                            Organize By
                                        </h3>
                                        <div>
                                            <Image
                                                width={215}
                                                height={100}
                                                src="/images/iSTAD-logo.png"
                                                alt="Organizer Logo"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </section>


                        </section>

                        {/* Footer Bottom Section */}
                        <section
                            className="w-full font-medium text-lg text-center py-[50px] text-primary-color-text dark:text-secondary-color-text">
                            KHOTIXS © 2024 Institute of Science and Technology Advanced Development | All Rights
                            Reserved
                        </section>
                    </footer>
            }
        </>

    );
}