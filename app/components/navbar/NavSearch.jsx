'use client'
import { useEffect, useRef } from 'react'

const NavSearch = ({ lg }) => {
    const inputRef = useRef(null)

    const handleKeyDown = event => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault()
            inputRef.current.focus()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <>
            <input
                type="text"
                className="input max-w-96"
                placeholder="جستجو..."
            />
        </>
    )
}

export default NavSearch
