import ContactUsComponent from "@/components/customer/contact/ContactUsComponent";
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function Contact() {
    return (
        <main className="flex flex-col dark:bg-khotixs-background-dark">
            <ContactUsComponent/>
        </main>
    );
}