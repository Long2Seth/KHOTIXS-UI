import '../globals.css';
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import {ThemeProvider} from "next-themes";
import {FooterComponent} from "@/components/customer/footer/FooterComponent";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/customer/home/ScrollToTopButton";
import StoreProvider from "@/app/StoreProvider";
import GoogleAnalytics from "@/components/google/GoogleAnalytics";
import React from "react";

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