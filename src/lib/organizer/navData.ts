import { BellDot, Calendar, CreditCard, Database, FileText } from 'lucide-react'

export const navItems = [
    { icon: Calendar, label: "EVENT" , link: "/organizer/events/detail-event"},
    { icon: CreditCard, label: "REVENUE | PAYMENT" ,link: "/organizer/payment&revenue"},
    { icon: Database, label: "ORDER DATA" , link: "/organizer/order"},
    { icon: FileText, label: "ATTENDANCE" , link: "/organizer/attendance"},
    { icon: BellDot, label: "NOTIFICATIONS", badge: "5" ,link: "/organizer/notifications" },
]

