'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import React from "react";
import {motion} from 'framer-motion';
import {RiCheckDoubleLine} from "react-icons/ri";
import { useRouter } from "next/navigation";
import {benefits} from "@/lib/types/customer/benefits";

export default function MerchantsComponent() {
    const router = useRouter();
    return (
        <>
            <section className="grid w-full gap-20 justify-between px-5 md:grid-cols-2 md:max-w-full md:px-[40px]">
                <div className="flex flex-col lg:ml-10 gap-4">
                    <h1 className="lg:text-4xl text-2xl font-bold">Do you Organize Events or
                        Manage a Venue?
                    </h1>
                    <p className="text-lg">Become a KHOTIXS Partner today!</p>
                    <p className="mt-4 text-lg">Take your events and venue management to the next level with KHOTIXS. Join us to access powerful
                        tools for ticket management, booking, and revenue tracking, and reach a wider audience through
                        our platform.</p>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => router.push("/contact-us")} className="rounded-[6px] hover:bg-primary-color/80 text-primary-color hover:text-white text-lg bg-primary-color/10 border border-primary-color w-32">Contact us</Button>
                        <Button
                            onClick={() => router.push("/partner-register")} className="rounded-[6px] hover:bg-primary-color/80 text-white text-lg bg-primary-color border border-primary-color hover:border-primary-color/80 w-32">Apply Now</Button>
                    </div>
                </div>
                <motion.div
                    className="lg:w-[500px] lg:h-[500px] hidden md:block  w-full object-cover"
                    initial={{y: 10}}
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                >
                    <Image
                        width={800}
                        height={600}
                        className="object-cover rounded-xl"
                        priority
                        src="/partner.png"
                        alt="image-partner"
                    />
                </motion.div>
            </section>

            <section
                className="grid my-20 w-full items-center justify-center px-5 lg:grid-cols-2 md:max-w-full md:px-[40px]">
                <h1 className="lg:text-4xl mb-10 col-span-2 text-center text-2xl font-bold text-primary-color border-primary-color">Benefits
                    of KHOTIXS</h1>
                <motion.div
                    className="lg:w-[500px] xl:ml-20 text-center lg:h-[500px] hidden lg:block object-cover"
                    initial={{y: 10}}
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                >
                    <Image
                        width={800}
                        height={600}
                        className="object-cover rounded-xl"
                        priority
                        src="/benefit.png"
                        alt="image-partner"
                    />
                </motion.div>

                <div className="lg:flex lg:flex-wrap lg:flex-col grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:mr-10 gap-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="border-primary-color lg:w-full w-[300px] dark:border-none dark:bg-background-blur dark:bg-white hover:dark:shadow-xl hover:shadow-lg border-2 flex gap-2 dark:backdrop-blur dark:bg-opacity-5 lg:p-4 p-3 rounded-[6px]"
                        >
                            <RiCheckDoubleLine
                                className="lg:w-[46px] w-[60px] h-[46px] bg-primary-color text-primary-color bg-background-blur bg-opacity-5 dark:bg-none rounded-[6px] px-2"
                            />
                            <div className=" flex flex-col gap-1">
                                <h2 className="text-lg font-bold flex items-center">
                                    {benefit.title}
                                </h2>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}