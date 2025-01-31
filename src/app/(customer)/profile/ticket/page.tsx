import Tickets from "@/components/customer/User-Profile/Tickets";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "View and manage your support tickets.";

    return {
        title: "Ticket",
        description: desc,
        openGraph: {
            title: "Ticket",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'Ticket'
                },
            ],
        },
    };
}

export default function Page(){
    return (
        <section>
            <Tickets/>
        </section>
    )
}