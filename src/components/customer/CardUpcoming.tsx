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

export function CardUpcoming({ event }: CardUpcomingProps) {
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
        <section className=" w-[500px] h-[500px] bg-white rounded-[10px] flex flex-col justify-start items-start">
            {/*<section*/}
            {/*    className="rounded-tr-[10px] rounded-tl-[10px] w-[500px] h-[50%] bg-cover bg-center hover:scale-[101%]"*/}
            {/*    style={{ backgroundImage: `url(${event.image})` }}*/}
            {/*>*/}
            {/*</section>*/}
            <a className=" group block overflow-hidden ">
                <img
                    src={`${event.image}`}
                    alt=""
                    className="rounded-tr-[10px] rounded-tl-[10px] w-[500px] h-[250px] bg-cover bg-center hover:scale-[101%] "
                />
                <section className="relative flex w-full h-[250px] px-[25px] py-5 gap-10">
                    <div className="text-center">
                        <p className="font-semibold text-lg uppercase">{month}</p>
                        <p className="font-bold text-4xl">{day}</p>
                    </div>
                    <div className="absolute top-[70px] left-[30px]">
                        <hr className="w-[100px] rotate-90 bg-black"/>
                    </div>
                    <div>
                        <p className="font-bold text-2xl h-[100px] line-clamp-3 uppercase ">{event.title}</p>
                        <div className="flex">
                            <HiOutlineLocationMarker className="w-[20px] h-[30px] text-gray-600"/>
                            <p className=" pl-[8px] text-lg font-light my-1 text-gray-600 line-clamp-2">{event.location}</p>
                        </div>
                    </div>
                    <button
                        className={`absolute text-xl font-medium bottom-0 right-0 min-w-[80px] text-white px-3 py-2 rounded-br-[10px] rounded-bl-[10px] rounded-tl-[10px] ${getLabelClass(event.labelType)}`}
                    >
                        {event.labelType.toLowerCase() === 'free' ? 'FREE' : `$${event.price}`}
                    </button>
                </section>
            </a>
        </section>
    );
}