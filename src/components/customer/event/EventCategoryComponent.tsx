'use client';
import React, {useEffect, useState} from 'react';
import {CardComponent} from "@/components/customer/card/CardComponent";
import {EventType} from "@/lib/types/customer/Event";
import {useGetEventByCategoryQuery} from "@/redux/feature/user/Event";
import {EventCategorySkeleton} from "@/components/customer/event/EventCategorySkeleton";

type Props = {
    category: string;
}

export default function EventCategoryComponent({category}: Props) {
    const {data: events = [], error, isLoading} = useGetEventByCategoryQuery(category);

    if (isLoading) return <EventCategorySkeleton/>;
    if (error) return <p>Error loading events</p>;

    return (
        <section
            className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-start h-auto mb-[30px] md:mb-50px] xl:mb-[70px]">
            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase md:p-[30px] py-[30px] w-[300px] md:w-full container mx-auto">
                {category} Events <span>({events.length || 0})</span>
            </h1>
            <section
                className="container mx-auto md:py-[15px] w-[300px] sm:w-auto grid gap-3 grid-cols-1 sm:grid-cols-2 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center lg:px-[30px] xl:gap-10">
                {events?.map((event: any, index) => (
                    <CardComponent key={index} event={event}/>
                ))}
            </section>
        </section>
    );
}