'use client'
import { Formik, Form } from 'formik'
import Link from 'next/link'
import InputError from '@/common/inputs/InputError'
import GalleryManagement from './GalleryManagement'
import { convertToForm } from '@/utility'
import { useGalleryRequest } from '@/hooks/admin/useGalleryRequest'

const GalleryUploader = ({ product }) => {
    console.log(product)
    const { createGallery } = useGalleryRequest()

    return (
        <Formik
            initialValues={{
                state: 1,
                product_id: product.id,
                images: product.gallery ?? [],
            }}
            onSubmit={(values, { setErrors }) =>
                createGallery({ data: convertToForm(values), setErrors })
            }>
            {({ values, setFieldValue }) => (
                <Form className="flex flex-col gap-4">
                    {/* Uploader */}
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 hover:border-primary/40 transition-colors">
                        <label className="flex flex-col items-center gap-2 cursor-pointer">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-text-muted">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                            <span className="text-[13px] text-text-secondary">
                                برای آپلود کلیک کنید
                            </span>
                            <input
                                type="file"
                                multiple
                                className="hidden"
                                onChange={e =>
                                    setFieldValue('images', [
                                        ...e.currentTarget.files,
                                        ...values.images,
                                    ])
                                }
                            />
                        </label>
                    </div>

                    <InputError name="images" />

                    {/* Gallery list */}
                    <GalleryManagement
                        name="images"
                        value={values.images}
                        setFieldValue={setFieldValue}
                    />

                    {/* Footer */}
                    <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                        <Link
                            href="/admin/product"
                            className="px-4 h-9 border border-slate-300 rounded-lg text-[13px] text-text-secondary flex items-center hover:border-slate-400 transition-colors">
                            انصراف
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            ثبت تغییرات
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default GalleryUploader
