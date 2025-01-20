
import {GiNotebook} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import {Settings} from "lucide-react";

export const navMenus = [
    { icon: GiNotebook, label: "TICKETS" ,href: "/profile/ticket"},
    { icon: RiSecurePaymentLine, label: "PAYMENT" ,href: "/profile/payment" },
    { icon: CgProfile, label: "PROFILE" , href: "/profile/user"},
    { icon: Settings, label: "SETTINGS" ,href: "/profile/setting"},
]


// Compare this snippet from src/components/customer/User-Profile/EditProfile.tsx:

