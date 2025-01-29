import React from "react";
import "./globals.css"
import { Metadata } from "next";

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
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}