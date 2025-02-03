import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import FooterOrganizer from "@/components/organizer/navbar/FooterOrganizer";
import NavbarOrganizerComponent from "@/components/organizer/navbar/NavbarOrganizerComponent";
import React from "react";
import StoreProvider from "@/app/StoreProvider";
import GoogleAnalytics from "@/components/google/GoogleAnalytics";
import CategoriesOrganizerComponent from "@/components/organizer/navbar/categoriesOrganizerComponent";

export const metadata: Metadata = {
    title: {
        template: "%s - KHOTIXS",
        default: "KHOTIXS - Buy and Sell Event Tickets Online",
    },
    description: "Welcome to KHOTIXS, the best place to buy and sell tickets for events online.",
    keywords: ["event tickets", "buy tickets online", "sell tickets", "event organizers", "ticket buyers"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-khotixs-background-white dark:bg-khotixs-background-dark">
        <GoogleAnalytics />
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <StoreProvider>
                <NavbarOrganizerComponent />
                <CategoriesOrganizerComponent />
                <Toaster position="top-right" reverseOrder={false} />
                {children}
                <FooterOrganizer />
            </StoreProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}