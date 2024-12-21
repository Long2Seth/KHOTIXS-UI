
import {GiNotebook} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import {Settings} from "lucide-react";

export const navMenus = [
    { icon: GiNotebook, label: "TICKETS" ,href: "/user-profile/ticket"},
    { icon: RiSecurePaymentLine, label: "PAYMENT" ,href: "/user-profile/payment" },
    { icon: CgProfile, label: "PROFILE" , href: "/user-profile/profile"},
    { icon: Settings, label: "SETTINGS" ,href: "/user-profile/settings"},
]

