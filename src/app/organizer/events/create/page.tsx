import React from 'react';
import {CreateEventForm} from "@/components/organizer/FormCreateEvent";

const Page = () => {
    return (
        <main className=" container mx-auto w-full space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-[80px] xl:mb-[100px] ">
            <CreateEventForm />
        </main>
    );
};

export default Page;