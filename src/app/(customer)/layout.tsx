import type {Metadata} from "next";
import '../globals.css';
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import {ThemeProvider} from "next-themes";
import {FooterComponent} from "@/components/customer/footer/FooterComponent";
import {Toaster} from "@/components/ui/toaster"
import ScrollToTopButton from "@/components/customer/home/ScrollToTopButton";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
    metadataBase: new URL("https://khotixs.istad.co/"),
    manifest: "/manifest.json",
    title: {
        template: "%s - KHOTIXS",
        default: "KHOTIXS - Order your tickets, boost your sales, and experience the future of event management with KHOTIXS!",
    },
    description: "Welcome to KHOTIXS, the best place to buy and sell tickets for events online.",
    keywords: ["event tickets", "buy tickets online", "sell tickets", "event organizers", "ticket buyers"],
    category: 'Ticket Booking, Event Management, Technology',
    openGraph: {
        title: {
            template: "%s - KHOTIXS",
            default: "KHOTIXS - Order your tickets, boost your sales, and experience the future of event management with KHOTIXS!",
        },
        description: "Welcome to KHOTIXS, the best place to buy and sell tickets for events online.",
        siteName: 'KHOTIXS',
        images: [
            {
                url: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
                width: 494,
                height: 505,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: "%s - KHOTIXS",
            default: "KHOTIXS - Order your tickets, boost your sales, and experience the future of event management with KHOTIXS!",
        },
        description: "Welcome to KHOTIXS, the best place to buy and sell tickets for events online.",
        creator: '@KHOTIXS',
        images: 'https://khotixs.istad.co/asset/api/v1/files/view/37e026de-841f-40b6-a05d-d8254aa1057e.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className=" bg-khotixs-background-white dark:bg-khotixs-background-dark ">
        <StoreProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <NavbarComponent/>
                {children}
                <FooterComponent/>
                <Toaster/>
                <ScrollToTopButton/>
            </ThemeProvider>
        </StoreProvider>
        </body>
        </html>
    );
}