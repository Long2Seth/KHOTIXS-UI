import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "Stay updated with the latest notifications from KHOTIXS. Check out your notifications for important updates and alerts.";

    return {
        title: "Notifications - KHOTIXS",
        description: desc,
        openGraph: {
            title: "Notifications - KHOTIXS",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'http://khotixs.devkh.asia/asset/api/v1/files/view/notifications-image.png',
                    width: 800,
                    height: 600,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Notifications - KHOTIXS",
            description: desc,
            creator: '@KHOTIXS',
            images: 'http://khotixs.devkh.asia/asset/api/v1/files/view/notifications-image.png',
        },
    };
}