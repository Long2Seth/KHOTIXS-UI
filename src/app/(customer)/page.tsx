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
                url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
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