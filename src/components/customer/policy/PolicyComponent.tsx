/* eslint-disable @next/next/no-img-element */
'use client';
import React from "react";
import {useEffect , useState} from "react";
import {PolicySkeletonComponent} from "@/components/customer/policy/PolicySkeletonComponent";


export default function PolicyComponent (){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            {
                isLoading ? <PolicySkeletonComponent/> :
                    <section className="w-full space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-10 my:mb-[80px] bg-khotixs-background-white dark:bg-khotixs-background-dark">
                        <section className=" flex flex-col gap-5 ">
                            <div className="w-full ">
                                <h1 className="w-full text-center text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase dark:text-secondary-color-text ">
                                    How Can We Assist You With Khotixs?
                                </h1>
                                <p className="text-center text-description-color text-base md:text-lg xl:text-xl dark:text-gray-200  px-[25px]  ">
                                    Whether it’s booking tickets, managing events, or navigating the
                                    platform, we’re here to help!
                                </p>
                            </div>

                            <div className="flex gap-5 flex-col md:flex-row p-5 ">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Privacy Policy */}
                                    <div className=" bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                        <div className="relative flex items-center gap-3 my-2 ">
                                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold mb-2 dark:text-white">
                                                Privacy Policy
                                            </h2>
                                        </div>
                                        <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-gray-200">
                                            We collect necessary data (e.g., name, email, payment info) to
                                            provide services like ticket booking and event discovery. Your
                                            data is protected with encryption and only shared when legally
                                            required or for payment processing.
                                        </p>
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                        <div className=" relative flex items-center gap-3 my-2 ">
                                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold mb-2 dark:text-white">
                                                Responsibilities
                                            </h2>
                                        </div>
                                        <p className="text-description-color text-sm md:text-base xl:text-lg  dark:text-gray-200">
                                            Users must provide accurate information, respect others, and
                                            follow platform guidelines.
                                        </p>
                                    </div>

                                    {/* Security Policy */}
                                    <div className="bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                        <div className=" flex items-center gap-3 my-2 ">
                                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold mb-2 dark:text-white">
                                                Security Policy
                                            </h2>
                                        </div>

                                        <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-gray-200">
                                            All payments are securely processed, and tickets are uniquely
                                            identified to prevent fraud. Report any security concerns to our
                                            support team.
                                        </p>
                                    </div>

                                    {/* Terms of Use */}
                                    <div className="bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                        <div className=" flex items-center gap-3 my-2 ">
                                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold mb-2 dark:text-white">
                                                Terms of Use
                                            </h2>
                                        </div>
                                        <ul className="text-description-color text-sm md:text-base xl:text-lg  dark:text-gray-200 list-disc list-inside space-y-1">
                                            <li>
                                                Users are responsible for account security and compliance with
                                                platform rules.
                                            </li>
                                            <li>
                                                Tickets are subject to event organizer policies for refunds and
                                                transfers.
                                            </li>
                                            <li>
                                                Misuse, such as uploading illegal content or using bots, is
                                                prohibited.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <img
                                    className=" rounded-[6px] hidden lg:block "
                                    src="Privacy-policy.png"
                                    alt="Khotixs"/>
                            </div>
                        </section>
                    </section>
            }
        </>

    )
}