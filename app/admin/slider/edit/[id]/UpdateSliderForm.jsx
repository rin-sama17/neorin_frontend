'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useSliderRequest } from '@/hooks/admin/useSliderRequest'
import ImageUploader from '@/admin/services/ImageUploader'
import { convertToForm } from '@/utility'

const UpdateSliderForm = ({ slider }) => {
    const { updateSlider } = useSliderRequest()

    return (
        <Formik
            initialValues={{
                title: slider.type == 0 ? '' : slider.title,
                description: slider.type == 0 ? '' : slider.description,
                type: slider.type,
                image: slider.image,
                link: slider.link,
                status: parseInt(slider.status),
            }}
            onSubmit={async (values, { setErrors }) => {
                let data
                if (values.type == 0) {
                    data = {
                        ...values,
                        title: 'no value',
                        description: 'no value',
                    }
                } else {
                    data = values
                }
                console.log(data)
                const form = convertToForm(data)
                updateSlider({
                    data: form,
                    sliderId: slider.id,
                    setErrors,
                })
            }}>
            {({ values, setFieldValue }) => (
                <Form className="gap-4 p-3 grid lg:grid-cols-2">
                    <div className="col-span-2">
                        <ImageUploader
                            value={values.image}
                            name="image"
                            isLink
                            setFieldValue={setFieldValue}
                        />
                    </div>
                    <div className="col-span-2">
                        <Label htmlFor="type">نوع</Label>
                        <Input
                            type="text"
                            name="type"
                            as="select"
                            className="pr-9">
                            <option value={1}>کپشن دار</option>
                            <option value={0}>عکس</option>
                        </Input>
                        <InputError name="type" />
                    </div>

                    {values.type == 1 && (
                        <>
                            <div className="col-span-2">
                                <Label htmlFor="title">عنوان *</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    placeholder="عنوان اسلایدر"
                                />
                                <p className="text-sm text-gray-500 mr-2">
                                    بین 2 تا 120 کاراکتر
                                </p>
                                <InputError name="title" />
                            </div>

                            <div className="col-span-2">
                                <Label htmlFor="description">توضیحات *</Label>
                                <Input
                                    as="textarea"
                                    type="text"
                                    minLength={6}
                                    name="description"
                                    placeholder="توضیحات اسلایدر"
                                />

                                <InputError name="description" />
                            </div>
                        </>
                    )}
                    <div className="col-span-1">
                        <Label htmlFor="link">لینک *</Label>
                        <Input
                            type="text"
                            name="link"
                            placeholder="http://..."
                            style={{ direction: 'ltr' }}
                        />
                        <p className="text-sm text-gray-500 mr-2">
                            لینک اسلایدر
                        </p>
                        <InputError name="link" />
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
                            ساخت اسلایدر
                        </button>
                        <Link
                            href="/admin/slider"
                            className="btn btn-secondary mr-4">
                            انصراف
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default UpdateSliderForm
