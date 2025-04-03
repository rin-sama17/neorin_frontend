'use client'
import { useState } from 'react'
import ResponsiveNavLink from '../ResponsiveNavLink'

const NavMenu = () => {
    const navBtn = [
        { title: 'خانه', to: '/' },
        { title: 'محصولات', to: '/products' },
        { title: 'درباره ما', to: '/about-us' },
    ]
    const [open, setOpen] = useState(false)
    return (
        <div className="block sm:hidden">
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <i className="fa fa-bars"></i>
                </button>
                {open && (
                    <div className="  absolute left-0 bg-white">
                        <div className="pt-2 pb-3 space-y-1">
                            {navBtn.map((item, key) => (
                                <ResponsiveNavLink
                                    onClick={() => setOpen(!open)}
                                    key={key}
                                    href={item.to}>
                                    {item.title}
                                </ResponsiveNavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavMenu
