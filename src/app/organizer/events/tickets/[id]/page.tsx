import React from 'react';
import {TicketSettingsForm} from "@/components/organizer/event/TicketSettingForm";

type PropsType = {
    params: {
        id: string;
    };
}

const Page = ( prop : PropsType) => {
    const id = prop.params.id;
    console.log(" ID : ", id);

    return (
        <main className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px] ">
            <TicketSettingsForm id={id}/>
        </main>
    );
};

export default Page;