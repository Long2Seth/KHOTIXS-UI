'use client';
import React from "react";
import {useEffect,useState} from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import TitleAndDesComponentSkeleton from "@/components/customer/TitleAndDesComponent/TitleAndDesComponentSkeleton";

type TitleAndDesComponentProps = {
    title: string;
    description: string;
}

export default function TitleAndDesComponent({ title, description }: TitleAndDesComponentProps) {
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
                isLoading ? <TitleAndDesComponentSkeleton/> :
                    <div className="flex flex-col items-center justify-center gap-2.5">
                        <h1 className="uppercase text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                            {title}
                        </h1>
                        <div className="flex items-center gap-[5px]">
                            <RiErrorWarningLine size={24} fill="#6b7280"/>
                            <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">{description}</p>
                        </div>
                    </div>
            }
        </>
    )
}