import Image from "next/image";
import {Banknote, CalendarIcon, MapPinIcon} from "lucide-react";
import React from "react";

export default function Upcomming(){
    return(
        <section>
            <div className="w-[1103px] mx-auto flex justify-start items-start">
                <div className="w-[1103px] flex justify-between bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex">
                        <div className="relative w-full md:w-1/3 md:h-auto">
                            <Image
                                src="/cher-chhaya.png"
                                width={150}
                                height={80}
                                alt="Ticket"
                                className="py-2 pl-2"
                            />
                        </div>
                        <div className="py">
                            <div className="flex justify-between items-center my-2 ">
                                <h2 className="text-xl font-bold">THE Q RISE OF THE QUEEN</h2>
                                <span
                                    className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded mr-8">Premium</span>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <CalendarIcon className="w-4 h-4 mr-2"/>
                                    <span>10 Oct - 14 Oct 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPinIcon className="w-4 h-4 mr-2"/>
                                    <span>24, Street 562,Sangkat Boeung ,Kak I, Khan Toul Kork,Phnom Penh</span>
                                </div>
                                <div className="flex items-center">
                                    <Banknote className="w-4 h-4 mr-2"/>
                                    <span>$25.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-3 py-3 ">
                        <button
                            className="w-[100px] bg-secondary-color hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}