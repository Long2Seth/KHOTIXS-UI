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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
                    alt: 'Policy'
                },
            ],
        },
    };
}