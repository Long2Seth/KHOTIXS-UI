enum TicketType {
    REGULAR = 'REGULAR',
    VIP = 'VIP',
    PREMIUM = 'PREMIUM'
}

type Ticket = {
    id: string;
    ticketTitle: string;
    type: TicketType;
    price: string;
    capacity: number;
    isPublish: boolean;
    isDisplay: boolean;
    isSoldOut: boolean;
};

type Event = {
    image: string;
    date: string;
    title: string;
    location: string;
    tickets: Ticket[];
    eventType: string;
};


export const upcomingData: Event[] = [
    {
        image: "/cover.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        tickets: [
            {
                id: "92a4ed92-5f07-4f28-a5d0-ff02c0f8467b",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "b2a4ed92-5f07-4f28-a5d0-ff02c0f8467c",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "50.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "c3a4ed92-5f07-4f28-a5d0-ff02c0f8467d",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "100.00",
                capacity: 50,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "UPCOMING"
    },
    {
        image: "/event/home-upcoming.png",
        date: "2024-12-04",
        title: "Event Four: A Symphony of Sound and Light in the Heart of Sydney",
        location: "Sydney, Australia - Sydney Opera House, an architectural marvel hosting a breathtaking regular concert experience.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "UPCOMING"
    }
];

export const eventData: Event[] = [
    // TECHNOLOGY
    {
        image: "/event/technology-one.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-two.png",
        date: "2024-12-02",
        title: "Legends Unite: A Grand Musical Reunion",
        location: "London, UK - The O2 Arena, where timeless voices come together in harmony.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-tree.png",
        date: "2024-12-03",
        title: "Asian Symphony: Traditional and Modern Fusion",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, a showcase of cultural artistry.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-one.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-two.png",
        date: "2024-12-02",
        title: "Legends Unite: A Grand Musical Reunion",
        location: "London, UK - The O2 Arena, where timeless voices come together in harmony.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-tree.png",
        date: "2024-12-03",
        title: "Asian Symphony: Traditional and Modern Fusion",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, a showcase of cultural artistry.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-one.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-two.png",
        date: "2024-12-02",
        title: "Legends Unite: A Grand Musical Reunion",
        location: "London, UK - The O2 Arena, where timeless voices come together in harmony.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-tree.png",
        date: "2024-12-03",
        title: "Asian Symphony: Traditional and Modern Fusion",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, a showcase of cultural artistry.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-one.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-two.png",
        date: "2024-12-02",
        title: "Legends Unite: A Grand Musical Reunion",
        location: "London, UK - The O2 Arena, where timeless voices come together in harmony.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/technology-tree.png",
        date: "2024-12-03",
        title: "Asian Symphony: Traditional and Modern Fusion",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, a showcase of cultural artistry.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "TECHNOLOGY"
    },

    // CONCERT
    {
        image: "/event/concert-one.png",
        date: "2024-12-05",
        title: "Tech Summit 2024: Innovations Shaping the Future",
        location: "San Francisco, USA - Moscone Center, the hub of technology discussions.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/event/concert-two.png",
        date: "2024-12-06",
        title: "AI Workshop: Practical Applications of Artificial Intelligence",
        location: "Austin, USA - Austin Convention Center, for hands-on learning.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/cover.png",
        date: "2024-12-07",
        title: "Cybersecurity Conference: Protecting the Digital Future",
        location: "Berlin, Germany - Messe Berlin, for cutting-edge security solutions.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/event/concert-one.png",
        date: "2024-12-05",
        title: "Tech Summit 2024: Innovations Shaping the Future",
        location: "San Francisco, USA - Moscone Center, the hub of technology discussions.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/event/concert-two.png",
        date: "2024-12-06",
        title: "AI Workshop: Practical Applications of Artificial Intelligence",
        location: "Austin, USA - Austin Convention Center, for hands-on learning.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/cover.png",
        date: "2024-12-07",
        title: "Cybersecurity Conference: Protecting the Digital Future",
        location: "Berlin, Germany - Messe Berlin, for cutting-edge security solutions.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/event/concert-one.png",
        date: "2024-12-05",
        title: "Tech Summit 2024: Innovations Shaping the Future",
        location: "San Francisco, USA - Moscone Center, the hub of technology discussions.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/event/concert-two.png",
        date: "2024-12-06",
        title: "AI Workshop: Practical Applications of Artificial Intelligence",
        location: "Austin, USA - Austin Convention Center, for hands-on learning.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },
    {
        image: "/cover.png",
        date: "2024-12-07",
        title: "Cybersecurity Conference: Protecting the Digital Future",
        location: "Berlin, Germany - Messe Berlin, for cutting-edge security solutions.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONCERT"
    },

    // SPORT
    {
        image: "/event/sport-one.png",
        date: "2024-12-08",
        title: "Sports Gala: Celebrating Excellence in Athletics",
        location: "Paris, France - Stade de France, honoring sporting legends.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/event/sport-two.png",
        date: "2024-12-09",
        title: "World Championship Finals",
        location: "Madrid, Spain - Santiago Bernabéu Stadium, showcasing elite athletes.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/cover.png",
        date: "2024-12-10",
        title: "International Marathon: Run for a Cause",
        location: "Boston, USA - Starting at Boston Common.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/event/sport-one.png",
        date: "2024-12-08",
        title: "Sports Gala: Celebrating Excellence in Athletics",
        location: "Paris, France - Stade de France, honoring sporting legends.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/event/sport-two.png",
        date: "2024-12-09",
        title: "World Championship Finals",
        location: "Madrid, Spain - Santiago Bernabéu Stadium, showcasing elite athletes.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/cover.png",
        date: "2024-12-10",
        title: "International Marathon: Run for a Cause",
        location: "Boston, USA - Starting at Boston Common.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/event/sport-one.png",
        date: "2024-12-08",
        title: "Sports Gala: Celebrating Excellence in Athletics",
        location: "Paris, France - Stade de France, honoring sporting legends.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/event/sport-two.png",
        date: "2024-12-09",
        title: "World Championship Finals",
        location: "Madrid, Spain - Santiago Bernabéu Stadium, showcasing elite athletes.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },
    {
        image: "/cover.png",
        date: "2024-12-10",
        title: "International Marathon: Run for a Cause",
        location: "Boston, USA - Starting at Boston Common.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "SPORT"
    },


    // COMMUNITY
    {
        image: "/event/community-one.png",
        date: "2024-12-11",
        title: "Community Fest: Building Connections and Sharing Joy",
        location: "Berlin, Germany - Tiergarten, celebrating culture and togetherness.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-two.png",
        date: "2024-12-12",
        title: "Community Clean-Up Drive",
        location: "Cape Town, South Africa - Table Mountain, for environmental care.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-tree.png",
        date: "2024-12-13",
        title: "Culture Day: Showcasing Local Heritage and Traditions",
        location: "Bangkok, Thailand - Lumphini Park, celebrating community diversity.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-one.png",
        date: "2024-12-11",
        title: "Community Fest: Building Connections and Sharing Joy",
        location: "Berlin, Germany - Tiergarten, celebrating culture and togetherness.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-two.png",
        date: "2024-12-12",
        title: "Community Clean-Up Drive",
        location: "Cape Town, South Africa - Table Mountain, for environmental care.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-tree.png",
        date: "2024-12-13",
        title: "Culture Day: Showcasing Local Heritage and Traditions",
        location: "Bangkok, Thailand - Lumphini Park, celebrating community diversity.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-one.png",
        date: "2024-12-11",
        title: "Community Fest: Building Connections and Sharing Joy",
        location: "Berlin, Germany - Tiergarten, celebrating culture and togetherness.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-two.png",
        date: "2024-12-12",
        title: "Community Clean-Up Drive",
        location: "Cape Town, South Africa - Table Mountain, for environmental care.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-tree.png",
        date: "2024-12-13",
        title: "Culture Day: Showcasing Local Heritage and Traditions",
        location: "Bangkok, Thailand - Lumphini Park, celebrating community diversity.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "COMMUNITY"
    },

    // CONFERENCES AND SEMINARS
    {
        image: "/event/conferences-seminars01.png",
        date: "2024-12-14",
        title: "Leadership Conference 2024: Empowering Change",
        location: "Singapore - Marina Bay Sands, for innovative ideas.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars02.png",
        date: "2024-12-15",
        title: "Healthcare Seminar: Advancing Global Wellbeing",
        location: "Toronto, Canada - Metro Toronto Convention Centre.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars03.png",
        date: "2024-12-16",
        title: "Education Seminar: Innovating for the Future",
        location: "Melbourne, Australia - Melbourne Convention and Exhibition Centre.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars01.png",
        date: "2024-12-14",
        title: "Leadership Conference 2024: Empowering Change",
        location: "Singapore - Marina Bay Sands, for innovative ideas.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars02.png",
        date: "2024-12-15",
        title: "Healthcare Seminar: Advancing Global Wellbeing",
        location: "Toronto, Canada - Metro Toronto Convention Centre.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars03.png",
        date: "2024-12-16",
        title: "Education Seminar: Innovating for the Future",
        location: "Melbourne, Australia - Melbourne Convention and Exhibition Centre.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars01.png",
        date: "2024-12-14",
        title: "Leadership Conference 2024: Empowering Change",
        location: "Singapore - Marina Bay Sands, for innovative ideas.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars02.png",
        date: "2024-12-15",
        title: "Healthcare Seminar: Advancing Global Wellbeing",
        location: "Toronto, Canada - Metro Toronto Convention Centre.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars03.png",
        date: "2024-12-16",
        title: "Education Seminar: Innovating for the Future",
        location: "Melbourne, Australia - Melbourne Convention and Exhibition Centre.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "CONFERENCES AND SEMINARS"
    },

    // GENERAL
    {
        image: "/event/general01.png",
        date: "2024-12-17",
        title: "General Meetup: Exploring Opportunities and Networking",
        location: "Mumbai, India - Gateway of India.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general02.png",
        date: "2024-12-18",
        title: "Fundraiser Gala: Making a Difference",
        location: "Rome, Italy - Villa Borghese Gardens.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general03.png",
        date: "2024-12-19",
        title: "New Year's Gala: Welcoming 2025 with Elegance",
        location: "Dubai, UAE - Burj Khalifa, for an unforgettable celebration.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general01.png",
        date: "2024-12-17",
        title: "General Meetup: Exploring Opportunities and Networking",
        location: "Mumbai, India - Gateway of India.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general02.png",
        date: "2024-12-18",
        title: "Fundraiser Gala: Making a Difference",
        location: "Rome, Italy - Villa Borghese Gardens.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general03.png",
        date: "2024-12-19",
        title: "New Year's Gala: Welcoming 2025 with Elegance",
        location: "Dubai, UAE - Burj Khalifa, for an unforgettable celebration.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general01.png",
        date: "2024-12-17",
        title: "General Meetup: Exploring Opportunities and Networking",
        location: "Mumbai, India - Gateway of India.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general02.png",
        date: "2024-12-18",
        title: "Fundraiser Gala: Making a Difference",
        location: "Rome, Italy - Villa Borghese Gardens.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    },
    {
        image: "/event/general03.png",
        date: "2024-12-19",
        title: "New Year's Gala: Welcoming 2025 with Elegance",
        location: "Dubai, UAE - Burj Khalifa, for an unforgettable celebration.",
        tickets: [
            {
                id: "d4a4ed92-5f07-4f28-a5d0-ff02c0f8467e",
                ticketTitle: "free",
                type: TicketType.REGULAR,
                price: "0.00",
                capacity: 0,
                isPublish: false,
                isDisplay: false,
                isSoldOut: false
            },
            {
                id: "e5a4ed92-5f07-4f28-a5d0-ff02c0f8467f",
                ticketTitle: "paid",
                type: TicketType.VIP,
                price: "75.00",
                capacity: 200,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            },
            {
                id: "f6a4ed92-5f07-4f28-a5d0-ff02c0f8467g",
                ticketTitle: "premium",
                type: TicketType.PREMIUM,
                price: "150.00",
                capacity: 100,
                isPublish: true,
                isDisplay: true,
                isSoldOut: false
            }
        ],
        eventType: "GENERAL"
    }
];