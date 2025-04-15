'use client'
import { useState, useEffect } from 'react'

const NavContainer = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            setLastScrollY(window.scrollY)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [lastScrollY])

    return (
        <div
            className={`sticky top-0 left-0 right-0 z-50 shadow-lg  bg-white py-2 transition-transform duration-300 ${
                showNavbar ? 'transform-none' : '-translate-y-full'
            }`}>
            {children}
        </div>
    )
}

export default NavContainer
