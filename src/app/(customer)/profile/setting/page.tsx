import SettingComponent from "@/components/customer/User-Profile/setting/Setting";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "Manage your account settings and preferences.";

    return {
        title: "Setting",
        description: desc,
        openGraph: {
            title: "Setting",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'Setting'
                },
            ],
        },
    };
}
export default function Setting(){
    return(
        <section>
            <SettingComponent/>
        </section>
    )
}