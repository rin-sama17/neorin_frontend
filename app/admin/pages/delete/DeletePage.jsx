'use client'
import { usePageRequest } from '@/hooks/admin/usePageRequest'
import ConfirmAllert from '@/common/other/ConfirmAllert'

const DeletePage = ({ id, name }) => {
    const { deletePage } = usePageRequest()
    const handleDelete = async id => {
        deletePage({ id })
    }
    return (
        <ConfirmAllert
            title="حذف صفحه"
            helper={`ایا از حذف صفحه ${name} مطمعن هستید`}
            onConfirm={() => handleDelete(id)}
        />
    )
}

export default DeletePage
