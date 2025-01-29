import EventDetailsPage from '@/components/organizer/event/DetailEvent';
import TicketTable from '@/components/organizer/event/TicketTable';

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function TicketPage ({ params }: Props) {
    const { id } = await params;

    return (
        <main className="container mx-auto space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]  px-5 md:px-10">
            <EventDetailsPage id={id} />
            <TicketTable id={id} />
        </main>
    );
};
