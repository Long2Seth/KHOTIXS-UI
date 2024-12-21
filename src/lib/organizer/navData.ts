import {BellDot, Calendar, CreditCard, Database, FileText} from 'lucide-react'
import {RiBarChartBoxAiLine } from "react-icons/ri";

export const navItems = [
    {icon: RiBarChartBoxAiLine, label: "DASHBOARD", link: "/organizer"},
    {icon: Calendar, label: "EVENT", link: "/organizer/events"},
    {icon: CreditCard, label: "REVENUE | PAYMENT", link: "/organizer/payment&revenue"},
    {icon: Database, label: "ORDER DATA", link: "/organizer/order"},
    {icon: FileText, label: "ATTENDANCE", link: "/organizer/attendance"},
    {icon: BellDot, label: "NOTIFICATIONS", badge: "5", link: "/organizer/notification"},
]

