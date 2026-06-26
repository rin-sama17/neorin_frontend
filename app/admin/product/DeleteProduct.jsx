'use client'
import ConfirmAllert from '@/common/other/ConfirmAllert'
import { useProductRequest } from '@/hooks/admin/useProductRequest'

const DeleteProduct = ({ id, name }) => {
    const { deleteProduct } = useProductRequest()

    return (
        <ConfirmAllert
            title="حذف محصول"
            helper={`آیا از حذف ${name} مطمئن هستید؟`}
            onConfirm={() =>
                deleteProduct({
                    productId: id,
                })
            }
        />
    )
}

export default DeleteProduct
