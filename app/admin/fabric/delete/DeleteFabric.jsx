'use client'
import ConfirmAllert from '@/common/other/ConfirmAllert'
import { useFabricRequest } from '@/hooks/admin/useFabricRequest'

const DeleteFabric = ({ id }) => {
    const { deleteFabric } = useFabricRequest()
    const handleDelete = async id => {
        deleteFabric({ id })
    }
    return (
        <ConfirmAllert
            title="حذف پارچه"
            helper={`ایا از حذف ${name} مطمعن هستید`}
            onConfirm={() => handleDelete(id)}
        />
    )
}

export default DeleteFabric
