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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
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