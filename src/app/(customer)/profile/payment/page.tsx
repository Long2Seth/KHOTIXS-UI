import Payment from "@/components/customer/User-Profile/Payment";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    const desc = "Manage your payment methods and view transaction history.";

    return {
        title: "Payments",
        description: desc,
        openGraph: {
            title: "Payments",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/53fbacb0-250d-4d41-8c60-198c4c923a0d.jpg',
                    alt: 'Payments'
                },
            ],
        },
    };
};
export default function Payments(){
    return (
        <section>
            <Payment/>
        </section>
    )
}