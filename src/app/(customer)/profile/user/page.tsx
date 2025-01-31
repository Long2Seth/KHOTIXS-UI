import ProfileComponent from "@/components/customer/User-Profile/Profile";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "View and manage your user profile.";

    return {
        title: "User Profile",
        description: desc,
        openGraph: {
            title: "User Profile",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'User Profile'
                },
            ],
        },
    };
}

export default async function ProfilePage() {

    return (
        <section>
            <ProfileComponent />
        </section>
    );
}