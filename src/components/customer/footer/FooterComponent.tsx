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
                    <footer className="w-full bg-white dark:bg-khotixs-background-dark md:p-10 p-4">


                        {/* Main Footer Section */}
                        <section
                            className="container mx-auto w-full ">

                            <section className="grid md:grid-cols-2 lg:flex justify-between md:gap-10 gap-5">
                                {/* Logo and Description */}
                                <div className="w-auto items-center">
                                    <div className=" w-auto ">
                                        <Link href="#" className="flex items-center">
                                            <Image
                                                width={100}
                                                height={100}
                                                src="/khotixs_logo.png"
                                                alt="Khotixs Logo"
                                            />
                                        </Link>
                                        <p className="text-description-color lg:max-w-[400px] dark:text-secondary-color-text text-base md:text-lg xl:text-xl">
                                            Without creating an account, KHOTIXS still allows you to order tickets.
                                            Boost your ticket sales with KHOTIXS—why not give it a try?
                                        </p>
                                    </div>
                                </div>
                                    {/* Event Category */}
                                    <section className="">
                                        <h3 className="text-title-color w-[150px] mb-2 text-xl font-bold dark:text-secondary-color-text  ">Event
                                            Category</h3>
                                        <ul className="space-y-2">
                                            <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                <Link href="/concerts">Concerts</Link>
                                            </li>
                                            <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                <Link href="/technology">Technology</Link>
                                            </li>
                                            <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                <Link href="/conferences">Conferences</Link>
                                            </li>
                                            <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                <Link href="/sports">Sports</Link>
                                            </li>
                                            <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                <Link href="/community">Community</Link>
                                            </li>
                                            <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                <Link href="/general">General</Link>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* Support & Information */}
                                    <div className="w-auto">
                                            <h3 className="text-title-color w-[210px] mb-2 text-xl font-bold dark:text-secondary-color-text  ">Support
                                                & Information</h3>
                                            <ul className="space-y-2">
                                                <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                    <Link href="/how-to-use">How to use?</Link>
                                                </li>
                                                <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                    <Link href="/policy">Policy</Link>
                                                </li>
                                                <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                    <Link href="/contact-us">Contact us</Link>
                                                </li>
                                                <li className="dark:text-secondary-color-text text-description-color text-base md:text-lg xl:text-xl hover:underline cursor-pointer">
                                                    <Link href="/about-us">About us</Link>
                                                </li>
                                            </ul>
                                    </div>

                                {/* Sponsors and Organizer */}
                                <div className="w-auto">
                                    <section className="flex flex-col">
                                        <h3 className="text-title-color text-xl mb-4 font-bold dark:text-secondary-color-text w-[216px] ">
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
                                    </section>
                                    <section>
                                        <h3 className="text-title-color mb-4 text-xl font-bold dark:text-secondary-color-text  ">
                                            Organize By
                                        </h3>
                                            <Image
                                                width={216}
                                                height={100}
                                                src="/CSTAD-LOGO.png"
                                                alt="Organizer Logo"
                                            />
                                    </section>
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