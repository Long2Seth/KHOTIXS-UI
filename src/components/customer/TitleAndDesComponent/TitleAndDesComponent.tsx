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
                        <h1 className="uppercase text-[28px] font-bold lg:text-[48px]">
                            {title}
                        </h1>
                        <div className="flex items-center gap-[5px]">
                            <RiErrorWarningLine size={24} fill="#6b7280"/>
                            <p className="text-[12px] text-[#6b7280] lg:text-[18px]">{description}</p>
                        </div>
                    </div>
            }
        </>
    )
}