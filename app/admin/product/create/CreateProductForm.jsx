'use client'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import { useAdminRequest } from '@/admin/services'
import Link from 'next/link'
import Image from 'next/image'

const CreateProductForm = ({ categories, cities }) => {
    const { createProduct, convertToForm } = useAdminRequest()
    const [message, setMessage] = useState('')
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
                const data = convertToForm(values)
                createProduct({
                    data,
                    setErrors,
                    setMessage,
                })
            }}>
            {({ setFieldValue, values }) => (
                <Form className="gap-4 p-3 grid lg:grid-cols-3">
                    <div className="col-span-3">
                        <Label htmlFor="title">نام *</Label>
                        <Input
                            type="text"
                            name="title"
                            placeholder="نام محصول"
                        />
                        <p className="mt-2 text-sm text-gray-500 mr-2">
                            بین 2 تا 120 کاراکتر
                        </p>
                        <InputError name="title" />
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="description">توضیحات</Label>
                        <Input
                            as="textarea"
                            type="text"
                            name="description"
                            placeholder="توضیحات محصول"
                        />
                        <p className="mt-2 text-sm text-gray-500 mr-2">
                            بین 2 تا 500 کاراکتر
                        </p>

                        <InputError name="description" />
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="image">عکس</Label>
                        <input
                            type="file"
                            onChange={event => {
                                setFieldValue(
                                    'image',
                                    event.currentTarget.files[0],
                                )
                            }}
                            name="image"
                            className="w-full rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-2 border-gray-300   file:ml-2 file:py-2 file:px-4 file:rounded-s-lg file:border-0 file:text-lg file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-700"
                            id="image"
                        />

                        <InputError name="image" />
                    </div>

                    <div className="col-span-1">
                        <Label htmlFor="price">قیمت</Label>
                        <Input type="text" name="price" />

                        <InputError name="price" />
                    </div>
                    <div className="col-span-1">
                        <Label htmlFor="product_type">نوع محصول</Label>
                        <Input type="text" name="product_type" />
                        <p className="mt-2 text-sm text-gray-500 mr-2">
                            برای مثال: بازی
                        </p>
                        <InputError name="product_type" />
                    </div>
                    <div className="col-span-1">
                        <Label htmlFor="product_status">وضعیت محصول *</Label>
                        <Input
                            type="text"
                            name="product_status"
                            as="select"
                            className="pr-9">
                            <option value={'در حد نو'}>در حد نو</option>
                            <option value={'کارکرده'}>کارکرده</option>
                        </Input>
                        <InputError name="product_status" />
                    </div>
                    <div className="col-span-3">
                        <Label htmlFor="tags">برچسب ها</Label>
                        <Input
                            as="textarea"
                            type="text"
                            name="tags"
                            placeholder="برچسب های محصول"
                        />
                        <p className="mt-2 text-sm text-gray-500 mr-2">
                            با / از هم جدا کنید
                        </p>

                        <InputError name="tags" />
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
                        <Label htmlFor="is_special">ویژه</Label>
                        <Input
                            type="text"
                            name="is_special"
                            as="select"
                            className="pr-9">
                            <option value={0}>غیرفعال</option>
                            <option value={1}>فعال</option>
                        </Input>
                        <InputError name="is_special" />
                    </div>
                    <div className="col-span-1">
                        <Label htmlFor="is_ladder">نردبان</Label>
                        <Input
                            type="text"
                            name="is_ladder"
                            as="select"
                            className="pr-9">
                            <option value={0}>غیرفعال</option>
                            <option value={1}>فعال</option>
                        </Input>
                        <InputError name="is_ladder" />
                    </div>

                    <div className="col-span-3">
                        <Label htmlFor="contact">ارتباط</Label>
                        <Input
                            type="text"
                            name="contact"
                            as="textarea"
                            placeholder="راه های ارتباطی شما"
                        />

                        <InputError name="contact" />
                    </div>
                    <div className="col-span-1">
                        <Label htmlFor="willing_to_trade">مایل به معاوضه</Label>
                        <Input
                            type="text"
                            name="willing_to_trade"
                            as="select"
                            className="pr-9">
                            <option value={1}>فعال</option>
                            <option value={0}>غیرفعال</option>
                        </Input>
                        <InputError name="willing_to_trade" />
                    </div>
                    <div className="col-span-1">
                        <Label htmlFor="city_id">شهر *</Label>
                        <Input
                            type="text"
                            name="city_id"
                            className="pr-9"
                            as="select">
                            <option value="">---انتخاب کنید---</option>

                            {cities?.data.map(city => (
                                <option key={city.id} value={city.id}>
                                    {city.name}
                                </option>
                            ))}
                        </Input>
                        <InputError name="city_id" />
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
                    <div className="flex">
                        <button className="btn btn-primary mr-4" type="submit">
                            ساخت محصول
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
            )}
        </Formik>
    )
}

export default CreateProductForm
