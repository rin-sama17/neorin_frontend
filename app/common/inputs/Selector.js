'use client'
import { useField } from 'formik'
import React, { useState, useRef, useEffect } from 'react'
import InputError from '@/common/inputs/InputError'
import Label from './Label'

const SelectDropdown = ({
    name,
    options = [],
    label = '',
    placeholder = 'انتخاب کنید',
    multiple = false,
    showColor = false,
    max = null,
}) => {
    const [field, , helpers] = useField(name)
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const value = field.value ?? (multiple ? [] : null)
    const isMaxReached = multiple && max !== null && value.length >= max

    useEffect(() => {
        const handler = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const isSelected = id => (multiple ? value.includes(id) : value === id)

    const toggle = id => {
        if (multiple) {
            const alreadySelected = value.includes(id)
            if (!alreadySelected && isMaxReached) return
            const next = alreadySelected
                ? value.filter(s => s !== id)
                : [...value, id]
            helpers.setValue(next)
        } else {
            helpers.setValue(id)
            setOpen(false)
        }
    }

    const clearAll = () => helpers.setValue(multiple ? [] : null)
    const safeOptions = options ?? []

    const selectedOptions = multiple
        ? safeOptions.filter(o => value.includes(o.id))
        : safeOptions.filter(o => o.id === value)

    const hasValue = multiple ? value.length > 0 : value !== ''

    return (
        <div ref={ref} className="relative w-full">
            <Label>{label}</Label>

            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen(v => !v)}
                className={`input flex items-center justify-between gap-2 cursor-pointer w-full ${
                    open ? 'border-primary ring-3 ring-primary/10' : ''
                }`}>
                <div className="flex flex-wrap gap-1.5 flex-1 text-right">
                    {!hasValue ? (
                        <span className="text-sm text-text-secondary">
                            --- {placeholder} ---
                        </span>
                    ) : multiple ? (
                        selectedOptions.map(o => (
                            <span
                                key={o.id}
                                className="inline-flex items-center gap-1.5 bg-slate-100 text-text-secondary text-xs px-2 py-1 rounded-md">
                                {showColor && o.hex && (
                                    <span
                                        className="w-3 h-3 rounded-full shrink-0 ring-1 ring-black/10"
                                        style={{ background: o.hex }}
                                    />
                                )}
                                {o.name ? o.name : o.title}
                                <span
                                    role="button"
                                    onClick={e => {
                                        e.stopPropagation()
                                        toggle(o.id)
                                    }}
                                    className="text-text-muted hover:text-text-primary leading-none cursor-pointer">
                                    ×
                                </span>
                            </span>
                        ))
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-text-primary">
                            {showColor && selectedOptions[0]?.hex && (
                                <span
                                    className="w-4 h-4 rounded-full shrink-0 ring-1 ring-black/10"
                                    style={{
                                        background: selectedOptions[0].hex,
                                    }}
                                />
                            )}
                            {selectedOptions[0]?.name ??
                                selectedOptions[0]?.title ??
                                ''}
                        </span>
                    )}
                </div>

                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}>
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-50 mt-1.5 bg-white border w-full border-slate-200 rounded-xl shadow-lg overflow-hidden">
                    {/* max limit notice */}
                    {isMaxReached && (
                        <div className="px-3 py-2 bg-amber-50 border-b border-amber-100 text-xs text-amber-600">
                            حداکثر {max} مورد قابل انتخاب است
                        </div>
                    )}

                    <div className="p-1.5 max-h-56 overflow-y-auto">
                        {safeOptions.map(option => {
                            const active = isSelected(option.id)
                            const disabled = !active && isMaxReached

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => toggle(option.id)}
                                    disabled={disabled}
                                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-right ${
                                        active
                                            ? 'bg-primary/5 text-primary'
                                            : disabled
                                              ? 'opacity-35 cursor-not-allowed text-text-primary'
                                              : 'hover:bg-slate-50 text-text-primary'
                                    }`}>
                                    <div className="flex items-center gap-2.5">
                                        {showColor && option.hex && (
                                            <span
                                                className="w-5 h-5 rounded-full shrink-0 ring-1 ring-black/10"
                                                style={{
                                                    background: option.hex,
                                                }}
                                            />
                                        )}
                                        <span>
                                            {option.name
                                                ? option.name
                                                : option.title}
                                        </span>
                                    </div>

                                    {active && (
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {hasValue && multiple && (
                        <div className="border-t border-slate-100 px-3 py-2 flex justify-between items-center">
                            <span className="text-xs text-text-secondary">
                                {value.length}
                                {max ? ` / ${max}` : ''} مورد انتخاب شده
                            </span>
                            <button
                                type="button"
                                onClick={clearAll}
                                className="text-xs text-red-500 hover:text-red-600 transition-colors">
                                پاک کردن
                            </button>
                        </div>
                    )}
                </div>
            )}

            <InputError name={name} />
        </div>
    )
}

export default React.memo(SelectDropdown)
