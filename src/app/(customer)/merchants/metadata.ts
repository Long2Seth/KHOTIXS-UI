import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "We’re here to help! Whether you have a question about your booking, need assistance, or want to share feedback, the KHOTIXS team is ready to assist you.";

    return {
        title: "Merchants",
        description: desc,
        openGraph: {
            title: "Merchants",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
                    alt: 'Merchants',
                },
            ],
        },
    };
}