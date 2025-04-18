'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { usePageRequest } from '@/hooks/admin/usePageRequest'

const UpdatePageForm = ({ page }) => {
    const { updatePage } = usePageRequest()

    return (
        <Formik
            initialValues={{
                title: page.title,
                body: page.body,
                status: parseInt(page.status),
            }}
            onSubmit={async (data, { setErrors }) => {
                updatePage({
                    data,
                    pageId: page.id,
                    setErrors,
                })
            }}>
            <Form className="gap-4 p-3 grid lg:grid-cols-2">
                <div className="col-span-2">
                    <Label htmlFor="title">نام *</Label>
                    <Input type="text" name="title" placeholder="نام صفحه" />
                    <p className="text-sm text-gray-500 mr-2">
                        بین 2 تا 120 کاراکتر
                    </p>
                    <InputError name="title" />
                </div>

                <div className="col-span-2">
                    <Label htmlFor="body">بدنه *</Label>
                    <Input
                        as="textarea"
                        type="text"
                        minLength={6}
                        name="body"
                        placeholder="بدنه صفحه"
                    />
                    <p className="text-sm text-gray-500 mr-2">
                        کد html, css و...
                    </p>
                    <InputError name="body" />
                </div>

                <div className="col-span-3">
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
                        ساخت صفحه
                    </button>
                    <Link
                        href="/admin/pages"
                        className="btn btn-secondary mr-4">
                        انصراف
                    </Link>
                </div>
            </Form>
        </Formik>
    )
}

export default UpdatePageForm
