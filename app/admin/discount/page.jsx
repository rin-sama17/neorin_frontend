import Link from 'next/link'
import { getDiscounts } from '../services'
import DiscountList from './DiscountList'

const page = async () => {
    const discounts = await getDiscounts()
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت تخفیف</h1>
                <Link
                    href="/admin/discount/create"
                    className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>تخفیف جدید</span>
                </Link>
            </div>

            <DiscountList discounts={discounts} />
        </div>
    )
}

export default page
