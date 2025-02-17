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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
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