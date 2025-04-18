'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useCategoryAttributeRequest } from '@/hooks/admin/useCategoryAttributeRequest'

const CreateAttributeForm = ({ categories }) => {
    const { createAttribute } = useCategoryAttributeRequest()
    return (
        <Formik
            initialValues={{
                name: '',
                unit: '',
                category_id: '',
                type: '',
                status: 1,
            }}
            onSubmit={async (data, { setErrors }) => {
                createAttribute({
                    ...data,
                    setErrors,
                })
            }}>
            <Form className="gap-4 p-3 grid lg:grid-cols-2">
                <div className="col-span-2">
                    <Label htmlFor="name">نام *</Label>
                    <Input type="text" name="name" placeholder="نام نسبت" />
                    <p className="text-sm text-gray-500 mr-2">
                        بین 2 تا 120 کاراکتر
                    </p>
                    <InputError name="name" />
                </div>

                <div className="col-span-1">
                    <Label htmlFor="unit"> واحد *</Label>
                    <Input type="text" name="unit" placeholder=" واحد نسبت" />
                    <p className="text-sm text-gray-500 mr-2">برای مثال: متر</p>
                    <InputError name="unit" />
                </div>
                <div className="col-span-1">
                    <Label htmlFor="category_id">دسته بندی *</Label>
                    <Input
                        type="text"
                        name="category_id"
                        className="pr-9"
                        as="select">
                        <option value="">---انتخاب کنید---</option>

                        {categories?.data.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Input>
                    <InputError name="category_id" />
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

export default CreateAttributeForm
