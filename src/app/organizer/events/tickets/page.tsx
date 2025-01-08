import React from 'react';
import {TicketSettingsForm} from "@/components/organizer/event/TicketSettingForm";

const Page = () => {
    return (
        <main className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px] ">
            <TicketSettingsForm/>
        </main>
    );
};

export default Page;