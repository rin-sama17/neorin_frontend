import ImagePreview from '@/common/image/ImagePreview'
import { useGalleryRequest } from '@/hooks/admin/useGalleryRequest'
import { converterToJalali } from '@/utility'

const GalleryManagement = ({ value = [], name, setFieldValue }) => {
    const { deleteGallery, updateGallery } = useGalleryRequest()
    const handleToggleStatus = item => {
        const status = item.status === 1 ? 0 : 1

        setFieldValue(
            name,
            value.map(image =>
                image.id === item.id ? { ...image, status } : image,
            ),
        )

        updateGallery({
            galleryId: item.id,
            product_id: item.product_id,
            status,
        })
    }
    const handleDelete = (item, index) => {
        const newImages = [...value]
        newImages.splice(index, 1)
        if (item.image) {
            deleteGallery({
                id: item.id,
                setState: () => setFieldValue(name, newImages),
            })
        } else {
            setFieldValue(name, newImages)
        }
    }

    if (!value || value.length === 0) return null

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-[13px] font-medium text-text-secondary">
                    گالری تصاویر
                </span>
                <span className="text-xs text-text-muted bg-white border border-slate-200 rounded-full px-2.5 py-0.5">
                    {value.length} تصویر
                </span>
            </div>

            {/* Grid */}
            <div className="divide-y divide-slate-100">
                {value.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors">
                        {/* Thumbnail */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 ring-1 ring-slate-200">
                            <ImagePreview item={item} />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-text-muted">
                                    #{item.id ?? index + 1}
                                </span>
                                <span
                                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                                        item.status == null
                                            ? 'bg-blue-50 text-blue-600'
                                            : item.status === 1
                                              ? 'bg-green-50 text-green-600'
                                              : 'bg-red-50 text-red-500'
                                    }`}>
                                    {item.status == null
                                        ? 'جدید'
                                        : item.status === 1
                                          ? 'فعال'
                                          : 'غیرفعال'}
                                </span>
                            </div>
                            {item.created_at && (
                                <p className="text-[11px] text-text-muted mt-0.5">
                                    {converterToJalali(item.created_at)}
                                </p>
                            )}
                        </div>
                        {item.status !== null && item.status !== undefined && (
                            <button
                                type="button"
                                onClick={() => handleToggleStatus(item)}
                                className="p-1.5 rounded-md text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition">
                                <i
                                    className={`fa ${
                                        item.status === 1
                                            ? 'fa-eye'
                                            : 'fa-eye-slash'
                                    }`}
                                />
                            </button>
                        )}

                        {/* Delete */}
                        <button
                            type="button"
                            onClick={() => handleDelete(item, index)}
                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors shrink-0">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryManagement
