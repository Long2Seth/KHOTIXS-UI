export type AttendanceEntry = {
    id: string;
    userName: string;
    gender: string;
    eventName: string;
    location: string;
    qty: number;
    ticketType: string;
    status: 'checked-in' | 'absent';
}

export const attendanceData: AttendanceEntry[] = [
    {
        id: "4435",
        userName: "PROEUNG CHISO",
        gender: "male",
        eventName: "THE VOICE KIDS CAMBODIA SEASON3",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "VIP",
        status: "checked-in"
    },
    {
        id: "3547",
        userName: "POV SOKNEM",
        gender: "male",
        eventName: "CAMBODIA'S PREMIER CULINARY AND HOSPITALITY EXPO, CAMFOOD & CAMHOTEL 2024",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "REGULAR",
        status: "checked-in"
    },
    {
        id: "4478",
        userName: "PHAL SOPHANMAI",
        gender: "female",
        eventName: "CELEBRATE COMBODIA'S 71 YEARS OF INDEPENDENCE",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "REGULAR",
        status: "absent"
    },
    {
        id: "8790",
        userName: "LOGN PISETH",
        gender: "male",
        eventName: "DEFIANT MISS GRAND CAMBODIA PLANS NEW EVENT AFTER EXPULSION FROM MISS GRAND INTERNATIONAL",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "REGULAR",
        status: "checked-in"
    },
    {
        id: "3548",
        userName: "POV SOKNEM",
        gender: "male",
        eventName: "CAMBODIA'S PREMIER CULINARY AND HOSPITALITY EXPO, CAMFOOD & CAMHOTEL 2024",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "PREMIUM",
        status: "checked-in"
    },
    {
        id: "4675",
        userName: "PROEUNG CHISO",
        gender: "male",
        eventName: "THIS YEAR'S SEA FESTIVAL TO BE HELD IN KAMPOT PROVINCE - KHMER TIMES",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "PREMIUM",
        status: "checked-in"
    },
    {
        id: "3549",
        userName: "POV SOKNEM",
        gender: "male",
        eventName: "CAMBODIA'S PREMIER CULINARY AND HOSPITALITY EXPO, CAMFOOD & CAMHOTEL 2024",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "FREE",
        status: "checked-in"
    },
    {
        id: "4676",
        userName: "PROEUNG CHISO",
        gender: "male",
        eventName: "THIS YEAR'S SEA FESTIVAL TO BE HELD IN KAMPOT PROVINCE - KHMER TIMES",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "PREMIUM",
        status: "checked-in"
    },
    {
        id: "3550",
        userName: "LOGN PISETH",
        gender: "male",
        eventName: "CAMBODIA'S PREMIER CULINARY AND HOSPITALITY EXPO, CAMFOOD & CAMHOTEL 2024",
        location: "PHNOM PENH",
        qty: 1,
        ticketType: "REGULAR",
        status: "checked-in"
    },
    {
        id: "5001",
        userName: "CHAN DARA",
        gender: "male",
        eventName: "ANGKOR WAT INTERNATIONAL HALF MARATHON",
        location: "SIEM REAP",
        qty: 2,
        ticketType: "VIP",
        status: "checked-in"
    }
];