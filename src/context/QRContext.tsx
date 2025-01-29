"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QR {
    qrData: string;
    md5Hash: string;
}

interface QRContextType {
    qr: QR | null;
    setQR: (qr: QR) => void;
}

const QRContext = createContext<QRContextType | undefined>(undefined);

export const QRProvider = ({ children }: { children: ReactNode }) => {
    const [qr, setQR] = useState<QR | null>(null);

    return (
        <QRContext.Provider value={{ qr, setQR }}>
            {children}
        </QRContext.Provider>
    );
};

export const useQRContext = () => {
    const context = useContext(QRContext);
    if (!context) {
        throw new Error("useQRContext must be used within a QRProvider");
    }
    return context;
};
