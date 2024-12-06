'use client';
import * as React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {useRouter} from "next/navigation";

interface CardUpcomingProps {
    event: {
        image: string;
        date: string;
        title: string;
        location: string;
        price: number;
        labelType: string;
    };
}

export function CardComponent({ event }: CardUpcomingProps) {
    const date = new Date(event.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0');
    const router = useRouter();
    const getLabelClass = (labelType: string) => {
        switch (labelType.toLowerCase()) {
            case 'free':
                return 'bg-label-free';
            case 'vip':
                return 'bg-label-vip';
            case 'regular':
                return 'bg-label-regular';
            case 'premium':
                return 'bg-label-premium';
            default:
                return '';
        }
    };

    return (

        <section
            onClick={() => router.push(`/event`)}
            className=" relative cursor-pointer bg-white rounded-[10px] flex flex-col justify-start items-start h-auto max-w-[300px] sm:h-[215px] md:h-[235px] lg:max-w-[480px] lg:h-[450px] xl:max-w-[610px] xl:h-[530px] dark:bg-secondary-color ">

            <a className=" group block overflow-hidden rounded-[10px]">
                <div className="rounded-tr-[10px] z-10 rounded-tl-[10px] w-full h-auto ">
                    <img
                        src={`${event.image}`}
                        alt=""
                        className=" z-10 rounded-tr-[10px] rounded-tl-[10px] w-full h-[60%]  bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <section
                    className="relative z-20 pb-5 flex w-full gap-3 lg:gap-5 lg:h-[40%] px-[10px] lg:pb-[25px] xl:my-5  xl:px-5 ">
                    <div className="text-center my-2">
                        <p className="font-semibold text-[10px] lg:text-sm xl:text-xl uppercase">{month}</p>
                        <p className="font-bold text-lg lg:text-2xl xl:text-4xl">{day}</p>
                    </div>
                    <div
                        className=" absolute top-[30px] left-[18px] lg:top-[48px] lg:left-[13px] xl:top-[55px] xl:left-[30px]">
                        <hr className=" w-[37px] lg:w-[70px] xl:w-[80px] rotate-90 bg-black"/>
                    </div>
                    <div className="h-auto w-full my-2 ">
                        <p className="font-bold text-[10px] lg:text-lg xl:text-2xl line-clamp-3 uppercase">{event.title}</p>
                        <div className="flex relative xl:my-[10px] ">
                            <HiOutlineLocationMarker
                                className=" absolute top-[-5px] my-2 w-[10px] h-[10px] lg:top-[-8px]  lg:w-[20px] lg:h-[20px] xl:top-[-9px] xl:w-[25px] xl:h-[25px] text-gray-300"/>
                            <p className=" pl-[12px] text-[10px] lg:pl-[20px] lg:mb-5 lg:text-sm xl:text-lg xl:pl-[25px] font-light dark:text-gray-300 text-gray-600 line-clamp-2">{event.location}</p>
                        </div>
                    </div>

                </section>
                <button
                    className={`absolute font-medium bottom-0 right-0 min-w-[60px] text-white text-[10px] md:text-md lg:text-lg xl:text-xl md:p-[2px] lg:p-1 xl:px-3 xl:py-2 rounded-br-[5px] rounded-l-[5px]  ${getLabelClass(event.labelType)}`}
                >
                    {event.labelType.toLowerCase() === 'free' ? 'FREE' : `$${event.price}`}
                </button>
            </a>
        </section>
    );
}