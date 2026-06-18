'use client'

import { useRef } from 'react'

export default function VerticalSlider({
    cards,
    duration = 20,
    direction = 'up',
}) {
    const trackRef = useRef(null)

    // Duplicate cards for seamless loop
    const looped = [...cards, ...cards]

    const animClass =
        direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'

    return (
        <div className="relative flex-1 overflow-hidden border border-white/10 group">
            {/* Track */}
            <div
                ref={trackRef}
                className={`flex flex-col gap-[6px] ${animClass} group-hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${duration}s` }}>
                {looped.map((card, i) => (
                    <div
                        key={`${card.id}-${i}`}
                        className="relative w-full shrink-0 overflow-hidden border border-white/10"
                        style={{
                            height: '400px',
                            background: card.bg ?? '#111',
                        }}>
                        {card.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={card.image}
                                alt={card.label ?? ''}
                                className="w-full h-full object-cover grayscale-[20%] contrast-105 transition-all duration-500 group-hover/card:grayscale-0"
                            />
                        )}

                        {/* Label overlay */}
                        {card.label && (
                            <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-[10px] tracking-[0.15em] uppercase text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {card.label}
                            </div>
                        )}

                        {/* Placeholder number */}
                        {!card.image && (
                            <div className="flex items-center justify-center h-full font-mono text-white/20 text-sm tracking-widest">
                                {String(card.id).padStart(3, '0')}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Top + bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080808] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808] to-transparent z-10" />
        </div>
    )
}
