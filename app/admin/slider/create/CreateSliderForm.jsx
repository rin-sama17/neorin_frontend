'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import Link from 'next/link'
import { useSliderRequest } from '@/hooks/admin/useSliderRequest'
import { convertToForm } from '@/utility'
import ImageUploader from '@/common/image/ImageUploader'
import SelectDropdown from '@/common/inputs/Selector'

const CreateSliderForm = () => {
    const { createSlider } = useSliderRequest()
    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                type: 1,
                image: '',
                link: 'http://',
                status: 1,
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
                createSlider({ data: convertToForm(data), setErrors })
            }}>
            {({ values, setFieldValue }) => (
                <Form className="bg-white rounded-xl p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            ساخت اسلایدر جدید
                        </h2>
                    </div>

                    <div className="container mb-6">
                        <ImageUploader
                            value={values.image}
                            name="image"
                            isLink
                            setFieldValue={setFieldValue}
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4">
                        <SelectDropdown
                            name="type"
                            label="نوع"
                            options={[
                                { id: 1, name: 'کپشن دار' },
                                { id: 0, name: 'عکس' },
                            ]}
                        />

                        {values.type == 1 && (
                            <>
                                <div className="col-span-2">
                                    <Label>عنوان</Label>
                                    <Input
                                        name="title"
                                        placeholder="عنوان اسلایدر"
                                    />
                                </div>

                                <div className="col-span-3">
                                    <Label>توضیحات</Label>
                                    <Input
                                        as="textarea"
                                        rows={4}
                                        name="description"
                                        placeholder="توضیحات اسلایدر"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <Label>لینک</Label>
                            <Input
                                name="link"
                                placeholder="http://..."
                                style={{ direction: 'ltr' }}
                            />
                        </div>

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
                                href="/admin/slider"
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

export default CreateSliderForm
