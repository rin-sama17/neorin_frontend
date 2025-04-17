'use client'
import { Form, Formik } from 'formik'
import { useAdminRequest } from '@/admin/services'
import Link from 'next/link'
import Label from '../../../../components/Label'
import InputError from '../../../../components/InputError'
import GalleryManagement from './GalleryManagement'

const GalleryUploader = ({ product }) => {
    const { createProductGallery, convertToForm } = useAdminRequest()
    return (
        <Formik
            initialValues={{
                product_id: product.id,
                images: product.gallery ?? [],
            }}
            onSubmit={async (values, { setErrors }) => {
                const data = convertToForm(values)
                createProductGallery({
                    data,
                    setErrors,
                })
            }}>
            {({ setFieldValue, values }) => (
                <Form className="gap-4 p-3 grid lg:grid-cols-3">
                    <div className="col-span-3">
                        <Label htmlFor="images">عکس</Label>
                        <input
                            type="file"
                            onChange={event => {
                                const files = Array.from(
                                    event.currentTarget.files,
                                )
                                setFieldValue('images', [
                                    ...files,
                                    ...values.images,
                                ])
                            }}
                            name="images"
                            className="w-full rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-2 border-gray-300   file:ml-2 file:py-2 file:px-4 file:rounded-s-lg file:border-0 file:text-lg file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-700"
                            id="images"
                        />
                        <InputError name="images" />
                    </div>
                    <div className="flex">
                        <button className="btn btn-primary mr-4" type="submit">
                            ثبت تغییرات
                        </button>
                        <Link
                            href="/admin/product"
                            className="btn btn-secondary mr-4">
                            انصراف
                        </Link>
                    </div>
                    <div className="col-span-3">
                        <GalleryManagement
                            value={values.images}
                            name="images"
                            setFieldValue={setFieldValue}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default GalleryUploader
