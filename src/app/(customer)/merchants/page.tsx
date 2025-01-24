import MerchantsComponent from "@/components/customer/merchants/MerchantsPage";
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function MerchantsPage() {
    return (
        <main className="container mx-auto my-[50px] md:my-[80px] xl:my-[100px] md:mb-[80px] xl:mb-[100px] bg-khotixs-background-white dark:bg-khotixs-background-dark">
            <MerchantsComponent/>
        </main>
    );
}