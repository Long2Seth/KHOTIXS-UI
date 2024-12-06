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
                <section className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[50px] font-bold flex flex-col justify-center items-center h-auto">
                    <h1 className="my-5 text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text">EVENT CATEGORIES</h1>
                    <section className="px-5 mt-[10px] justify-center gap-3 flex flex-wrap sm:w-full sm:grid sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6">
                        {categories.map((category: CategoriesIcon) => (
                            <a key={category.name} href={category.link} className="bg-primary-color rounded-[15px] w-[145px] h-[65px] sm:w-full sm:h-[85px] md:h-[100px] lg:h-[140px] flex flex-col justify-center items-center shadow-lg">
                                <div className="text-white text-xl m-2">
                                    <Image className="w-[20px] md:min-w-[50px] lg:min-w-[80px]" src={category.icon} alt={category.name} width={50} height={50} />
                                </div>
                                <p className="text-white text-sm md:text-lg lg:text-xl">{category.name}</p>
                            </a>
                        ))}
                    </section>
                </section>
            }
        </>
    );
};
