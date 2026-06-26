'use client'
import { useDiscountRequest } from '@/hooks/admin/useDiscountRequest'
import ConfirmAllert from '@/common/other/ConfirmAllert'

const DeleteDiscount = ({ discountId }) => {
    const { deleteDiscount } = useDiscountRequest()
    const handleDelete = async id => {
        deleteDiscount({ id })
    }
    return (
        <ConfirmAllert
            title="حذف تخفیف"
            helper={`ایا از حذف تخفیف مطمعن هستید`}
            onConfirm={() => handleDelete(discountId)}
        />
    )
}

export default DeleteDiscount
