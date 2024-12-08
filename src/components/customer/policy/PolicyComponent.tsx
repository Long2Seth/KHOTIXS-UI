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
                    <section className="w-full my-10 lg:my-20 ">
                        <div className="w-full my-10">
                            <h1 className="w-full text-center text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase p-5 text-secondary-color dark:text-secondary-color-text ">
                                How Can We Assist You With Khotixs?
                            </h1>
                            <p className="text-center text-md xl:text-xl text-md text-gray-400 dark:text-gray-200  px-[25px]  ">
                                Whether it’s booking tickets, managing events, or navigating the
                                platform, we’re here to help!
                            </p>
                        </div>

                        <div className="flex gap-5 flex-col md:flex-row p-5 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Privacy Policy */}
                                <div className=" bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                    <div className="relative flex items-center gap-3 my-2 ">
                                        <h2 className="text-secondary-color dark:text-secondary-color-text text-2xl xl:text-3xl 2xl:text-5xl font-semibold uppercase w-full text-center mb-2">
                                            Privacy Policy
                                        </h2>
                                    </div>
                                    <p className="text-md xl:text-xl text-gray-400 dark:text-gray-200">
                                        We collect necessary data (e.g., name, email, payment info) to
                                        provide services like ticket booking and event discovery. Your
                                        data is protected with encryption and only shared when legally
                                        required or for payment processing.
                                    </p>
                                </div>

                                {/* Responsibilities */}
                                <div className="bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                    <div className=" relative flex items-center gap-3 my-2 ">
                                        <h2 className="text-secondary-color dark:text-secondary-color-text text-2xl font-semibold mb-2">
                                            Responsibilities
                                        </h2>
                                    </div>
                                    <p className="text-md xl:text-xl text-gray-400 dark:text-gray-200">
                                        Users must provide accurate information, respect others, and
                                        follow platform guidelines.
                                    </p>
                                </div>

                                {/* Security Policy */}
                                <div className="bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                    <div className=" flex items-center gap-3 my-2 ">
                                        <h2 className="text-secondary-color dark:text-secondary-color-text text-2xl font-semibold mb-2">
                                            Security Policy
                                        </h2>
                                    </div>

                                    <p className="text-md xl:text-xl text-gray-400 dark:text-gray-200">
                                        All payments are securely processed, and tickets are uniquely
                                        identified to prevent fraud. Report any security concerns to our
                                        support team.
                                    </p>
                                </div>

                                {/* Terms of Use */}
                                <div className="bg-white dark:bg-secondary-color p-4 rounded-[6px] ">
                                    <div className=" flex items-center gap-3 my-2 ">
                                        <h2 className="text-secondary-color dark:text-secondary-color-text text-2xl font-semibold mb-2">
                                            Terms of Use
                                        </h2>
                                    </div>
                                    <ul className="text-md xl:text-xl text-gray-400 dark:text-gray-200 list-disc list-inside space-y-1">
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
                                src="https://s3-alpha-sig.figma.com/img/d5c1/c166/e294dbfeaf7f92085a49583039cbc1dc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lFZqy7CkHU5TjyvsXjbAp~BfEqWhuhIe2LJpTgAapnCP9Fp3928lMXvE3XoRgkURWhFBiYCpaDnAATWbc3PTMPDRreMRoZH8Sr8Ev0vCwpAIWxYwFMXrzWaUJopDpac4mabqu9uuu0Pn7B6QdU9ydhYZuQCMaxH942r~KigHbz6uSH07mLH3-HKvvt88galzOBXAP30O6va7V9lamx4AGirsjertnmxehmfnx~tib-rJsi3vvXNdYqsVeDgouhX8DsfNoimA3~XeZu0OizsNuUwz8rOvdkFtx7u03l3XbI2rHkQbrUw9JuJUNpkJ3ttMUlEn22FDENTjVlStCLt1Kw__"
                                alt="Khotixs"/>
                        </div>
                    </section>
            }
        </>

    )
}