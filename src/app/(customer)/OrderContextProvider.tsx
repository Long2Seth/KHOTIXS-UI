// OrderContextProvider.tsx
"use client"

import React, { createContext, useState, ReactNode } from 'react';

type OrderContextType = {
    orderInfo: {
        fullName: string | null;
        email: string | null;
        phoneNumber: string | null;
    };
    setOrderInfo: React.Dispatch<React.SetStateAction<any>>;
};

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
    const [orderInfo, setOrderInfo] = useState({
        fullName: null,
        email: null,
        phoneNumber: null,
    });

    return (
        <OrderContext.Provider value={{ orderInfo, setOrderInfo }}>
            {children}
        </OrderContext.Provider>
    );
};
