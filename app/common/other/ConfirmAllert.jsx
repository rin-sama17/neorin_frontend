'use client'
import React, { useState } from 'react'

const ConfirmAllert = ({ title, helper, onConfirm }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="icon-btn hover:text-red-600 hover:bg-red-50">
                <i className="fa fa-trash" />
            </button>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <div
                        onClick={e => e.stopPropagation()}
                        className="w-full max-w-sm rounded-xl bg-white p-5 shadow-lg">
                        <h2 className="text-base font-semibold text-primary">
                            {title}
                        </h2>

                        {helper && (
                            <p className="mt-2 text-sm text-slate-500">
                                {helper}
                            </p>
                        )}

                        <div className="mt-5 flex justify-end gap-2">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-3 py-1.5 text-sm rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50">
                                انصراف
                            </button>

                            <button
                                onClick={onConfirm}
                                className="px-3 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600">
                                تایید
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ConfirmAllert
