"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the Ticket type
type TicketDetail = {
    reserveTickets: any[]; // You can replace `any` with a proper ticket type
    total: number;
};

// Define the context type
interface TicketContextType {
    ticket: TicketDetail;
    setTicket: (tickets: TicketDetail) => void;
}

// Create the context with a default value of null
const TicketContext = createContext<TicketContextType | null>(null);

// Create a provider component
export const TicketProvider = ({ children }: { children: ReactNode }) => {
    const [ticket, setTicket] = useState<TicketDetail>({ reserveTickets: [], total: 0 });

    return (
        <TicketContext.Provider value={{ ticket, setTicket }}>
    {children}
    </TicketContext.Provider>
);
};

// Custom hook to use the ticket context
export const useTicket = (): TicketContextType => {
    const context = useContext(TicketContext);
    if (!context) {
        throw new Error("useTicket must be used within a TicketProvider");
    }
    return context;
};
