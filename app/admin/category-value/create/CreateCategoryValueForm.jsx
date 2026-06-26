'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import Link from 'next/link'
import { useCategoryValueRequest } from '@/hooks/admin/useCategoryValueRequest'
import SelectDropdown from '@/common/inputs/Selector'

const CreateCategoryValueForm = ({ attributes }) => {
    const { createCategoryValue } = useCategoryValueRequest()
    return (
        <Formik
            initialValues={{
                value: '',
                type: '',
                category_attribute_id: '',
                status: 1,
            }}
            onSubmit={async (data, { setErrors }) => {
                createCategoryValue({ ...data, setErrors })
            }}>
            {({ values }) => (
                <Form className="bg-white rounded-xl p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            ساخت مقدار جدید
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4">
                        <div className="col-span-3">
                            <Label>مقدار</Label>
                            <Input name="value" placeholder="مقدار نسبت" />
                        </div>

                        <SelectDropdown
                            label="نسبت"
                            name="category_attribute_id"
                            options={attributes?.data || []}
                            placeholder="انتخاب نسبت"
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

export default CreateCategoryValueForm
