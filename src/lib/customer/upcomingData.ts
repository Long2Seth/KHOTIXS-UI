type Event = {
    image: string;
    date: string;
    title: string;
    location: string;
    price: number;
    labelType: string;
};
export const upcomingData: Event[] = [
    {
        image: "/cover.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A GRAND CELEBRATION OF MUSIC AND ARTISTRY FEATURING AOK SOKUNKANHA",
        location: "New York, USA - Madison Square Garden, one of the most iconic venues in the world, hosting a spectacular evening of unparalleled musical performances and artistic excellence.",
        price: 0,
        labelType: "FREE"
    },
    {
        image: "/cover.png",
        date: "2024-12-02",
        title: "Event Two: An Exclusive Gathering for Music Enthusiasts Featuring Renowned Artists from Around the Globe",
        location: "London, UK - The Royal Albert Hall, known for its grandeur and rich history, setting the stage for an unforgettable VIP experience.",
        price: 200,
        labelType: "VIP"
    },
    {
        image: "/cover.png",
        date: "2024-12-03",
        title: "Event Three: A Cultural Extravaganza Showcasing the Best of Asian Music and Dance",
        location: "Tokyo, Japan - Tokyo Dome, a state-of-the-art arena providing an electrifying atmosphere for audiences worldwide.",
        price: 300,
        labelType: "PREMIUM"
    },
    {
        image: "/cover.png",
        date: "2024-12-04",
        title: "Event Four: A Symphony of Sound and Light in the Heart of Sydney",
        location: "Sydney, Australia - Sydney Opera House, an architectural marvel hosting a breathtaking regular concert experience.",
        price: 400,
        labelType: "REGULAR"
    },
];

export const generalData: Event[] = [
    {
        image: "/cover.png",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A Night of Melodies and Memories in the City of Dreams",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        price: 0,
        labelType: "FREE"
    },
    {
        image: "/cover.png",
        date: "2024-12-02",
        title: "Event Two: A Gala Night Honoring Legends of Music Across Generations",
        location: "London, UK - The O2 Arena, a premier venue for spectacular events and unforgettable experiences.",
        price: 200,
        labelType: "VIP"
    },
    {
        image: "/cover.png",
        date: "2024-12-03",
        title: "Event Three: A Fusion of Traditional and Modern Tunes in the Heart of Asia",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, an iconic cultural hub at the forefront of innovation and artistry.",
        price: 300,
        labelType: "PREMIUM"
    }
];