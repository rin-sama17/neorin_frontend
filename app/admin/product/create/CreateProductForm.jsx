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

const CreateProductForm = ({ categories, cities }) => {
    const { createProduct } = useProductRequest()
    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                product_type: '',
                product_status: 'در حد نو',
                category_id: '',
                city_id: '',
                contact: '',
                is_special: 0,
                is_ladder: 0,
                image: '',
                price: '',
                tags: '',
                lat: '',
                lng: '',
                willing_to_trade: 0,
                status: 1,
            }}
            onSubmit={async (values, { setErrors }) => {
                console.log(values)
                const data = convertToForm(values)
                createProduct({
                    data,
                    setErrors,
                })
            }}>
            {({ setFieldValue, values, handleChange }) => (
               <Form className="bg-white rounded-xl border border-slate-200 p-6">

    <div className="mb-6">
        <h2 className="text-lg font-semibold">
            محصول جدید
        </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-4">

        <div>
            <Label>نام محصول</Label>
            <Input
                name="title"
                placeholder="ست روتختی آرام"
            />
            <InputError name="title" />
        </div>

        <div>
            <Label>قیمت</Label>
            <PriceInput
                value={values}
                name="price"
                setFieldValue={setFieldValue}
            />
            <InputError name="price" />
        </div>

        <div>
            <Label>دسته بندی</Label>

            <Input
                as="select"
                name="category"
            >
                <option value="">
                    انتخاب دسته
                </option>

                {categories.data.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </Input>

            <InputError name="category" />
        </div>

        <div>
            <Label>جنس پارچه</Label>

            <Input
                name="material"
                placeholder="پنبه"
            />

            <InputError name="material" />
        </div>

    </div>

    <div className="mt-4">
        <Label>توضیحات</Label>

        <Input
            as="textarea"
            rows={5}
            name="description"
            placeholder="توضیحات محصول"
        />

        <InputError name="description" />
    </div>

    <div className="grid lg:grid-cols-2 gap-4 mt-4">

        <div>
            <Label>وضعیت</Label>

            <Input
                as="select"
                name="status"
            >
                <option value={1}>
                    فعال
                </option>

                <option value={0}>
                    غیرفعال
                </option>
            </Input>
        </div>

        <div>
            <Label>محصول ویژه</Label>

            <Input
                as="select"
                name="is_special"
            >
                <option value={0}>
                    خیر
                </option>

                <option value={1}>
                    بله
                </option>
            </Input>
        </div>

    </div>

    <div className="mt-6 border-t pt-4 flex justify-end gap-2">

        <Link
            href="/admin/product"
            className="px-4 h-9 border rounded-md flex items-center"
        >
            انصراف
        </Link>

        <button
            type="submit"
            className="px-4 h-9 rounded-md bg-primary text-white"
        >
            ذخیره
        </button>

    </div>

</Form>
            )}
        </Formik>
    )
}

export default CreateProductForm
