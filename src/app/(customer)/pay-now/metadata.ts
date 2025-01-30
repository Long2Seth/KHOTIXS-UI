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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
                    width: 800,
                    height: 600,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Pay Now",
            description: desc,
            creator: '@KHOTIXS',
            images: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
        },
    };
}