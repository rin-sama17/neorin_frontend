'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import InputError from '@/common/inputs/InputError'
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
        <Form className="bg-white rounded-xl ">

    <div className="mb-6">
        <h2 className="text-lg font-semibold">
            ساخت دسته بندی جدید
        </h2>

        <p className="text-sm text-slate-500 mt-1">
            اطلاعات دسته بندی را وارد کنید.
        </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="lg:col-span-2">
            <Label htmlFor="name">نام دسته</Label>
            <Input
                name="name"
                placeholder="مثال: پارچه مبلی"
                className="w-full"
            />
            <InputError name="name" />
        </div>

        <div>
            <Label htmlFor="icon">آیکون</Label>
            <Input
                name="icon"
                placeholder="fa-box"
                className="w-full"
            />
            <InputError name="icon" />
        </div>

        <div className="lg:col-span-3">
            <Label htmlFor="description">توضیحات</Label>
            <Input
                as="textarea"
                rows={4}
                name="description"
                className="w-full"
                placeholder="توضیحات دسته بندی"
            />
            <InputError name="description" />
        </div>

        <div>
            <Label htmlFor="parent_id">دسته والد</Label>

            <Input
                as="select"
                name="parent_id"
                className="w-full px-3"
            >
                <option value="">
                    دسته اصلی
                </option>

                {categories?.data.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </Input>

            <InputError name="parent_id" />
        </div>

        <div>
            <Label htmlFor="status">وضعیت</Label>

            <Input
                as="select"
                name="status"
                className="w-full px-3"
            >
                <option value={1}>فعال</option>
                <option value={0}>غیرفعال</option>
            </Input>

            <InputError name="status" />
        </div>

    </div>

    <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
        <Link
            href="/admin/category"
            className="h-9 px-4 flex items-center rounded-md border border-slate-200 text-sm hover:bg-slate-50"
        >
            انصراف
        </Link>

        <button
            type="submit"
            className="h-9 px-4 rounded-md bg-primary text-white text-sm"
        >
            ذخیره
        </button>
    </div>

</Form>
        </Formik>
    )
}

export default CreateCategoryForm
