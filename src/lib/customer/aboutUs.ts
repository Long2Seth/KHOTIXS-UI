type InfoPersonType = {
    icon: string; // Icon class name or image URL
    link: string; // Link to the social media profile
};

type PersonType = {
    image: string; // Image URL for the person
    name: string; // Name of the person
    info: InfoPersonType[]; // Optional social media links
};

export const MentorData: PersonType[] = [
    {
        image: "/cher-chhaya.png",
        name: "CHAN CHHAYA",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/it-chhaya" },
            { icon: "FaFacebook", link: "https://web.facebook.com/chhayadevkh" },
            { icon: "AiFillGoogleCircle", link: "https://github.com/it-chhaya" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://github.com/it-chhaya" }, // Update with actual Telegram link
        ],
    },
    {
        image: "/cher-pheng.png",
        name: "KIM CHANSOKPHENG",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/it-chhaya" },
            { icon: "FaFacebook", link: "https://web.facebook.com/chhayadevkh" },
            { icon: "AiFillGoogleCircle", link: "https://github.com/it-chhaya" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://github.com/it-chhaya" }, // Update with actual Telegram link
        ],
    },
];

export const MemberData: PersonType[] = [
    {
        image: "/images/chiso.jpg",
        name: "Proeung Chiso",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/ProeungChiso" },
            { icon: "FaFacebook", link: "https://www.facebook.com/seakngim.kptc" },
            { icon: "AiFillGoogleCircle", link: "mrr.chiso@gmail.com" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://t.me/seakngimphal" }, // Update with actual Telegram link
        ],
    },
    {
        image: "/images/seakngim.jpg",
        name: "Phal Seakngim",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/seakngim" },
            { icon: "FaFacebook", link: "https://www.facebook.com/seakngim.kptc" },
            { icon: "AiFillGoogleCircle", link: "seakngimsr37@gmail.com" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://t.me/seakngimphal" }, // Update with actual Telegram link
        ],
    },
    {
        image: "/images/sarandy.JPG",
        name: "Vuth Sarandy",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/VuthSarandy" },
            { icon: "FaFacebook", link: "https://www.facebook.com/profile.php?id=100094199570357" },
            { icon: "AiFillGoogleCircle", link: "sarandyvuth@gmail.com" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://t.me/Vsarandy" }, // Update with actual Telegram link
        ],
    },
    {
        image: "/images/sophanmai.JPG",
        name: "Phal Sophanmai",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/PhanmaiPhal" },
            { icon: "FaFacebook", link: "https://www.facebook.com/profile.php?id=100027122165536" },
            { icon: "AiFillGoogleCircle", link: "phannmai576@gmail.com" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://t.me/phalSophanmai" }, // Update with actual Telegram link
        ],
    },
    {
        image: "/images/piseth.jpg",
        name: "Long Piseth",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/Long2Seth" },
            { icon: "FaFacebook", link: "https://web.facebook.com/long.piseth.792" },
            { icon: "AiFillGoogleCircle", link: "longpiseth5555@gmail.com" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://t.me/L2SETH" }, // Update with actual Telegram link
        ],
    },
    {
        image: "/images/soknem.jpg",
        name: "POV Soknem",
        info: [
            { icon: "IoLogoGithub", link: "https://github.com/it-chhaya" },
            { icon: "FaFacebook", link: "https://web.facebook.com/chhayadevkh" },
            { icon: "AiFillGoogleCircle", link: "https://github.com/it-chhaya" }, // Update with actual Google link
            { icon: "FaTelegram", link: "https://github.com/it-chhaya" }, // Update with actual Telegram link
        ],
    },
];
