import EventDetailsPage from '@/components/organizer/event/DetailEvent';
import TicketTable from '@/components/organizer/event/TicketTable';

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const TicketPage = async ({ params }: Props) => {
    const { id } = await params;
    // const [eventData, setEventData] = useState(null);
    // const [ticketData, setTicketData] = useState(null);
    //
    // console.log("  GET ID   ", id);
    // const getData = async () => {
    //     try {
    //         const response = await fetch(`event-ticket/api/v1/events/organizer/${id}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         const data = await response.json();
    //         setEventData(data);
    //         setTicketData(data.tickets);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    // useEffect(() => {
    //     getData();
    // }, [id]);

    return (
        <main className="container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]">
            <EventDetailsPage id={id} />
            <TicketTable id={id} />
        </main>
    );
};

export default TicketPage;