import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "We’re here to help! Whether you have a question about your booking, need assistance, or want to share feedback, the KHOTIXS team is ready to assist you.";

    return {
        title: "Contact Us - KHOTIXS",
        description: desc,
        openGraph: {
            title: "Contact Us - KHOTIXS",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'http://khotixs.devkh.asia/asset/api/v1/files/view/10d5f2ea-6af8-48ee-861e-27b6f71843c6.png',
                    width: 494,
                    height: 505,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Contact Us - KHOTIXS",
            description: desc,
            creator: '@KHOTIXS',
            images: 'http://khotixs.devkh.asia/asset/api/v1/files/view/10d5f2ea-6af8-48ee-861e-27b6f71843c6.png',
        },
    };
}