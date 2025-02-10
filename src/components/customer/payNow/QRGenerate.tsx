"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import QRCodeGenerator from "@/components/customer/qr/QrComponent";

export default function QRGenerate() {
    return (
        <div className="max-w-sm mx-auto p-4">
            <Card className="overflow-hidden">
                <CardHeader className="bg-red-600 p-4">
                    <h2 className="text-2xl font-bold text-white">KHQR</h2>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                        {/*{ticket.reserveTickets.map((e: any, index: number) => (*/}
                        {/*    <p key={index} className="text-sm text-gray-500">{e.event}</p>*/}
                        {/*))}*/}

                        {/*<p className="text-3xl font-bold">*/}
                        {/*    {ticket.total} <span className="text-gray-500">$</span>*/}
                        {/*</p>*/}


                    </div>

                    <div className="border-t border-dashed my-4" />

                    <div className="flex justify-center p-4">
                        <QRCodeGenerator/>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

