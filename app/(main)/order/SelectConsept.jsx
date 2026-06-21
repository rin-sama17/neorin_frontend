'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import StepIndicator from './StepIndicator'

const products = [
    { title: 'روبالشتی', img: '/images/products/pillowcase.jpg' },
    { title: 'ملحفه کشدار', img: '/images/products/sheet.jpg' },
    { title: 'روتختی', img: '/images/products/duvet-cover.jpg' },
    { title: 'کاور', img: '/images/products/cover.jpg' },
]

const SelectConsept = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div className="flex flex-col p-6 space-y-4">
            <StepIndicator current={1} />

            <h2 className="text-2xl font-bold text-primary">انتخاب محصول</h2>
            <p className="text-base text-text-secondary">
                برای ادامه نوع طرح خود را از میان محصولات انتخاب کنید
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product, index) => {
                    const isSelected = selected === index
                    return (
                        <button
                            type="button"
                            key={product.title}
                            onClick={() => setSelected(index)}
                            className={`relative flex flex-col items-center gap-3 rounded-2xl p-4 transition-all
                            ${
                                isSelected
                                    ? 'border-2 border-primary shadow-neu-raised bg-surface'
                                    : 'border border-gray-200 bg-surface shadow-neu-flat hover:shadow-neu-raised'
                            }`}>
                            {isSelected && (
                                <span className="absolute top-3 left-3 flex items-center justify-center size-5 rounded-full bg-primary text-white text-[10px]">
                                    <i className="fa-solid fa-check" />
                                </span>
                            )}
                            <div className="h-32 w-full rounded-xl bg-bg-secondary overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg text-text-primary">
                                {product.title}
                            </h3>
                        </button>
                    )
                })}
            </div>

            <div className="flex justify-end pt-4">
                <Link href="/order/fabric" className="btn-primary px-8 py-3">
                    ادامه روند
                </Link>
            </div>
        </div>
    )
}
// const SelectConsept = () => {
//     return (
//         <div className="flex flex-col p-4 space-y-3 ">
//             <h2 className="text-2xl  text-primary">سفارش جدید</h2>
//             <p className="text-lg text-text-secondary">
//                 از بخش پایین یکی از گزینه هارا انتخاب کنید
//             </p>
//             <div className="grid grid-cols-4 gap-4 ">
//                 {[
//                     {
//                         title: 'ملحفه کشدار',
//                         bg: 'bg-red-300',
//                     },
//                     {
//                         title: 'بالشت',
//                         bg: 'bg-blue-300',
//                     },
//                     { title: 'کاور تشک زمینی', bg: 'bg-green-300' },
//                     { title: 'کاور لحاف', bg: 'bg-yellow-300' },
//                 ].map((product, index) => (
//                     <div
//                         key={index}
//                         className="flex flex-col justify-between rounded-md shadow-card border-3 border-gray-200 min-h-64 w-full p-3 space-y-3">
//                         <div className={`h-40 w-full ${product.bg}`}></div>
//                         <h2 className="text-xl text-primary">
//                             {product.title}
//                         </h2>
//                     </div>
//                 ))}
//                 <Link href="/order/pillow" className="btn">
//                     مرحله بعد{' '}
//                 </Link>
//             </div>
//         </div>
//     )
// }

export default SelectConsept
