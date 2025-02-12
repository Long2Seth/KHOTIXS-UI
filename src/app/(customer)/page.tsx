import HomePageComponent from "@/components/customer/home/HomePage";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to KHOTIXS, the best place to buy and sell tickets for events online.",
    openGraph: {
        title: "Home",
        description: "Welcome to KHOTIXS, the best place to buy and sell tickets for events online.",
        siteName: 'KHOTIXS',
        images: [
            {
                url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                alt: 'KHOTIXS'
            },
        ],
    },
};

export default function Page() {
    return (
        <main>
            <HomePageComponent/>
        </main>
    );
}