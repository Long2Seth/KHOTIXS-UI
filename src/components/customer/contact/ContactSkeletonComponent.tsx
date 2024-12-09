import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ContactSkeletonComponent() {
    return (
        <main className="flex flex-col dark:bg-khotixs-background-dark">
            {/* Hero section */}
            <section className="relative h-[400px] w-full overflow-x-hidden xl:h-[600px]">
                <div className="absolute bg-primary-color h-[400px] w-[520px] rounded-bl-[100%] left-[-200px] overflow-x-hidden xl:h-[600px]"></div>
                <div className="absolute bg-primary-color h-[400px] w-[1600px] left-[300px] xl:h-[600px]">
                    <Skeleton className="absolute w-[200px] h-[40px] xl:w-[400px] xl:h-[60px] mt-[100px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[10px]" />
                    <Skeleton className="absolute w-[250px] h-[60px] md:w-[350px] xl:w-[400px] xl:h-[80px] mt-[140px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[30px]" />
                </div>
            </section>

            {/* Contact Info and Form */}
            <section className="container mx-auto w-full h-auto my-20 text-primary-color-text dark:text-secondary-color-text">
                <div className="grid grid-cols-1 gap-[100px] w-full md:grid-cols-2 px-[24px]">
                    {/* Left Section: Contact Information */}
                    <div className="flex flex-col gap-5 text-center">
                        <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto" />
                        <Skeleton className="w-[350px] h-[60px] xl:w-[500px] xl:h-[80px] mx-auto" />
                        <div className="flex flex-col gap-5 text-lg">
                            <div className="flex items-center gap-4 bg-white px-5 py-2 rounded-[5px] dark:bg-khotixs-background-dark dark:border dark:border-secondary-color-text">
                                <Skeleton className="w-[40px] h-[40px]" />
                                <div className="text-start">
                                    <Skeleton className="w-[100px] h-[20px]" />
                                    <Skeleton className="w-[200px] h-[20px]" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-2 rounded-[5px] dark:bg-khotixs-background-dark dark:border dark:border-secondary-color-text">
                                <Skeleton className="w-[30px] h-[30px]" />
                                <div className="text-start">
                                    <Skeleton className="w-[100px] h-[20px]" />
                                    <Skeleton className="w-[200px] h-[20px]" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-2 rounded-[5px] dark:bg-khotixs-background-dark dark:border dark:border-secondary-color-text">
                                <Skeleton className="w-[30px] h-[30px]" />
                                <div className="text-start">
                                    <Skeleton className="w-[100px] h-[20px]" />
                                    <Skeleton className="w-[200px] h-[20px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="flex flex-col gap-8 w-full text-center">
                        <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto" />
                        <Skeleton className="w-[350px] h-[60px] xl:w-[500px] xl:h-[80px] mx-auto" />
                        <div className="p-5 xl:p-20 text-start rounded-[5px] bg-white dark:bg-khotixs-background-dark dark:border-[1px] dark:border-white">
                            <form className="flex flex-col gap-4">
                                <Skeleton className="w-full h-[40px]" />
                                <Skeleton className="w-full h-[40px]" />
                                <Skeleton className="w-full h-[80px]" />
                                <Skeleton className="w-[100px] h-[40px] mx-auto" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Location Section */}
            <section className="container mx-auto w-full my-20 text-primary-color-text dark:text-secondary-color-text">
                <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto" />
                <div className="m-5">
                    <Skeleton className="w-full h-[600px]" />
                </div>
            </section>
        </main>
    );
}