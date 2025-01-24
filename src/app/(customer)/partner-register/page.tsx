import PartnerComponent from "@/components/customer/PartnerRegister/PartnerComponent";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "Partner Registration",
        description: "Register as a partner with our platform.",
        openGraph: {
            title: "Partner Registration",
            description: "Register as a partner with our platform.",
        },
        twitter: {
            card: "summary_large_image",
            title: "Partner Registration",
            description: "Register as a partner with our platform.",
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