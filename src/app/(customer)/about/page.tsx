import AboutUsComponent from "@/components/customer/aboutus/AboutUsComponent";
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function About() {
    return (
        <main className="flex flex-col dark:bg-khotixs-background-dark">

            <AboutUsComponent/>

        </main>
    );
}