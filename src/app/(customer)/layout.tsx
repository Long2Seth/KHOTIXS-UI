import '../globals.css';
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import {ThemeProvider} from "next-themes";
import {FooterComponent} from "@/components/customer/footer/FooterComponent";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/customer/home/ScrollToTopButton";
import StoreProvider from "@/app/StoreProvider";
import GoogleAnalytics from "@/components/google/GoogleAnalytics";
import React from "react";
import type { Metadata } from "next";

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
                url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                alt: 'KHOTIXS',
            },
        ],
    },
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-khotixs-background-white dark:bg-khotixs-background-dark">
        <GoogleAnalytics/>
        <StoreProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <NavbarComponent/>
                            <Toaster position="top-right" reverseOrder={false} />
                            {children}
                <FooterComponent/>
                <ScrollToTopButton/>
            </ThemeProvider>
        </StoreProvider>
        </body>
        </html>
    );
}