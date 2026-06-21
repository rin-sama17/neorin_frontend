'use client'
import React, { useState } from 'react'
const fabrics = [
    {
        name: 'مخمل صورتی',
        color: 'bg-pink-200',
        hex: '#f4c2d9',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان کرم',
        color: 'bg-[#e9dfce]',
        hex: '#e9dfce',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان سفید',
        color: 'bg-gray-100',
        hex: '#f3f3f1',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل طوسی',
        color: 'bg-gray-400',
        hex: '#9a9a9a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل مشکی کرم',
        color: 'bg-[#3a3a3a]',
        hex: '#3a3a3a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل کرم',
        color: 'bg-[#cdb78f]',
        hex: '#cdb78f',
        price: '۶۰,۰۰۰',
    },
    {
        name: 'مخمل صورتی',
        color: 'bg-pink-200',
        hex: '#f4c2d9',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان کرم',
        color: 'bg-[#e9dfce]',
        hex: '#e9dfce',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان سفید',
        color: 'bg-gray-100',
        hex: '#f3f3f1',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل طوسی',
        color: 'bg-gray-400',
        hex: '#9a9a9a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل مشکی کرم',
        color: 'bg-[#3a3a3a]',
        hex: '#3a3a3a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل کرم',
        color: 'bg-[#cdb78f]',
        hex: '#cdb78f',
        price: '۶۰,۰۰۰',
    },
    {
        name: 'مخمل صورتی',
        color: 'bg-pink-200',
        hex: '#f4c2d9',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان کرم',
        color: 'bg-[#e9dfce]',
        hex: '#e9dfce',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان سفید',
        color: 'bg-gray-100',
        hex: '#f3f3f1',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل طوسی',
        color: 'bg-gray-400',
        hex: '#9a9a9a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل مشکی کرم',
        color: 'bg-[#3a3a3a]',
        hex: '#3a3a3a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل کرم',
        color: 'bg-[#cdb78f]',
        hex: '#cdb78f',
        price: '۶۰,۰۰۰',
    },
    {
        name: 'مخمل صورتی',
        color: 'bg-pink-200',
        hex: '#f4c2d9',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان کرم',
        color: 'bg-[#e9dfce]',
        hex: '#e9dfce',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان سفید',
        color: 'bg-gray-100',
        hex: '#f3f3f1',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل طوسی',
        color: 'bg-gray-400',
        hex: '#9a9a9a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل مشکی کرم',
        color: 'bg-[#3a3a3a]',
        hex: '#3a3a3a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل کرم',
        color: 'bg-[#cdb78f]',
        hex: '#cdb78f',
        price: '۶۰,۰۰۰',
    },
    {
        name: 'مخمل صورتی',
        color: 'bg-pink-200',
        hex: '#f4c2d9',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان کرم',
        color: 'bg-[#e9dfce]',
        hex: '#e9dfce',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'کتان سفید',
        color: 'bg-gray-100',
        hex: '#f3f3f1',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل طوسی',
        color: 'bg-gray-400',
        hex: '#9a9a9a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل مشکی کرم',
        color: 'bg-[#3a3a3a]',
        hex: '#3a3a3a',
        price: '۳۲۵,۰۰۰',
    },
    {
        name: 'مخمل کرم',
        color: 'bg-[#cdb78f]',
        hex: '#cdb78f',
        price: '۶۰,۰۰۰',
    },
]
// const Fabrics = () => {
//     return (
//         <div className="flex flex-col p-4 space-y-3">
//             <h2 className="text-2xl  text-primary">سفارش جدید</h2>
//             <p className="text-lg text-text-secondary">
//                 از بخش پایین یکی از گزینه هارا انتخاب کنید
//             </p>
//             <div className="grid grid-cols-3 gap-4">
//                 {[
//                     'bg-red-300',
//                     'bg-blue-300',
//                     'bg-green-300',
//                     'bg-indigo-300',
//                     'bg-yellow-300',
//                     'bg-grey-300',
//                 ].map((fiber, index) => (
//                     <div
//                         key={index}
//                         className="rounded-md shadow-card border-3 border-gray-200 min-h-64 w-full p-3 space-y-3">
//                         <div className={`h-28 w-full ${fiber}`}></div>
//                         <h2 className="text-xl text-primary"> براش نخ</h2>
//                         <div className="flex items-center space-x-2">
//                             <spam
//                                 className={`rounded-full size-6 ${fiber} `}></spam>
//                             <p className="text-lg text-text-secondary">قرمز</p>
//                         </div>
//                         <p className="text-text-secondary text-lg">230</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

const Fabrics = () => {
    const [selected, setSelected] = useState(1)

    return (
        <div className="relative flex flex-col p-6 space-y-4">
            <div>
                <h2 className="text-2xl font-bold text-primary">
                    انتخاب پارچه
                </h2>
                <p className="text-base text-text-secondary">
                    پارچه مورد نظر خود را جهت روکش انتخاب کنید
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {fabrics.map((fabric, index) => {
                    const isSelected = selected === index
                    return (
                        <button
                            type="button"
                            key={fabric.name}
                            onClick={() => setSelected(index)}
                            className={`flex flex-col items-start gap-2 rounded-2xl p-3 text-right transition-all
                            ${
                                isSelected
                                    ? 'border-2 border-primary shadow-neu-raised bg-surface'
                                    : 'border border-gray-200 bg-surface shadow-neu-flat hover:shadow-neu-raised'
                            }`}>
                            <div
                                className={`h-24 w-full rounded-xl ${fabric.color}`}
                            />
                            <h3 className="text-base text-text-primary">
                                {fabric.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span
                                    className="rounded-full size-5 border border-black/10"
                                    style={{ backgroundColor: fabric.hex }}
                                />
                                <p className="text-sm text-text-secondary">
                                    {fabric.price} تومان
                                </p>
                            </div>
                        </button>
                    )
                })}
            </div>
            <div className="flex justify-between sticky bottom-0 w-full py-3 bg-fuchsia-100">
                c
            </div>

            <div className="flex justify-between pt-4">
                <button type="button" className="btn-ghost px-6 py-3">
                    مرحله قبل
                </button>
                <button type="button" className="btn-primary px-8 py-3">
                    مرحله بعد
                </button>
            </div>
        </div>
    )
}

export default Fabrics
