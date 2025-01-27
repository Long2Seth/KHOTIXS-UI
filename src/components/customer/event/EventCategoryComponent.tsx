'use client';
import React, {useEffect, useState} from 'react';
import {CardComponent} from "@/components/customer/card/CardComponent";
import {EventType} from "@/lib/types/customer/event";
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
            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase p-[30px]">
                {category} Events <span>({events.length || 0})</span>
            </h1>
            <section
                className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                {events?.map((event: any, index) => (
                    <CardComponent key={index} event={event}/>
                ))}
            </section>
        </section>
    );
}