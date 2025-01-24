import EventDetails from "@/components/customer/event/EventDetail";

type Props = {
    params: Promise<{
        id: string
    }>;
};

export default async function EventPage(props: Props) {

    const {id} = await props.params;


    return <EventDetails id={id}/>;
}