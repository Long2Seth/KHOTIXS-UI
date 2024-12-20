import React from "react";
import Image from "next/image";

export default function PayNowComponent() {


    return (
        <>
            <section className="w-full lg:w-[670px] flex flex-col gap-5">
                {/* Card Your Order */}
                <section>
                    <div
                        className="flex flex-col gap-5 w-full lg:w-[670px] rounded-[8px] p-[20px] bg-white dark:bg-khotixs-background-dark pt-10">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className=" w-full  space-y-2">
                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">EVENT
                                        NAME</p>
                                    <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-white font-semibold line-clamp-1">THE
                                        Q RISE OF THE QUEENQUEEN QUEEN</p>
                                </div>
                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">QTY</p>
                                    <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">10</p>
                                </div>
                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">TYPE </p>
                                    <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">VIP</p>
                                </div>
                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">PRICE </p>
                                    <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">50</p>
                                </div>
                                <div className="py-5 ">
                                    <hr className="border-[#E5E7EB] w-[90%]"/>
                                </div>

                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">AMOUNT</p>
                                    <p className=" text-label-paid text-sm md:text-base xl:text-lg font-semibold">500</p>
                                </div>
                            </div>
                            <Image src="/khqr/KHQR-payment.png" alt="Payment Method" width={250} height={40}/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}