import React from 'react'
import Fabrics from '../Fabrics'
import OrderSummary from '../OrderSummary'

const page = () => {
    return (
        <div className="min-h-screen bg-bg-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 lg:p-8">
                <div className="lg:col-span-2 lg:order-1 rounded-2xl bg-surface shadow-neu-flat">
                    <Fabrics />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default page
