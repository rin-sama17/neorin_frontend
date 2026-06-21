'use client'
import { useState } from 'react'

const OrderSummary = () => {
    const [count, setCount] = useState(1)
    const width = 50
    const length = 70
    const unitPrice = 204500
    const total = unitPrice + 60000

    return (
        <div className="flex flex-col rounded-2xl bg-surface shadow-neu-raised p-6 space-y-6 sticky top-6">
            <h2 className="text-xl font-bold text-primary text-center border-b border-gray-100 pb-4">
                خلاصه سفارش
            </h2>

            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-xl bg-bg-secondary shrink-0">
                    <i className="fa-solid fa-bed text-primary text-lg" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg text-text-primary mb-2 font-semibold">
                        روبالشتی
                    </h3>
                    <p className="text-sm text-text-secondary">
                        پارچه: کتان کرم
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <h3 className="text-base text-text-primary font-semibold">
                    ابعاد و تعداد
                </h3>

                <div className="flex justify-between items-center">
                    <p className="text-sm text-text-secondary">
                        عرض (سانتی‌متر)
                    </p>
                    <input
                        type="text"
                        defaultValue={width}
                        placeholder="50"
                        className="input w-20 text-center"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-sm text-text-secondary">
                        طول (سانتی‌متر)
                    </p>
                    <input
                        type="text"
                        defaultValue={length}
                        className="input w-20 text-center"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-sm text-text-secondary">تعداد</p>
                    <div className="flex items-center rounded-lg   py-1">
                        <button
                            type="button"
                            onClick={() => setCount(c => c + 1)}
                            className="h-10 w-8 flex items-center justify-center bg-gray-200 rounded-r-md  text-primary font-bold">
                            +
                        </button>
                        <span className="text-text-primary w-10 py-1.5 align-middle  text-center border-y-3 border-gray-200">
                            {count}
                        </span>
                        <button
                            type="button"
                            onClick={() => setCount(c => Math.max(1, c - 1))}
                            className="h-10 w-8 flex items-center justify-center bg-gray-200 rounded-l-md  text-primary font-bold">
                            -
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-2 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">قیمت واحد</span>
                    <span className="text-text-primary">
                        {unitPrice.toLocaleString('fa-IR')} تومان
                    </span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">هزینه ارسال</span>
                    <span className="text-text-primary">۶۰,۰۰۰ تومان</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2">
                    <span className="text-primary">جمع کل</span>
                    <span className="text-primary">
                        {total.toLocaleString('fa-IR')} تومان
                    </span>
                </div>
            </div>

            <button
                type="button"
                className="btn-primary w-full py-3 flex items-center justify-center gap-2">
                <i className="fa-solid fa-cart-shopping" />
                افزودن به سبد خرید
            </button>
        </div>
    )
}
export default OrderSummary
