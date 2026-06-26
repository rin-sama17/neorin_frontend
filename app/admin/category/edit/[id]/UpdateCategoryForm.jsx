'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import Link from 'next/link'
import { useCategoryRequest } from '@/hooks/admin/useCategoryRequest'
import SelectDropdown from '@/common/inputs/Selector'

const UpdateCategoryForm = ({ category, categories }) => {
    const { updateCategory } = useCategoryRequest()

    return (
        <Formik
            initialValues={{
                name: category.name,
                description: category.description,
                icon: category.icon,
                status: parseInt(category.status),
                parent_id: category.parent_id ? category.parent_id : '',
            }}
            onSubmit={async (values, { setErrors }) => {
                const data = {
                    ...values,
                    status: parseInt(values.status),
                    parent_id: values.parent_id
                        ? parseInt(values.parent_id)
                        : null,
                }
                updateCategory({
                    ...data,
                    categoryId: category.id,
                    setErrors,
                })
            }}>
            {({ values }) => (
                <Form className="bg-white rounded-xl p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            ویرایش دسته بندی
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            <Label>نام دسته</Label>
                            <Input name="name" placeholder="مثال: پارچه مبلی" />
                        </div>

                        <div>
                            <Label>آیکون</Label>
                            <Input name="icon" placeholder="fa-box" />
                        </div>

                        <div className="col-span-3">
                            <Label>توضیحات</Label>
                            <Input
                                as="textarea"
                                rows={4}
                                name="description"
                                placeholder="توضیحات دسته بندی"
                            />
                        </div>

                        <SelectDropdown
                            label="دسته والد"
                            name="parent_id"
                            options={[
                                { id: '', name: 'دسته اصلی' },
                                ...(categories?.data || []),
                            ]}
                            placeholder="دسته اصلی"
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
                                href="/admin/category"
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

export default UpdateCategoryForm
