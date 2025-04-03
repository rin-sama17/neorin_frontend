'use client'
import { useEffect, useRef } from 'react'
import Input from '../Input'

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
            {lg ? (
                <button
                    ref={inputRef}
                    className="flex items-center gap-1 rounded-full bg-gray-300 px-2 py-1 ring ring-gray-400">
                    <i className="h-[1em] opacity-50 fab fa-sistrix" />
                    <h2 className="text-xl"> Ctrl_K</h2>
                </button>
            ) : (
                <button className="btn btn-ghost btn-circle">
                    <i className="size-7 p-1" />
                </button>
            )}
        </>
    )
}

export default NavSearch
