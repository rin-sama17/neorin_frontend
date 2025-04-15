'use client'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useAdminRequest } from '@/admin/services'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'

const CreateCategoryForm = ({ category, categories }) => {
    const { updateCategory } = useAdminRequest()
    const [message, setMessage] = useState('')

    return (
        <Formik
            initialValues={{
                name: category.name,
                description: category.description,
                icon: category.icon,
                status: parseInt(category.status),
                parent_id: category.parent_id ? String(category.parent_id) : '',
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
                    setMessage,
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
                        ویرایش دسته بندی
                    </button>
                    <Link
                        href="/admin/category"
                        className="btn btn-secondary mr-4">
                        انصراف
                    </Link>
                </div>
                {message && (
                    <div className="w-full py-5 px-3 my-2 rounded-lg bg-green-400 text-green-700">
                        {message}
                    </div>
                )}
            </Form>
        </Formik>
    )
}

export default CreateCategoryForm
