"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import QRCode from "react-qr-code"
import {useTicket} from "@/context/TicketContext";
import {useQRContext} from "@/context/QRContext";

interface TicketProps {
    eventName?: string
    price?: number
    currency?: string
    qrValue?: string
}

export default function QRGenerate() {
    const {ticket} = useTicket()
    const { qr} = useQRContext()
    console.log(qr?.md5Hash)
    return (
        <div className="max-w-sm mx-auto p-4">
            <Card className="overflow-hidden">
                <CardHeader className="bg-red-600 p-4">
                    <h2 className="text-2xl font-bold text-white">KHQR</h2>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                        {ticket.reserveTickets.map((e:any,index:number)=> (
                            <p key={index} className="text-sm text-gray-500">{e.event}</p>
                        ))}

                            <p className="text-3xl font-bold">
                                {ticket.total} <span className="text-gray-500">$</span>
                            </p>


                    </div>

                    <div className="border-t border-dashed my-4"/>

                    <div className="flex justify-center p-4">
                        <img src={`data:image/png;base64,${qr?.qrData}`} />
                        {/*<QRCode*/}
                        {/*    value={qr ? "" : ""}*/}
                        {/*    size={200}*/}
                        {/*    style={{ height: "auto", maxWidth: "100%", width: "100%" }}*/}
                        {/*    viewBox={`0 0 256 256`}*/}
                        {/*/>*/}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

