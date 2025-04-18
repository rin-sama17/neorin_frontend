'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useCategoryValueRequest } from '@/hooks/admin/useCategoryValueRequest'

const UpdateCategoryValueForm = ({ categoryValue, attributes }) => {
    const { updateCategoryValue } = useCategoryValueRequest()

    return (
        <Formik
            initialValues={{
                value: categoryValue.value,
                type: categoryValue.type,
                category_attribute_id: String(
                    categoryValue.categoryAttribute.id,
                ),
                status: categoryValue.status,
            }}
            onSubmit={async (data, { setErrors }) => {
                updateCategoryValue({
                    ...data,
                    categoryValueId: categoryValue.id,
                    setErrors,
                })
            }}>
            <Form className="gap-4 p-3 grid lg:grid-cols-2">
                <div className="col-span-2">
                    <Label htmlFor="value"> مقدار *</Label>
                    <Input type="text" name="value" placeholder=" مقدار نسبت" />
                    <p className="text-sm text-gray-500 mr-2">
                        بین 2 تا 120 کاراکتر
                    </p>
                    <InputError name="value" />
                </div>

                <div className="col-span-1">
                    <Label htmlFor="category_attribute_id">نسبت *</Label>
                    <Input
                        type="text"
                        name="category_attribute_id"
                        className="pr-9"
                        as="select">
                        {attributes?.data.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Input>
                    <InputError name="category_attribute_id" />
                </div>
                <div className="col-span-1">
                    <Label htmlFor="type"> نوع *</Label>
                    <Input type="text" name="type" as="select" className="pr-9">
                        <option value={1}> متن</option>
                        <option value={0}>انتخاب</option>
                    </Input>
                    <InputError name="type" />
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

                <div className="flex">
                    <button className="btn btn-primary mr-4" type="submit">
                        ساخت نسبت
                    </button>
                    <Link
                        href="/admin/category-attribute"
                        className="btn btn-secondary mr-4">
                        انصراف
                    </Link>
                </div>
            </Form>
        </Formik>
    )
}

export default UpdateCategoryValueForm
