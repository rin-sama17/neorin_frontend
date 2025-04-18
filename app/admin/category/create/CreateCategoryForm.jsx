'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useCategoryRequest } from '@/hooks/admin/useCategoryRequest'

const CreateCategoryForm = ({ categories }) => {
    const { createCategory } = useCategoryRequest()
    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                icon: '',
                status: 1,
                parent_id: '',
            }}
            onSubmit={async (values, { setErrors }) => {
                const data = {
                    ...values,
                    parent_id: values.parent_id
                        ? parseInt(values.parent_id)
                        : null,
                }
                createCategory({
                    ...data,
                    setErrors,
                })
            }}>
            <Form className="gap-4 p-3 grid lg:grid-cols-2">
                <div className="col-span-2">
                    <Label htmlFor="name">نام *</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="نام دسته بندی"
                    />
                    <p className="text-sm text-gray-500 mr-2">
                        بین 2 تا 120 کاراکتر
                    </p>
                    <InputError name="name" />
                </div>

                <div className="col-span-2">
                    <Label htmlFor="description">توضیحات *</Label>
                    <Input
                        as="textarea"
                        type="text"
                        name="description"
                        placeholder="توضیحات دسته بندی"
                    />
                    <p className="text-sm text-gray-500 mr-2">
                        بین 2 تا 500 کاراکتر
                    </p>
                    <InputError name="description" />
                </div>

                <div className="col-span-2">
                    <Label htmlFor="icon">ایکون</Label>
                    <Input type="text" name="icon" placeholder="fa" />
                    <p className="text-sm text-gray-500 mr-2">
                        ایکون font awesome
                    </p>
                    <InputError name="icon" />
                </div>
                <div className="col-span-1">
                    <Label htmlFor="status">وضعیت</Label>
                    <Input
                        type="text"
                        name="status"
                        as="select"
                        className="pr-9">
                        <option value={1}>فعال</option>
                        <option value={0}>غیرفعال</option>
                    </Input>
                    <InputError name="status" />
                </div>
                <div className="col-span-1">
                    <Label htmlFor="parent_id">دسته پدر</Label>
                    <Input
                        type="text"
                        name="parent_id"
                        className="pr-9"
                        as="select">
                        <option value="">دسته اصلی</option>

                        {categories?.data.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Input>
                    <InputError name="parent_id" />
                </div>
                <div className="flex">
                    <button className="btn btn-primary mr-4" type="submit">
                        ساخت دسته بندی
                    </button>
                    <Link
                        href="/admin/category"
                        className="btn btn-secondary mr-4">
                        انصراف
                    </Link>
                </div>
            </Form>
        </Formik>
    )
}

export default CreateCategoryForm
