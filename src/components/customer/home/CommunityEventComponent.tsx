'use client';
import {generalData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import { useEffect,useState} from "react";
import {CardEventSkeletonComponent} from "@/components/customer/card/CardEventSkeletonComponent";

export default function CommunityEventComponent() {

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
                        className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px]  md:py-[50px] flex flex-col justify-center items-center h-auto ">
                        <section className=" w-full flex flex-col justify-center items-center ">
                            <h1 className="text-primary-color-text lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                                COMMUNITY EVENTS
                            </h1>
                            <p className=" px-[20px] py-[8px] lg:max-w-[700px] xl:max-w-[60%] text-sm md:px-[120px] md:text-md lg:text-lg xl:text-xl xl:px-[10px]  2xl:text-xl font-light  text-center ">
                                The Community Events feature connects users with local gatherings, social activities,
                                and events
                                that foster engagement within a community. It provides detailed information and tools to
                                explore, register, and participate in a variety of events focused on building
                                connections and
                                supporting shared interests.
                            </p>
                        </section>


                        <section
                            className=" w-full h-auto grid grid-cols-2 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px] ">
                            {generalData.map((event, index) => (
                                <CardComponent key={index} event={event}/>
                            ))}
                        </section>

                    </section>
            }
        </>

    )
}