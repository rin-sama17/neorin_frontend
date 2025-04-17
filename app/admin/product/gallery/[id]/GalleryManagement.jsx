import React from 'react'
import Table from '@/common/Table'
import { converterToJalali, useAdminRequest } from '../../../services'
import ImagePreview from '@/common/ImagePreview'

const GalleryManagement = ({ value = [], name, setFieldValue }) => {
    const { deleteProductGallery } = useAdminRequest()
    const handleDelete = (item, index) => {
        const newImages = [...value]
        newImages.splice(index, 1)
        if (item.image) {
            deleteProductGallery({
                id: item.id,
                setState: () => setFieldValue(name, newImages),
            })
        } else {
            setFieldValue(name, newImages)
        }
    }
    return (
        <div className="gap-2">
            <Table headers={['شناسه', 'عکس', 'وضعیت', 'تاریخ', 'عملیات']}>
                {value &&
                    value.length > 0 &&
                    value.map((item, index) => (
                        <tr
                            className={
                                ('hover:bg-gray-50  ',
                                !item.status ? 'bg-green-100' : null)
                            }
                            key={index}>
                            <td className="border px-4 py-2 text-right">
                                {item.id ?? index}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                <ImagePreview item={item} />
                            </td>

                            <td className="border px-4 py-2 text-right">
                                {item.status
                                    ? item.status === 1
                                        ? 'فعال'
                                        : 'غیرفعال'
                                    : 'عکس جدید'}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {converterToJalali(item.created_at)}{' '}
                            </td>

                            <td className="border px-4 py-2 text-right">
                                <button
                                    type="button"
                                    onClick={() => handleDelete(item, index)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
            </Table>
        </div>
    )
}

export default GalleryManagement
