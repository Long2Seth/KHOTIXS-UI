import ProfileComponent from "@/components/organizer/profile/Profile";

type PropTypes = {
    params: Promise<{
        id: string
    }>;
}

export default async function DetailProfile (param : PropTypes) {
    const { id } = await param.params;

    return (
        <main className=" container mx-auto space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]  ">
            <ProfileComponent id={id}/>
        </main>
    );
};