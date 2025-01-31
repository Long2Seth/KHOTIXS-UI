import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "We’re here to help! Whether you have a question about your booking, need assistance, or want to share feedback, the KHOTIXS team is ready to assist you.";

    return {
        title: "Contact Us",
        description: desc,
        openGraph: {
            title: "Contact Us",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'Contact Us',
                },
            ],
        },
    };
}