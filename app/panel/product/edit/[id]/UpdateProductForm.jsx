'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import LinkButton from '@/components/LinkButton'
import { convertToForm } from '@/utility'
import { useProductRequest } from '@/hooks/panel/useProductRequest'
import ImageUploader from '@/panel/services/ImageUploader'

const UpdateProductForm = ({ categories, cities, product }) => {
    const { updateProduct } = useProductRequest()
    return (
        <Formik
            initialValues={{
                title: product.title,
                description: product.description,
                product_type: product.product_type,
                product_status: product.product_status,
                category_id: product.category.id,
                city_id: product.city.id,
                contact: product.contact,
                image: product.image,
                tags: product.tags,
                price: product.price,
                lat: product.lat,
                lng: product.lng,
                willing_to_trade: product.willing_to_trade,
            }}
            onSubmit={async (values, { setErrors }) => {
                const data = convertToForm(values)
                updateProduct({
                    productId: product.id,
                    data,
                    setErrors,
                })
            }}>
            {({ setFieldValue, values }) => (
                <Form className="gap-4 p-3 grid lg:grid-cols-3">
                    <div className="col-span-3">
                        <div className="mb-2">
                            <LinkButton
                                title={
                                    <>
                                        <i className="fa fa-photo ml-1"></i>
                                        رفتن به صفحه مدیریت گالری
                                    </>
                                }
                                href={`/panel/product/gallery/${product.id}`}
                                className="text-gray-500 text-lg "
                            />
                        </div>
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
                        <ImageUploader
                            value={values.image}
                            name="image"
                            setFieldValue={setFieldValue}
                        />
                    </div>

                    <div className="col-span-1">
                        <Label htmlFor="price">قیمت</Label>
                        <Input type="text" name="price" />
                        <InputError name="price" />s
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
                            بروزرسانی محصول
                        </button>
                        <Link
                            href="/panel/product"
                            className="btn btn-secondary mr-4">
                            انصراف
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default UpdateProductForm
