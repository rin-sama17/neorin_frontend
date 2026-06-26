'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import Link from 'next/link'
import { useCategoryAttributeRequest } from '@/hooks/admin/useCategoryAttributeRequest'
import SelectDropdown from '@/common/inputs/Selector'

const UpdateAttributeForm = ({ attribute, categories }) => {
    const { updateAttribute } = useCategoryAttributeRequest()

    return (
        <Formik
            initialValues={{
                name: attribute.name,
                unit: attribute.unit,
                category_id: attribute.category.id,
                type: attribute.type,
                status: attribute.status,
            }}
            onSubmit={async (data, { setErrors }) => {
                updateAttribute({
                    ...data,
                    attributeId: attribute.id,
                    setErrors,
                })
            }}>
            {({ values }) => (
                <Form className="bg-white rounded-xl p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">ویرایش نسبت</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <Label>نام</Label>
                            <Input name="name" placeholder="نام نسبت" />
                        </div>

                        <div>
                            <Label>واحد</Label>
                            <Input name="unit" placeholder="مثال: متر" />
                        </div>

                        <SelectDropdown
                            label="دسته بندی"
                            name="category_id"
                            options={categories?.data || []}
                            placeholder="انتخاب دسته"
                        />

                        <SelectDropdown
                            name="type"
                            label="نوع"
                            options={[
                                { id: 1, name: 'متن' },
                                { id: 0, name: 'انتخاب' },
                            ]}
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
                                href="/admin/category-attribute"
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

export default UpdateAttributeForm
