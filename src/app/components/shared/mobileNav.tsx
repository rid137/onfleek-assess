"use client"

import { useEffect, useState } from 'react';
import { Links } from './links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const [activePage, setActivePage] = useState('')

    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActivePage(pathname.split('/')[1])
        }
    }, [pathname]);

    return (
        <nav className='bg-primary inline-bloc px-6 py-2 fixed z-20 left-1/2 transform -translate-x-1/2 bottom-4 flex gap-6 sm:gap-8 rounded-full backdrop-blur-md'>
            {
                Links?.map((itemList) => (
                    <Link
                        href={itemList?.href}
                        key={itemList?.pageName}
                        className={`${activePage === `${itemList.pageName}` ? `transform -translate-y-8 xxl:translate-x-12 bg-white text-red-600 opacity-100 shadow-xl` : 'text-white opacity-50'} p-2 transition-transform duration-300 text-[1.5rem] cursor-pointer opacity- hover:bg-white rounded-md hover:opacity-100 hover:text-red-600 py-`}
                        onClick={() => setActivePage(`${itemList.pageName}`)}
                    >
                        {itemList?.icon}
                    </Link>
                ))
            }
        </nav>
    );
}

export default MobileNav;