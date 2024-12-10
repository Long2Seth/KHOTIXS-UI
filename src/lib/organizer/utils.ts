import { payments } from "./tablePaymentData"

export function calculateRevenue() {
    const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0)
    const averageRevenue = totalRevenue / payments.length

    return {
        totalRevenue: totalRevenue.toFixed(2),
        averageRevenue: averageRevenue.toFixed(2)
    }
}