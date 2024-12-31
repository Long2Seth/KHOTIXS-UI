import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PayNowComponent() {


    return (
        <>
            <section className="w-full lg:w-[670px] flex flex-col gap-5">
                {/* Card Your Order */}
                <section>
                    <div
                        className="flex flex-col gap-5 w-full lg:w-[670px] rounded-[8px] p-5 bg-white dark:backdrop-blur dark:bg-opacity-5">
                        <div className="flex flex-col lg:flex-row md:gap-3 gap-5">
                            <section className="w-full space-y-2">
                                <div className="flex">
                                    <p className="uppercase text-description-color text-sm md:text-base xl:text-lg dark:text-white font-semibold">THE
                                        Q RISE OF THE QUEEN</p>
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
                                    <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">$
                                        50</p>
                                </div>
                                <div className="py-5 ">
                                    <hr className="border-[#E5E7EB] w-[90%]"/>
                                </div>

                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">AMOUNT</p>
                                    <p className=" text-label-paid text-sm md:text-base xl:text-lg font-semibold">$
                                        500</p>
                                </div>
                            </section>
                            <section className="flex mt-5 lg:mt-0">
                                <div
                                    className="flex md:flex-row lg:gap-2 md:gap-10 gap-4 md:items-start lg:items-center lg:flex-col flex-col items-center">
                                    <Image src="/khqr/KHQR-payment.png" alt="Payment Method" width={250} height={40}/>
                                    <Link
                                        className="text-sm md:text-base xl:text-lg underline underline-offset-4 font-bold hover:text-label-published/90 text-label-published"
                                        href="your-deeplink-url" target="_blank" rel="noopener noreferrer">Open app to
                                        pay</Link>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}