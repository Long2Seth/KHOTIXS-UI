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
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'Partner Registration'
                },
            ],
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