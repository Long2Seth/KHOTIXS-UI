import { HiOutlineUserGroup } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { TbLogin2 } from "react-icons/tb";
import {RiPoliceBadgeLine} from "react-icons/ri";

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
        link: '/policy',
        icon: <RiPoliceBadgeLine/>,
        name: 'Policy'
    },
    {
        link: '/oauth2/authorization/nextjs',
        icon: <TbLogin2 />,
        name: 'Log In'
    }
];