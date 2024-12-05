import * as React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
            className=" cursor-pointer lg:min-w-[350px] dark:bg-secondary-color bg-white lg:max-w-[400px] xl:max-w-[500px] h-auto rounded-[10px] flex flex-col justify-start items-start">
            <a className="group block overflow-hidden">
                <img
                    src={`${event.image}`}
                    alt=""
                    className="rounded-tr-[10px] rounded-tl-[10px] w-full lg:max-h-[50%] xl:max-h-[50%] bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
                />
                <section
                    className="relative flex w-full lg:max-h-[40%] xl:max-h-[40%] px-[30px] lg:pb-[25px] xl:pb-[35px] xl:pt-5 gap-10">
                    <div className="text-center">
                        <p className="font-semibold lg:text-sm xl:text-xl uppercase">{month}</p>
                        <p className="font-bold lg:text-2xl xl:text-4xl">{day}</p>
                    </div>
                    <div className="absolute lg:top-[50px] lg:left-[50px] xl:top-[60px] xl:left-[50px]">
                        <hr className="lg:w-[50px] xl:w-[80px] rotate-90 bg-black"/>
                    </div>
                    <div className="h-auto w-full">
                        <p className="font-bold lg:text-md xl:text-2xl line-clamp-3 uppercase">{event.title}</p>
                        <div className="flex">
                            <HiOutlineLocationMarker
                                className="my-2 lg:w-[70px] lg:h-[20px] xl:w-[50px] xl:h-[40px] text-gray-300"/>
                            <p className=" lg:text-sm xl:text-lg font-light my-2 dark:text-gray-300 text-gray-600 line-clamp-2">{event.location}</p>
                        </div>
                    </div>
                    <button
                        className={`absolute lg:text-md xl:text-xl font-medium bottom-0 right-0 min-w-[80px] text-white lg:p-1 xl:px-3 xl:py-2 rounded-br-[10px] rounded-bl-[10px] rounded-tl-[10px] ${getLabelClass(event.labelType)}`}
                    >
                        {event.labelType.toLowerCase() === 'free' ? 'FREE' : `$${event.price}`}
                    </button>
                </section>
            </a>
        </section>
    );
}