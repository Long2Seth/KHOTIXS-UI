import PartnerComponent from "@/components/customer/PartnerRegister/PartnerComponent";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "Partner Registration",
        description: "Register as a partner with our platform.",
        openGraph: {
            title: "Partner Registration",
            description: "Register as a partner with our platform.",
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
                    width: 800,
                    height: 600,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Partner Registration",
            description: "Register as a partner with our platform.",
            images: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
        },
    };
};

export default function PartnerRegister() {
    return (
        <main
            className="container mx-auto my-[50px] xl:mb-[100px] bg-khotixs-background-white dark:bg-khotixs-background-dark">
            <PartnerComponent/>
        </main>
    );
}