type NotificationType = {
    id: string;
    userImage: string;
    userName: string;
    eventName: string;
    eventType: string;
    qty: number;
    price: number;
    description: string;
    date: string;
    status: string;
};

export const NotificationData: NotificationType[] = [
    {
        id: "1",
        userImage: "/images/cher-pheng.jpg",
        userName: "Alice",
        eventName: "Tech Conference 2024",
        eventType: "VIP",
        qty: 1,
        price: 500,
        description: "Tech Conference 2024 - VIP",
        date: "2024-01-15",
        status: "pending"
    },
    {
        id: "2",
        userImage: "/images/sophanmai.JPG",
        userName: "Bob",
        eventName: "Live Music Concert",
        eventType: "Regular",
        qty: 2,
        price: 200,
        description: "Live Music Concert - Regular",
        date: "2024-02-20",
        status: "approved"
    },
    {
        id: "3",
        userImage: "/images/seakngim.jpg",
        userName: "Charlie",
        eventName: "Food Festival",
        eventType: "Regular",
        qty: 1,
        price: 100,
        description: "Food Festival - Regular",
        date: "2024-03-10",
        status: "rejected"
    },
    {
        id: "4",
        userImage: "/images/cher-pheng.jpg",
        userName: "Diana",
        eventName: "Startup Summit 2024",
        eventType: "Premium",
        qty: 1,
        price: 300,
        description: "Startup Summit 2024 - Premium",
        date: "2024-04-05",
        status: "pending"
    },
    {
        id: "5",
        userImage: "/images/chhaya.jpg",
        userName: "Ethan",
        eventName: "Marathon 2024",
        eventType: "VIP",
        qty: 3,
        price: 750,
        description: "Marathon 2024 - VIP",
        date: "2024-05-15",
        status: "approved"
    },
    {
        id: "6",
        userImage: "/images/chiso.jpg",
        userName: "Fiona",
        eventName: "Tech Workshop",
        eventType: "Regular",
        qty: 1,
        price: 150,
        description: "Tech Workshop - Regular",
        date: "2024-06-20",
        status: "pending"
    },
    {
        id: "7",
        userImage: "/images/piseth.jpg",
        userName: "Greg",
        eventName: "Knowledge Fair 2024",
        eventType: "Regular",
        qty: 4,
        price: 200,
        description: "Knowledge Fair 2024 - Regular",
        date: "2024-07-01",
        status: "approved"
    },
    {
        id: "8",
        userImage: "/images/soknem.jpg",
        userName: "Helen",
        eventName: "Sports Meet 2024",
        eventType: "Premium",
        qty: 2,
        price: 400,
        description: "Sports Meet 2024 - Premium",
        date: "2024-08-10",
        status: "pending"
    },
    {
        id: "9",
        userImage: "/images/chhaya.jpg",
        userName: "Isabella",
        eventName: "Clean-Up Drive 2024",
        eventType: "Free",
        qty: 5,
        price: 0,
        description: "Clean-Up Drive 2024 - Free",
        date: "2024-09-15",
        status: "approved"
    },
    {
        id: "10",
        userImage: "/images/cher-pheng.jpg",
        userName: "James",
        eventName: "Tech Summit",
        eventType: "VIP",
        qty: 1,
        price: 600,
        description: "Tech Summit - VIP",
        date: "2024-10-25",
        status: "rejected"
    },
    {
        id: "11",
        userImage: "/images/kate.jpg",
        userName: "Kate",
        eventName: "Cultural Fest 2024",
        eventType: "Regular",
        qty: 2,
        price: 80,
        description: "Cultural Fest 2024 - Regular",
        date: "2024-11-12",
        status: "pending"
    },
    {
        id: "12",
        userImage: "/images/luke.jpg",
        userName: "Luke",
        eventName: "Winter Gala 2024",
        eventType: "Premium",
        qty: 3,
        price: 450,
        description: "Winter Gala 2024 - Premium",
        date: "2024-12-20",
        status: "approved"
    }
];
