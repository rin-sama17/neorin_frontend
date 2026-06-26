'use client'
import { Form, Formik } from 'formik'
import Label from '@/common/inputs/Label'
import Input from '@/common/inputs/Input'
import Link from 'next/link'
import { usePageRequest } from '@/hooks/admin/usePageRequest'
import SelectDropdown from '@/common/inputs/Selector'

const CreatePageForm = () => {
    const { createPage } = usePageRequest()
    return (
        <Formik
            initialValues={{
                title: '',
                body: '',
                status: 1,
            }}
            onSubmit={async (data, { setErrors }) => {
                createPage({
                    data,
                    setErrors,
                })
            }}>
            {({ values }) => (
                <Form className="bg-white rounded-xl p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            ساخت صفحه جدید
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <Label>نام صفحه</Label>
                            <Input name="title" placeholder="نام صفحه" />
                        </div>
                        <SelectDropdown
                            name="status"
                            label="وضعیت"
                            options={[
                                { id: 1, name: 'فعال' },
                                { id: 0, name: 'غیرفعال' },
                            ]}
                        />

                        <div className="col-span-3">
                            <Label>بدنه</Label>
                            <Input
                                as="textarea"
                                rows={5}
                                name="body"
                                placeholder="کد html, css و..."
                            />
                        </div>

                        <div className="mt-6 border-t pt-4 flex justify-end gap-2 col-span-3">
                            <Link
                                href="/admin/pages"
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

export default CreatePageForm
