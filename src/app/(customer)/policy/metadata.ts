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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'Policy'
                },
            ],
        },
    };
}