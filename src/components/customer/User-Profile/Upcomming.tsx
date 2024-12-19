import {Banknote, CalendarIcon, MapPin} from "lucide-react";
import React from "react";

export default function Upcoming() {
    return (
        <section className="container mx-auto ">
            <div className="w-full  max-w-[1200px] justify-start items-center flex flex-col md:flex-row  mb-5 shadow-lg dark:shadow-secondary-color-text dark:shadow-sm hover:bg-white dark:hover:bg-khotixs-background-dark/80 rounded-[6px] ">
                <div className="w-full flex flex-col md:flex-row  items-center gap-2 p-1">
                    <div
                        className=" bg-cover bg-center rounded-[6px] "
                        style={{ backgroundImage: "url('/cher-chhaya.png')", width: "150px", height: "140px" }}
                    >
                    </div>
                    <div className="w-full relative">
                        <div className="flex flex-row md:flex-row items-start md:items-start gap-x-8 ">
                            <h2 className=" text-start md:text-left text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color ">THE Q RISE OF THE QUEEN</h2>
                            <button className="bg-label-premium text-white px-[5px] py-[1px] rounded mt-2 md:mt-0">
                                Premium
                            </button>
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-gray-600 ">
                            <div className="flex items-center text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                <CalendarIcon className="w-5 h-5 mr-2"/>
                                <span>10 Oct - 14 Oct 2024</span>
                            </div>
                            <div className="flex items-center text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">
                                <MapPin  className="w-5 h-5 mr-2"/>
                                <span> 24, Street 562, Sangkat Boeung, Kak I, Khan Toul Kork, Phnom Penh</span>
                            </div> <div className="flex items-center dark:text-white">
                            <Banknote className="w-5 h-5 mr-2 "/>
                            <span className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">$25.00</span>
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
