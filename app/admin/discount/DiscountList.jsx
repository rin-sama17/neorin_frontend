import Link from 'next/link'
import Table from '@/common/other/Table'
import { converterToJalali } from '@/utility'
import DeleteDiscount from './delete/DeleteDiscount'
import EditLink from '@/common/other/EditLink'

const DiscountList = ({ discounts }) => {
    const getAppliedTo = discount => {
        if (discount.product) {
            return {
                color: 'bg-green-100 text-green-700',
                text: discount.product.title,
                type: 'product',
                helper: 'محصول',
            }
        }

        if (discount.category) {
            return {
                color: 'bg-blue-100 text-blue-700',
                text: discount.category.name,
                type: 'category',
                helper: 'گروهی',
            }
        }

        return {
            color: 'bg-slate-100 text-slate-600',
            text: 'نامشخص',
            type: null,
        }
    }

    return (
        <Table
            headers={[
                '#',
                'مقدار تخفیف',
                'نوع',

                'محصول / دسته بندی',
                'وضعیت',
                'توضیحات',
                'تاریخ شروع',
                'تاریخ پایان',
                '',
            ]}>
            {discounts.data.map(discount => {
                const isExpired =
                    discount.ends_at && new Date(discount.ends_at) < new Date()
                const appliedTo = getAppliedTo(discount)

                return (
                    <tr
                        key={discount.id}
                        className="border-b hover:bg-slate-50 transition-colors">
                        <td className="px-3 py-3">{discount.id}</td>

                        <td className="px-3 py-3">{discount.value}%</td>
                        <td className="px-3 py-3">
                            <span
                                className={`px-2 py-1 rounded-full text-xs ${appliedTo.color}`}>
                                {appliedTo.helper}
                            </span>
                        </td>
                        <td className="px-3 py-3">
                            <span className={`px-2 py-1 `}>
                                {appliedTo.text}
                            </span>
                        </td>
                        <td className="px-3 py-3">
                            <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                    !discount.is_active
                                        ? 'bg-red-100 text-red-700'
                                        : isExpired
                                          ? 'bg-yellow-100 text-yellow-700'
                                          : 'bg-green-100 text-green-700'
                                }`}>
                                {!discount.is_active
                                    ? 'غیرفعال'
                                    : isExpired
                                      ? 'منقضی شده'
                                      : 'فعال'}
                            </span>
                        </td>
                        <td className="px-3 py-3 font-medium">
                            {discount.description}
                        </td>
                        <td className="px-3 py-3 text-gray-500">
                            {discount.starts_at
                                ? converterToJalali(discount.starts_at, true)
                                : 'بدون تاریخ'}
                        </td>

                        <td className="px-3 py-3 text-gray-500">
                            {discount.ends_at
                                ? converterToJalali(discount.ends_at, true)
                                : 'بدون تاریخ'}
                        </td>

                        <td className="px-3 py-3">
                            <div className="flex gap-2">
                                <EditLink
                                    href="/admin/discount/edit"
                                    id={discount.id}
                                />

                                <DeleteDiscount discountId={discount.id} />
                            </div>
                        </td>
                    </tr>
                )
            })}
        </Table>
    )
}

export default DiscountList
