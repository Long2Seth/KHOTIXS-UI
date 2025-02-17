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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
                    alt: 'Contact Us',
                },
            ],
        },
    };
}