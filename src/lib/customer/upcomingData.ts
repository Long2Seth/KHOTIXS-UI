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
        image: "/covers/cover.jpg",
        date: "2024-12-01",
        title: "THE Q - RISE OF THE QUEEN AOK SOKUNKANHA SOLO CONCERT: A GRAND CELEBRATION OF MUSIC AND ARTISTRY FEATURING AOK SOKUNKANHA",
        location: "New York, USA - Central Park, transforming into a magical realm of music and joy for an enchanting evening under the stars.",
        price: 0,
        labelType: "FREE"
    },
    {
        image: "/covers/cover1.png",
        date: "2024-12-04",
        title: "Event Four: A Symphony of Sound and Light in the Heart of Sydney",
        location: "Sydney, Australia - Sydney Opera House, an architectural marvel hosting a breathtaking regular concert experience.",
        price: 400,
        labelType: "VIP"
    },
    {
        image: "/covers/cover3.png",
        date: "2024-12-10",
        title: "Event Five: Jazz Nights Under the Golden Gate",
        location: "San Francisco, USA - Golden Gate Park, featuring world-class jazz performers in a serene outdoor setting.",
        price: 150,
        labelType: "GENERAL"
    },
    {
        image: "/covers/cover4.png",
        date: "2024-12-15",
        title: "Event Six: Winter Festive Classics with the Philharmonic",
        location: "Berlin, Germany - Berlin Philharmonie, showcasing a repertoire of festive classics in a world-renowned concert hall.",
        price: 100,
        labelType: "STANDARD"
    },
];

export const generalData: Event[] = [
    {
        image: "/covers/cover.png",
        date: "2024-12-02",
        title: "Event Two: A Gala Night Honoring Legends of Music Across Generations",
        location: "London, UK - The O2 Arena, a premier venue for spectacular events and unforgettable experiences.",
        price: 200,
        labelType: "VIP"
    },
    {
        image: "/covers/cover.png",
        date: "2024-12-03",
        title: "Event Three: A Fusion of Traditional and Modern Tunes in the Heart of Asia",
        location: "Tokyo, Japan - Shibuya Hikarie Hall, an iconic cultural hub at the forefront of innovation and artistry.",
        price: 300,
        labelType: "PREMIUM"
    },
    {
        image: "/covers/cover.png",
        date: "2024-12-07",
        title: "Event Seven: A Celebration of Dance and Music",
        location: "Paris, France - Palais Garnier, a stunning venue renowned for its rich cultural heritage and captivating performances.",
        price: 250,
        labelType: "VIP"
    },
    {
        image: "/covers/cover.png",
        date: "2024-12-09",
        title: "Event Eight: Indie Music Night Under the Stars",
        location: "Austin, USA - Zilker Park, hosting a vibrant night celebrating the best of indie music talent.",
        price: 50,
        labelType: "GENERAL"
    }
];
