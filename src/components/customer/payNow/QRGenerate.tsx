"use client"

import { QRCodeCanvas } from "qrcode.react"
import { useGetQRCodeQuery } from "@/redux/feature/user/qrCode/QrCode"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useSelector } from "react-redux"
import { RootState} from "@/lib/store";

export default function QRGenerate() {
    const orderResponse = useSelector((state: RootState) => state.orderResponse.orderResponse)


    const { data } = useGetQRCodeQuery({
        accountId: "proeung_chiso@aclb",
        acquiringBank: "Acleda Bank Plc.",
        amount: orderResponse?.total || 0,
        userId: orderResponse?.userId || "",
        orderId: orderResponse?.orderId || "",
    })

    return (
        <div className="max-w-sm mx-auto p-4">
            <Card className="overflow-hidden border rounded-[5px] bg-white bg-opacity-50">
                <CardHeader className="bg-red-600 p-4">
                    <h2 className="text-2xl font-bold text-white">KHQR</h2>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    <div className="flex justify-center p-4">
                        <QRCodeCanvas
                            value={data?.data.qr || ""}
                            size={250}
                            imageSettings={{
                                src: "/khotixs_logo.png",
                                height: 50,
                                width: 50,
                                opacity: 1,
                                excavate: true,
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}