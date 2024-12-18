type TicketType = {
    id: string;
    ticketName: string;
    ticketType: string;
    price: number;
    quantity: number;
    status: string;
}

type EventType = {
    id: string;
    createBy: string;
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    status: string;
    image: string;
    description: string;
    category: string;
    tickets: TicketType[];
}

export const AllEventData: EventType[] = [
    {
        id: "1",
        createBy: "Alice",
        eventName: "Tech Conference 2024",
        startDate: "2024-01-15",
        endDate: "2024-01-15",
        location: "San Francisco, CA",
        status: "disable",
        image: "/cover.png",
        description: "Join us for the Tech Conference 2024 in San Francisco, CA. This event will bring together industry leaders, innovators, and enthusiasts to discuss the latest trends and advancements in technology.",
        category: "Technology",
        tickets: [
            {id: "101", ticketName: "VIP Pass", ticketType: "VIP", price: 500, quantity: 50, status: "available"},
            {
                id: "102",
                ticketName: "Premium Pass",
                ticketType: "PREMIUM",
                price: 300,
                quantity: 100,
                status: "available"
            },
            {
                id: "103",
                ticketName: "Regular Pass",
                ticketType: "REGULAR",
                price: 100,
                quantity: 200,
                status: "available"
            }
        ]
    },
    {
        id: "2",
        createBy: "Bob",
        eventName: "Live Music Concert",
        startDate: "2024-02-20",
        endDate: "2024-02-20",
        location: "Austin, TX",
        status: "enable",
        image: "/cover.png",
        description: "Experience the best live music from top artists in Austin. A night of great music, food, and memories awaits.",
        category: "Concert",
        tickets: [
            {id: "201", ticketName: "Free Entry", ticketType: "FREE", price: 0, quantity: 500, status: "available"},
            {
                id: "202",
                ticketName: "Regular Pass",
                ticketType: "REGULAR",
                price: 50,
                quantity: 300,
                status: "available"
            }
        ]
    },
    {
        id: "3",
        createBy: "Charlie",
        eventName: "Startup Pitch Day",
        startDate: "2024-04-12",
        endDate: "2024-04-12",
        location: "New York, NY",
        status: "enable",
        image: "/cover.png",
        description: "Showcase your startup ideas and get valuable feedback from investors and industry leaders.",
        category: "Business",
        tickets: [
            {
                id: "301",
                ticketName: "General Admission",
                ticketType: "REGULAR",
                price: 50,
                quantity: 200,
                status: "available"
            },
            {
                id: "302",
                ticketName: "Investor Pass",
                ticketType: "PREMIUM",
                price: 200,
                quantity: 50,
                status: "available"
            }
        ]
    },
    {
        id: "4",
        createBy: "Diana",
        eventName: "Cooking Masterclass",
        startDate: "2024-03-05",
        endDate: "2024-03-05",
        location: "Los Angeles, CA",
        status: "enable",
        image: "/cover.png",
        description: "Learn cooking techniques from world-renowned chefs in a hands-on workshop.",
        category: "Lifestyle",
        tickets: [
            {
                id: "401",
                ticketName: "Standard Pass",
                ticketType: "REGULAR",
                price: 80,
                quantity: 150,
                status: "available"
            },
            {id: "402", ticketName: "VIP Experience", ticketType: "VIP", price: 250, quantity: 30, status: "available"}
        ]
    },
    {
        id: "5",
        createBy: "Ethan",
        eventName: "Marathon 2024",
        startDate: "2024-05-15",
        endDate: "2024-05-15",
        location: "Chicago, IL",
        status: "enable",
        image: "/cover.png",
        description: "Join the annual marathon event. Run for a cause and enjoy a day filled with energy and sportsmanship.",
        category: "Sport",
        tickets: [
            {
                id: "501",
                ticketName: "Participant Pass",
                ticketType: "REGULAR",
                price: 20,
                quantity: 1000,
                status: "available"
            },
            {id: "502", ticketName: "Observer Pass", ticketType: "FREE", price: 0, quantity: 500, status: "available"}
        ]
    },
    {
        id: "6",
        createBy: "Fiona",
        eventName: "Art Exhibition 2024",
        startDate: "2024-06-20",
        endDate: "2024-06-25",
        location: "Boston, MA",
        status: "enable",
        image: "/cover.png",
        description: "Immerse yourself in stunning artworks by contemporary artists from around the world.",
        category: "Art",
        tickets: [
            {
                id: "601",
                ticketName: "Standard Entry",
                ticketType: "REGULAR",
                price: 25,
                quantity: 300,
                status: "available"
            },
            {
                id: "602", ticketName: "VIP Preview", ticketType: "VIP", price: 100, quantity: 50, status: "available"
            }
        ]
    },
    {
        id: "7",
        createBy: "Helen",
        eventName: "Yoga Retreat",
        startDate: "2024-07-10",
        endDate: "2024-07-12",
        location: "Denver, CO",
        status: "enable",
        image: "/cover.png",
        description: "Unwind and rejuvenate with a weekend of yoga, meditation, and nature.",
        category: "Wellness",
        tickets: [
            {
                id: "701",
                ticketName: "Single Day Pass",
                ticketType: "REGULAR",
                price: 50,
                quantity: 100,
                status: "available"
            },
            {
                id: "702",
                ticketName: "Full Retreat",
                ticketType: "PREMIUM",
                price: 200,
                quantity: 50,
                status: "available"
            }
        ]
    },
    {
        id: "8",
        createBy: "Greg",
        eventName: "Science Fair 2024",
        startDate: "2024-08-25",
        endDate: "2024-08-27",
        location: "Seattle, WA",
        status: "enable",
        image: "/cover.png",
        description: "Explore fascinating scientific innovations and projects by students and professionals.",
        category: "Science",
        tickets: [
            {
                id: "801",
                ticketName: "Standard Pass",
                ticketType: "REGULAR",
                price: 15,
                quantity: 500,
                status: "available"
            },
            {id: "802", ticketName: "VIP Access", ticketType: "VIP", price: 100, quantity: 20, status: "available"}
        ]
    }
];
