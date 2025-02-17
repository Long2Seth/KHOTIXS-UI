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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
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