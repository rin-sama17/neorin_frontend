'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import Link from 'next/link'
import { useFabricRequest } from '@/hooks/admin/useFabricRequest'
import { convertToForm } from '@/utility'
import ImageUploader from '@/common/image/ImageUploader'
import SelectDropdown from '@/common/inputs/Selector'
import PriceInput from '@/common/inputs/PriceInput'

const UpdateFabricForm = ({ fabric, categories, colors, products }) => {
    const { updateFabric } = useFabricRequest()

    return (
        <Formik
            initialValues={{
                title: fabric.title,
                material: fabric.material,
                color_ids: fabric.color?.map(c => c.id) || [],
                image: fabric.image,
                product_ids: fabric.products?.map(p => p.id) || [],
                category_id: String(fabric.category?.id || ''),
                price: fabric.price,
                status: parseInt(fabric.status),
            }}
            onSubmit={async (values, { setErrors }) => {
                updateFabric({
                    data: convertToForm(values),
                    fabricId: fabric.id,
                    setErrors,
                })
            }}>
            {({ values, setFieldValue }) => (
                <Form className="bg-white rounded-xl p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">ویرایش پارچه</h2>
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
                            <Label>عنوان</Label>
                            <Input name="title" placeholder="نام پارچه" />
                        </div>

                        <div>
                            <Label>جنس</Label>
                            <Input name="material" placeholder="مثال: پنبه" />
                        </div>

                        <PriceInput
                            value={values}
                            name="price"
                            setFieldValue={setFieldValue}
                        />

                        <SelectDropdown
                            label="دسته بندی"
                            name="category_id"
                            options={categories?.data || []}
                            placeholder="انتخاب دسته"
                        />

                        <SelectDropdown
                            label="رنگ ها"
                            name="color_ids"
                            options={colors?.data || []}
                            placeholder="انتخاب رنگ"
                            multiple
                            showColor
                        />

                        <SelectDropdown
                            label="محصولات"
                            name="product_ids"
                            options={products?.data || []}
                            placeholder="انتخاب محصول"
                            multiple
                        />

                        <SelectDropdown
                            name="status"
                            label="وضعیت"
                            options={[
                                { id: 1, name: 'فعال' },
                                { id: 0, name: 'غیرفعال' },
                            ]}
                        />

                        <div className="mt-6 border-t pt-4 flex justify-end gap-2 col-span-3">
                            <Link
                                href="/admin/fabric"
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

export default UpdateFabricForm
