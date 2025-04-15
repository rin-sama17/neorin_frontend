'use client'
import React, { useState } from 'react'

const ConfirmAllert = ({ title, helper, onConfirm }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <i className="fa fa-trash"></i>
            </button>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed top-0 z-50 right-0 transition-all duration-200 min-h-screen w-full bg-slate-500/30 flex justify-center items-center space-y-3">
                    <div
                        onClick={e => e.stopPropagation()}
                        className="p-5 flex flex-col  bg-white rounded-lg items-center justify-center align-middle">
                        <div className="flex flex-col"></div>
                        <h2 className="text-xl font-bold text-black">
                            {title}
                        </h2>
                        <h2 className="text-sm font-extralight text-gray-500 mt-2 ">
                            {helper}
                        </h2>
                        <div className="flex">
                            <button
                                className="btn btn-primary"
                                onClick={onConfirm}>
                                تایید
                            </button>
                            <button
                                className="btn btn-secondary mr-2"
                                onClick={() => setOpen(false)}>
                                انصراف
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ConfirmAllert
