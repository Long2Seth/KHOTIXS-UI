import type {Metadata} from "next";
import "../globals.css";
import {ThemeProvider} from "next-themes";
import {Toaster} from "@/components/ui/toaster";
import FooterOrganizer from "@/components/organizer/FooterOrganizer";
import NavbarOrganizerComponent from "@/components/organizer/NavbarOrganizerComponent";
import CategoriesOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";
import React from "react";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className=" bg-khotixs-background-white dark:bg-khotixs-background-dark ">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <NavbarOrganizerComponent/>
            <CategoriesOrganizerComponent/>
                {children}
            <FooterOrganizer/>
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
