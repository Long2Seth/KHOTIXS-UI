import { HiOutlineUserGroup } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { TbLogin2 } from "react-icons/tb";

export type MenuType = {
    link: string;
    icon: React.ReactNode;
    name: string;
}

export const menuItems: MenuType[] = [
    {
        link: '/about',
        icon: <HiOutlineUserGroup />,
        name: 'About Us'
    },
    {
        link: '/contact-us',
        icon: <LuPhoneCall />,
        name: 'Contact Us'
    },
    {
        link: 'http://localhost:8000/oauth2/authorization/nextjs',
        icon: <TbLogin2 />,
        name: 'Log In'
    }
];