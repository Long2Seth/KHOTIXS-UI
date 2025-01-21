
// import EventDetailsSkeleton from "@/components/customer/event/EventDetailsSkeleton";
import EventDetails from "@/components/customer/event/EventDetail";
// import { EventType } from "@/lib/customer/event";

type Props = {
    params: Promise<{
        id: string
    }>;
    // searchParams: { [key: string]: string | string[] | undefined };
};

// const getData = async (id: string) => {
//     const res = await fetch(`/event-ticket/api/v1/events/${id}`);
//     const data = await res.json();
//     return data;
// };
//
// async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     const id = params.id;
//
//     // fetch data
//     const product = await fetch(`/event-ticket/api/v1/events/${id}`).then((res) => res.json());
//
//     // optionally access and extend (rather than replace) parent metadata
//     // const previousImages = (await parent).openGraph?.images || [];
//
//     return {
//         title: product.title,
//         description: product.description,
//
//         openGraph: {
//             images: [product.image],
//         },
//     };
// }
//

export default async function EventPage(props: Props) {

    const {id} = await props.params;

    /*const [isLoading, setIsLoading] = useState(true);
    const [event, setEvent] = useState<EventType | null>(null);
    const [params, setParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        const unwrapParams = async () => {
            const resolvedParams = await props.params;
            setParams(resolvedParams);
        };
        unwrapParams();
    }, [props.params]);

    useEffect(() => {
        if (params) {
            const fetchData = async () => {
                const data = await getData(params.id);
                setEvent(data);
                setIsLoading(false);
            };
            fetchData();
        }
    }, [params]);*/

    return  <EventDetails id={id} />;
}