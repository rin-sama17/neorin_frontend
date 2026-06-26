'use client'
import ConfirmAllert from '@/common/other/ConfirmAllert'
import { useCategoryValueRequest } from '@/hooks/admin/useCategoryValueRequest'

const DeleteAttributeValue = ({ id }) => {
    const { deleteCategoryValue } = useCategoryValueRequest()
    const handleDelete = async id => {
        deleteCategoryValue({ id })
    }
    return (
        <ConfirmAllert
            title="حذف مقدار"
            helper="ایا از حذف مقدار مطمعن هستید"
            onConfirm={() => handleDelete(id)}
        />
    )
}

export default DeleteAttributeValue
