import VerticalSlider from './VerticalSlider'

// Default placeholder cards — replace with real data from your server fetch
const defaultCol1 = [
    { id: 1, bg: '#1a1a2e', label: '001 — Noir' },
    { id: 2, bg: '#16213e', label: '002 — Dusk' },
    { id: 3, bg: '#0f3460', label: '003 — Edge' },
    { id: 4, bg: '#533483', label: '004 — Void' },
    { id: 5, bg: '#2d6a4f', label: '005 — Flux' },
    { id: 6, bg: '#1b4332', label: '006 — Raw' },
]

const defaultCol2 = [
    { id: 7, bg: '#3d0000', label: '007 — Ember' },
    { id: 8, bg: '#6b2737', label: '008 — Bloom' },
    { id: 9, bg: '#9c4668', label: '009 — Haze' },
    { id: 10, bg: '#7b2d8b', label: '010 — Fade' },
    { id: 11, bg: '#4a1942', label: '011 — Burn' },
    { id: 12, bg: '#c47aad', label: '012 — Glow' },
]

const defaultCol3 = [
    { id: 13, bg: '#0d2137', label: '013 — Deep' },
    { id: 14, bg: '#1b3a4b', label: '014 — Still' },
    { id: 15, bg: '#144552', label: '015 — Wave' },
    { id: 16, bg: '#2e6b8a', label: '016 — Drift' },
    { id: 17, bg: '#1f7a8c', label: '017 — Cold' },
    { id: 18, bg: '#0e4d6a', label: '018 — Tide' },
]

// This component itself is a Server Component — no "use client" needed here.
// Only the child VerticalSlider is a Client Component.
export default function VerticalSliderSection({
    col1 = defaultCol1,
    col2 = defaultCol2,
    col3 = defaultCol3,
}) {
    return (
        <section className="relative min-h-screen  grid lg:grid-cols-2 items-center justify-center overflow-hidden py-16 px-4">
            {/* Title */}
            <div className="flex flex-col">
                <h2 className=" text-5xl md:text-7xl mb-12">نئورین</h2>
                <h6 className="h6 text-bold text-gray-500">
                    خرید راحت از کالای خواب نئورین با تنوع بیش از هزار پارچه
                    مختلف
                </h6>
                <button className="btn"> رفتن به بخش سفارش</button>
            </div>

            {/* 3-column slider stage — skewed like the sketch */}
            <div className=" relative flex gap-1.5 h-[80vh] w-full max-w-xl skew-x-[-8deg]">
                <VerticalSlider cards={col1} duration={20} direction="up" />
                <VerticalSlider cards={col2} duration={15} direction="down" />
                <VerticalSlider cards={col3} duration={25} direction="up" />
            </div>
        </section>
    )
}
