import type {Metadata} from "next";
import '../globals.css';
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import {ThemeProvider} from "next-themes";
import {FooterComponent} from "@/components/customer/footer/FooterComponent";
import {Toaster} from "@/components/ui/toaster"
import ScrollToTopButton from "@/components/customer/home/ScrollToTopButton";
import StoreProvider from "@/app/StoreProvider";

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