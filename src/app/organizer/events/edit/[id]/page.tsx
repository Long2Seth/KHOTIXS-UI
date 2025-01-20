import {EditEvent} from "@/components/organizer/event/EditEvent";

type PropsType = {
    params: Promise<{
        id: string
    }>;
};

export default async function EditEventPage ( param : PropsType )  {
    const { id } = await param.params;
    return (
        <main
            className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]  ">
            <EditEvent id={id}/>
        </main>
    );
};
