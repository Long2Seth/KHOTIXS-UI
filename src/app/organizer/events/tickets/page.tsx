import React from 'react';
import {TicketSettingsForm} from "@/components/organizer/TicketSettingForm";

const Page = () => {
    return (
        <main className=" container mx-auto w-full space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[100px] ">
            <TicketSettingsForm/>
        </main>
    );
};

export default Page;