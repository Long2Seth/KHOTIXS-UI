import { Card, CardContent } from "@/components/ui/card"
import { calculateRevenue } from "@/lib/organizer/utils"

export default function RevenueDashboard() {
    const { totalRevenue, averageRevenue } = calculateRevenue()

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#4A0635]">REVENUE</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground">
                                TOTAL REVENUE
                            </p>
                            <p className="text-4xl font-bold tracking-tight">$ {totalRevenue}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground">
                                TOTAL REVENUE (AVG)
                            </p>
                            <p className="text-4xl font-bold tracking-tight">$ {averageRevenue}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

