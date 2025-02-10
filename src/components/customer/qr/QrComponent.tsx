"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";

export default function QRCodeGenerator( ) {
    const [qrData, setQrData] = useState("");
    const [isExpired, setIsExpired] = useState(false);
    const EXPIRATION_TIME = 15000;

    const fetchQR = async () => {
        try {
            const response = await fetch("/payment-service/api/khqr/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "accountId": "proeung_chiso@aclb",
                    "acquiringBank": "Acleda Bank Plc.",
                    "amount": 100,
                    "userId": "123",
                    "orderId": ""
                })
            });

            const data = await response.json();
            setQrData(data?.data?.qr || "");
            setIsExpired(false);

            // Set expiration timer
            setTimeout(() => {
                setIsExpired(true);
            }, EXPIRATION_TIME);

        } catch (error) {
            console.error("Error fetching QR code:", error);
        }
    };

    useEffect(() => {
        fetchQR();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            {qrData && !isExpired ? (
                <QRCodeCanvas
                    value={qrData}
                    size={200}
                    imageSettings={{
                        src: "https://api.nuget.org/v3-flatcontainer/kh.org.nbc.bakongkhqr/1.0.0.9/icon",
                        height: 35,
                        width: 35,
                        opacity: 1,
                        excavate: true,
                    }}
                />
            ) : (
                <p className="text-gray-600">{isExpired ? "QR Code Expired" : "Loading QR Code..."}</p>
            )}

            <p className="text-sm text-gray-600">Scan the QR code to proceed</p>

            {isExpired && (
                <button
                    onClick={fetchQR}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Regenerate QR Code
                </button>
            )}
        </div>
    );
}
