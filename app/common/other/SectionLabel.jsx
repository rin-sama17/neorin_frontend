import React from 'react'

const SectionLabel = ({ children, className }) => (
    <p
        className={`${className} text-[11px] font-medium text-text-muted tracking-wide pt-2 pb-1 border-b border-slate-100`}>
        {children}
    </p>
)
export default SectionLabel
