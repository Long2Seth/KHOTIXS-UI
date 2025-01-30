import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "Please review our policy details.";

    return {
        title: "Policy",
        description: desc,
        openGraph: {
            title: "Policy",
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
            title: "Policy",
            description: desc,
            creator: '@KHOTIXS',
            images: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
        },
    };
}