import type { Metadata } from "next";
import '../globals.css';
import {ThemeWrapper} from "@/components/ThemeWrapper";

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
            <body className=" bg-khotixs-background-white dark:bg-khotixs-background-dark ">
                <ThemeWrapper>
                {children}
                </ThemeWrapper>
            </body>
        </html>
    );
}