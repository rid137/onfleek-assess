"use client"
import { IoMdHome } from "react-icons/io";
import { BiSolidMessageMinus } from "react-icons/bi";
import { PiRadioFill } from "react-icons/pi";
import { RiEditCircleFill } from "react-icons/ri";
import Link from "next/link";
import { Links } from "./links";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const Sidebar = () => {
    const [activePage, setActivePage] = useState('')

    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActivePage(pathname.split('/')[1])
        }
    }, [pathname]);

    return (
        <div className="w-[7%] h-screen sticky top-0 p-10 hidden md:block">
            <h3 className='font-bold text-white w-full flex justify-center'>Logo</h3>
            <ul className='flex items-center flex-col gap-4 mt-16 '>
                {
                    Links?.map((itemList) => (
                        <Link 
                            href={itemList?.href}
                            key={itemList?.pageName}
                            className={`${activePage === `${itemList.pageName}` ? `transform translate-x-8 xxl:translate-x-12 bg-white text-red-600 opacity-100 shadow-xl` : 'text-white opacity-50'} p-3 transition-transform duration-300 text-[2rem] cursor-pointer opacity- hover:bg-white rounded-md hover:opacity-100 hover:text-red-600 py-`}
                            onClick={() => setActivePage(`${itemList.pageName}`)}
                        >
                            {itemList?.icon}
                        </Link>
                    ))
                }
            </ul>
      </div>
    )
}

export default Sidebar
