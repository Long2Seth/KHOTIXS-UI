'use client';
import {generalData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import { useEffect, useState } from "react";
import {CardEventSkeletonComponent} from "@/components/customer/card/CardEventSkeletonComponent";

export function GeneralEventComponent() {
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
                isLoading ? <CardEventSkeletonComponent/> :
                    <section
                        className=" container mx-auto w-full  dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto ">
                        <section className=" w-full flex flex-col justify-center items-center ">
                            <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">
                                GENERAL
                            </h1>
                            <p className=" text-description-color text-base md:text-lg xl:text-xl max-w-[400px] md:max-w-[80%] xl:max-w-[60%] md:px-[120px] md:text-md lg:text-lg xl:px-[10px] font-light lg:my-[20px] text-center dark:text-dark-description-color ">
                                The General Event feature provides comprehensive information about a specific event,
                                ensuring
                                users have all the details needed to make an informed decision about attending or
                                booking
                                tickets.
                            </p>
                        </section>


                        <section
                            className=" h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                            {generalData.map((event, index) => (
                                <CardComponent key={index} event={event}/>
                            ))}
                        </section>

                    </section>
            }
        </>

    )
}