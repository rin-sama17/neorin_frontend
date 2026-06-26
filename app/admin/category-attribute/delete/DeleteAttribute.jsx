'use client'
import { useCategoryAttributeRequest } from '@/hooks/admin/useCategoryAttributeRequest'
import ConfirmAllert from '@/common/other/ConfirmAllert'

const DeleteAttribute = ({ id, name }) => {
    const { deleteAttribute } = useCategoryAttributeRequest()
    const handleDelete = async id => {
        deleteAttribute({ id })
    }
    return (
        <ConfirmAllert
            title="حذف نسبت"
            helper={`ایا از حذف نسبت ${name} مطمعن هستید`}
            onConfirm={() => handleDelete(id)}
        />
    )
}

export default DeleteAttribute
