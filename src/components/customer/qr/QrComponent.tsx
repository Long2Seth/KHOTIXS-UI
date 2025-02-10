"use client"

import { QRCodeCanvas } from "qrcode.react"
import { useGetQRCodeQuery } from "@/redux/feature/user/qrCode/QrCode"

type QRCodeGeneratorProps = {
    orderId: string
    userId: string
    total: number
}

let t = 0;

export default function QRCodeGenerator({ orderId, userId, total }: QRCodeGeneratorProps) {
    console.log(" T : " , t)
    t =total;

    console.log("  T! : " , t);
    const { data } = useGetQRCodeQuery({
        accountId: "proeung_chiso@aclb",
        acquiringBank: "Acleda Bank Plc.",
        amount: t,
        userId: userId,
        orderId: orderId,
    })

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <QRCodeCanvas
                value={data?.data.qr || ""}
                size={200}
                imageSettings={{
                    src: "https://api.nuget.org/v3-flatcontainer/kh.org.nbc.bakongkhqr/1.0.0.9/icon",
                    height: 35,
                    width: 35,
                    opacity: 1,
                    excavate: true,
                }}
            />
        </div>
    )
}