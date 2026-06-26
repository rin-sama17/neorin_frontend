'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import InputError from '@/common/inputs/InputError'
import Link from 'next/link'
import { useProductRequest } from '@/hooks/admin/useProductRequest'
import { convertToForm } from '@/utility'
import ImageUploader from '@/common/image/ImageUploader'

import PriceInput from '@/common/inputs/PriceInput'
import SelectDropdown from '@/common/inputs/Selector'

const CreateProductForm = ({ categories, cities, colors, fabrics }) => {
    const { createProduct } = useProductRequest()
    const PUBLIC_URL = 'http://neorin.ir'

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                material: '',
                price: '',
                category_id: '',
                image: '',
                city_id: '',
                fabric_ids: [],
                color_ids: [],
                is_special: 0,
                meta_title: '',
                meta_description: '',
                tags: '',
                stock: '',
                status: 1,
            }}
            onSubmit={async (values, { setErrors }) => {
                const data = convertToForm(values)
                console.log(values)
                createProduct({
                    data,
                    setErrors,
                })
            }}>
            {({ setFieldValue, values, handleChange }) => (
                <Form className="bg-white rounded-xl  p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">محصول جدید</h2>
                    </div>
                    <div className="container mb-6">
                        <ImageUploader
                            value={values.image}
                            name="image"
                            setFieldValue={setFieldValue}
                        />
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4">
                        <div>
                            <Label>نام محصول</Label>
                            <Input name="title" placeholder="ست روتختی آرام" />
                        </div>

                        <div>
                            <Label>قیمت</Label>
                            <PriceInput
                                value={values}
                                name="price"
                                setFieldValue={setFieldValue}
                            />
                        </div>
                        <SelectDropdown
                            label="دسته بندی"
                            name="category_id"
                            options={categories.data}
                            placeholder="انتخاب دسته"
                        />

                        <div className="mt-4 col-span-3">
                            <Label>توضیحات</Label>

                            <Input
                                as="textarea"
                                rows={5}
                                name="description"
                                placeholder="توضیحات محصول"
                            />
                        </div>
                        <div>
                            <Label>موجودی</Label>
                            <Input
                                name="stock"
                                type="number"
                                placeholder="۱۰ عدد"
                            />
                        </div>
                        <div className="col-span-2">
                            <Label>تگ ها</Label>
                            <Input name="tags" placeholder="با / جدا کنید" />
                        </div>

                        <div>
                            <Label>جنس پارچه</Label>

                            <Input name="material" placeholder="پنبه" />
                        </div>

                        <SelectDropdown
                            name="status"
                            label="وضعیت"
                            options={[
                                { id: 1, name: 'فعال' },
                                { id: 0, name: 'غیرفعال' },
                            ]}
                        />

                        <SelectDropdown
                            name="is_special"
                            label="محصول ویژه"
                            options={[
                                { id: 1, name: 'بله' },
                                { id: 0, name: 'خیر' },
                            ]}
                        />

                        <SelectDropdown
                            label="رنگ ها"
                            name="color_ids"
                            options={colors.data}
                            placeholder="انتخاب رنگ"
                            multiple
                            showColor
                        />
                        <SelectDropdown
                            label="پارچه ها"
                            name="fabric_ids"
                            options={fabrics.data}
                            placeholder="انتخاب پارچه"
                            multiple
                            max={2}
                        />
                        <SelectDropdown
                            label="کشور سازنده"
                            name="city_id"
                            options={cities.data}
                            placeholder="انتخاب کشور"
                        />

                        <div className="col-span-2">
                            <Label>عنوان سئو</Label>

                            <Input
                                name="meta_title"
                                placeholder="مثال: خرید ست روتختی هتلی دونفره"
                            />

                            <div className="mt-1 flex justify-between text-xs text-slate-500">
                                <span>پیشنهاد: 50 تا 60 کاراکتر</span>
                                <span>{values.meta_title?.length || 0}/60</span>
                            </div>

                            <Label>توضیحات سئو</Label>

                            <Input
                                as="textarea"
                                rows={4}
                                name="meta_description"
                                placeholder="توضیح کوتاهی برای نمایش در نتایج گوگل بنویسید."
                            />

                            <div className="mt-1 flex justify-between text-xs text-slate-500">
                                <span>پیشنهاد: 120 تا 160 کاراکتر</span>
                                <span>
                                    {values.meta_description?.length || 0}/160
                                </span>
                            </div>
                        </div>
                        <div className="mt-4  rounded-lg  ring-2 ring-gray-300 p-4 bg-slate-50">
                            <p className="text-blue-600 text-lg line-clamp-1">
                                {values.meta_title || 'عنوان صفحه'}
                            </p>

                            <p className="text-green-700 text-xs mt-1">
                                {PUBLIC_URL}/product
                            </p>

                            <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                                {values.meta_description ||
                                    'توضیحات صفحه در نتایج گوگل نمایش داده می‌شود.'}
                            </p>
                        </div>
                        <div className="mt-6 border-t pt-4 flex justify-end gap-2 col-span-3">
                            <Link
                                href="/admin/product"
                                className="px-4 h-9 border rounded-md flex items-center">
                                انصراف
                            </Link>

                            <button
                                type="submit"
                                className="px-4 h-9 rounded-md bg-primary text-white">
                                ذخیره
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CreateProductForm
