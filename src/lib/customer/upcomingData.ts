type Event = {
    image: string;
    date: string;
    title: string;
    location: string;
    price: number;
    labelType: string;
    eventType: string;
};
export const upcomingData: Event[] = [
    {
        image: "/cover.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A GRAND CELEBRATION OF MUSIC AND ARTISTRY FEATURING AOK SOKUNKANHA",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        price: 0,
        labelType: "FREE",
        eventType: "UPCOMING"
    },
    {
        image: "/event/home-upcoming.png",
        date: "2024-12-04",
        title: "Event Four: A Symphony of Sound and Light in the Heart of Sydney",
        location: "Sydney, Australia - Sydney Opera House, an architectural marvel hosting a breathtaking regular concert experience.",
        price: 400,
        labelType: "VIP",
        eventType: "UPCOMING"
    },
];

export const eventData: Event[] = [
    // TECHNOLOGY
    {
        image: "/event/technology-one.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        price: 0,
        labelType: "FREE",
        eventType: "CONCERTS"
    },
    {
        image: "/event/technology-two.png",
        date: "2024-12-02",
        title: "Legends Unite: A Grand Musical Reunion",
        location: "London, UK - The O2 Arena, where timeless voices come together in harmony.",
        price: 250,
        labelType: "VIP",
        eventType: "CONCERTS"
    },
    {
        image: "/event/technology-tree.png",
        date: "2024-12-03",
        title: "Asian Symphony: Traditional and Modern Fusion",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, a showcase of cultural artistry.",
        price: 300,
        labelType: "PREMIUM",
        eventType: "CONCERTS"
    },

    // CONCERTS
    {
        image: "/event/concert-one.png",
        date: "2024-12-05",
        title: "Tech Summit 2024: Innovations Shaping the Future",
        location: "San Francisco, USA - Moscone Center, the hub of technology discussions.",
        price: 500,
        labelType: "PREMIUM",
        eventType: "TECHNOLOGY"
    },
    {
        image: "/event/concert-two.png",
        date: "2024-12-06",
        title: "AI Workshop: Practical Applications of Artificial Intelligence",
        location: "Austin, USA - Austin Convention Center, for hands-on learning.",
        price: 200,
        labelType: "PREMIUM",
        eventType: "TECHNOLOGY"
    },
    {
        image: "/cover.png",
        date: "2024-12-07",
        title: "Cybersecurity Conference: Protecting the Digital Future",
        location: "Berlin, Germany - Messe Berlin, for cutting-edge security solutions.",
        price: 350,
        labelType: "REGULAR",
        eventType: "TECHNOLOGY"
    },

    // SPORT
    {
        image: "/event/sport-one.png",
        date: "2024-12-08",
        title: "Sports Gala: Celebrating Excellence in Athletics",
        location: "Paris, France - Stade de France, honoring sporting legends.",
        price: 150,
        labelType: "REGULAR",
        eventType: "SPORT"
    },
    {
        image: "/event/sport-two.png",
        date: "2024-12-09",
        title: "World Championship Finals",
        location: "Madrid, Spain - Santiago Bernabéu Stadium, showcasing elite athletes.",
        price: 200,
        labelType: "PREMIUM",
        eventType: "SPORT"
    },
    {
        image: "/cover.png",
        date: "2024-12-10",
        title: "International Marathon: Run for a Cause",
        location: "Boston, USA - Starting at Boston Common.",
        price: 50,
        labelType: "REGULAR",
        eventType: "SPORT"
    },


    // COMMUNITY
    {
        image: "/event/community-one.png",
        date: "2024-12-11",
        title: "Community Fest: Building Connections and Sharing Joy",
        location: "Berlin, Germany - Tiergarten, celebrating culture and togetherness.",
        price: 0,
        labelType: "FREE",
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-two.png",
        date: "2024-12-12",
        title: "Community Clean-Up Drive",
        location: "Cape Town, South Africa - Table Mountain, for environmental care.",
        price: 0,
        labelType: "FREE",
        eventType: "COMMUNITY"
    },
    {
        image: "/event/community-tree.png",
        date: "2024-12-13",
        title: "Culture Day: Showcasing Local Heritage and Traditions",
        location: "Bangkok, Thailand - Lumphini Park, celebrating community diversity.",
        price: 20,
        labelType: "REGULAR",
        eventType: "COMMUNITY"
    },

    // CONFERENCES AND SEMINARS
    {
        image: "/event/conferences-seminars01.png",
        date: "2024-12-14",
        title: "Leadership Conference 2024: Empowering Change",
        location: "Singapore - Marina Bay Sands, for innovative ideas.",
        price: 700,
        labelType: "VIP",
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars02.png",
        date: "2024-12-15",
        title: "Healthcare Seminar: Advancing Global Wellbeing",
        location: "Toronto, Canada - Metro Toronto Convention Centre.",
        price: 300,
        labelType: "PREMIUM",
        eventType: "CONFERENCES AND SEMINARS"
    },
    {
        image: "/event/conferences-seminars03.png",
        date: "2024-12-16",
        title: "Education Seminar: Innovating for the Future",
        location: "Melbourne, Australia - Melbourne Convention and Exhibition Centre.",
        price: 250,
        labelType: "REGULAR",
        eventType: "CONFERENCES AND SEMINARS"
    },

    // GENERAL
    {
        image: "/event/general01.png",
        date: "2024-12-17",
        title: "General Meetup: Exploring Opportunities and Networking",
        location: "Mumbai, India - Gateway of India.",
        price: 100,
        labelType: "REGULAR",
        eventType: "GENERAL"
    },
    {
        image: "/event/general02.png",
        date: "2024-12-18",
        title: "Fundraiser Gala: Making a Difference",
        location: "Rome, Italy - Villa Borghese Gardens.",
        price: 300,
        labelType: "PREMIUM",
        eventType: "GENERAL"
    },
    {
        image: "/event/general03.png",
        date: "2024-12-19",
        title: "New Year's Gala: Welcoming 2025 with Elegance",
        location: "Dubai, UAE - Burj Khalifa, for an unforgettable celebration.",
        price: 400,
        labelType: "VIP",
        eventType: "GENERAL"
    }
];