import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "Please check your Payment Details!";

    return {
        title: "Pay Now",
        description: desc,
        openGraph: {
            title: "Pay Now",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
                    alt: 'Pay Now',
                },
            ],
        },
    };
}