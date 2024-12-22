import React from 'react';
import {CreateEventForm} from "@/components/organizer/FormCreateEvent";

const Page = () => {
    return (
        <main className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px] ">
            <CreateEventForm />
        </main>
    );
};

export default Page;