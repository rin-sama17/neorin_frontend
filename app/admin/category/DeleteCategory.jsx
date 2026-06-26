'use client'
import { useCategoryRequest } from '@/hooks/admin/useCategoryRequest'
import ConfirmAllert from '@/common/other/ConfirmAllert'

const DeleteCategory = ({ categoryName, categoryId }) => {
    const { deleteCategory } = useCategoryRequest()
    const handleDelete = async id => {
        deleteCategory({ id })
    }
    return (
        <ConfirmAllert
            title="حذف دسته بندی"
            helper={`ایا از حذف دسته بندی ${categoryName} مطمعن هستید`}
            onConfirm={() => handleDelete(categoryId)}
        />
    )
}

export default DeleteCategory
