import { IoMdHome } from "react-icons/io";
import { BiSolidMessageMinus } from "react-icons/bi";
import { PiRadioFill } from "react-icons/pi";
import { RiEditCircleFill } from "react-icons/ri";
import { LinkData } from "@/types";

export const Links: LinkData[] = [
    {
        href: '/',
        icon: <IoMdHome />,
        pageName: '',
    },
    {
        href: '/about',
        icon: <BiSolidMessageMinus />,
        pageName: 'about',
    },
    {
        href: '/contactUs',
        icon: <PiRadioFill />,
        pageName: 'contactUs',
    },
    {
        href: '/settings',
        icon: <RiEditCircleFill />,
        pageName: 'settings',
    },
];