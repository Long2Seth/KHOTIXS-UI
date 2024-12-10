'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CategoriesIcon, categories } from "@/lib/customer/categories";
import { SkeletonCardCategoryComponent } from "@/components/customer/card/SkeletonCardCategoryComponent";

export default function CardCategory () {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? <SkeletonCardCategoryComponent /> :
                <section className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark font-bold flex flex-col justify-center items-center h-auto">

                    <h1 className="text-title-color text-lg my-[15px] md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">EVENT CATEGORIES</h1>


                    <section className=" justify-center gap-2 flex flex-wrap rounded-[6px] max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1200px] sm:w-full sm:grid sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 md:gap-5 ">
                        {categories.map((category: CategoriesIcon) => (
                            <a
                                key={category.name}
                                href={category.link}
                                className="bg-primary-color rounded-[15px] w-[145px] h-[50px] sm:w-full sm:h-[65px] md:h-[80px] lg:h-[120px] flex flex-col justify-center items-center shadow-lg">
                                <div className="text-white text-xl sm:m-2 ">
                                    <Image
                                        className=" w-[20px] md:min-w-[30px] lg:min-w-[37px] xl:min-w-[45px]"
                                        src={category.icon}
                                        alt={category.name}
                                        width={50}
                                        height={50} />
                                </div>
                                <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl ">{category.name}</p>
                            </a>
                        ))}
                    </section>
                </section>
            }
        </>
    );
};
