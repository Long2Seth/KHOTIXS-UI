import '../globals.css';
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import {ThemeProvider} from "next-themes";
import {FooterComponent} from "@/components/customer/footer/FooterComponent";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/customer/home/ScrollToTopButton";
import StoreProvider from "@/app/StoreProvider";
import {TicketProvider} from "@/context/TicketContext";
import {UserProvider} from "@/context/UserContext";
import {QRProvider} from "@/context/QRContext";
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
                <TicketProvider>
                    <UserProvider>
                        <QRProvider>
                            <Toaster position="top-right" reverseOrder={false} />
                            {children}
                        </QRProvider>
                    </UserProvider>
                </TicketProvider>
                <FooterComponent/>
                <ScrollToTopButton/>
            </ThemeProvider>
        </StoreProvider>
        </body>
        </html>
    );
}