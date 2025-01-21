import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "We’re here to help! Whether you have a question about your booking, need assistance, or want to share feedback, the KHOTIXS team is ready to assist you.";

    return {
        title: "About Us - KHOTIXS",
        description: desc,
        openGraph: {
            title: "About Us - KHOTIXS",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'http://khotixs.devkh.asia/asset/api/v1/files/view/about-us-image.png',
                    width: 800,
                    height: 600,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "About Us - KHOTIXS",
            description: desc,
            creator: '@KHOTIXS',
            images: 'http://khotixs.devkh.asia/asset/api/v1/files/view/about-us-image.png',
        },
    };
}