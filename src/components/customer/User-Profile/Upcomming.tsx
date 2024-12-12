import Image from "next/image";
import {Banknote, CalendarIcon, MapPin} from "lucide-react";
import React from "react";

export default function Upcoming() {
    return (
        <section className="container mx-auto ">
            <div className="w-full max-w-[1200px] justify-start items-center flex flex-col md:flex-row  mb-5 shadow-lg dark:shadow-secondary-color-text dark:shadow-sm">
                <div className="w-full flex flex-col md:flex-row ">
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/cher-chhaya.png"
                            width={140}
                            height={60}
                            alt="Ticket"
                            className="py-3 pl-3"
                        />
                    </div>
                    <div className="w-full relative p-4">
                        <div className="flex flex-row md:flex-row items-start md:items-start gap-x-8 ">
                            <h2 className="text-xl font-bold text-start md:text-left ">THE Q RISE OF THE QUEEN</h2>
                            <button className="bg-label-premium text-white px-[5px] py-[1px] rounded mt-2 md:mt-0">
                                Premium
                            </button>
                        </div>
                        <div className="mt-2 space-y-2 text-sm text-gray-600 ">
                            <div className="flex items-center dark:text-white">
                                <CalendarIcon className="w-4 h-4 mr-2"/>
                                <span>10 Oct - 14 Oct 2024</span>
                            </div>
                            <div className="flex items-center dark:text-white">
                                <MapPin  className="w-4 h-4 mr-2"/>
                                <span> 24, Street 562, Sangkat Boeung, Kak I, Khan Toul Kork, Phnom Penh</span>
                            </div> <div className="flex items-center dark:text-white">
                                <Banknote className="w-4 h-4 mr-2 "/>
                                <span >$25.00</span>
                            </div>
                        </div>
                        <div className="md:absolute md:top-4 md:right-3 pt-3 md:pt-0">
                            <button
                                className="w-full md:w-[80px] bg-primary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded">
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}