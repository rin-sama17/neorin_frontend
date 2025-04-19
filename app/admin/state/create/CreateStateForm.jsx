'use client'
import { Form, Formik } from 'formik'
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useStateRequest } from '@/hooks/admin/useStateRequest'

const CreateStateForm = ({ states }) => {
    const { createState } = useStateRequest()
    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                parent_id: '',
                status: 1,
            }}
            onSubmit={async (data, { setErrors }) => {
                createState({
                    ...data,
                    setErrors,
                })
            }}>
            <Form className="gap-4 p-3 grid lg:grid-cols-2">
                <div className="col-span-2">
                    <Label htmlFor="name">نام *</Label>
                    <Input type="text" name="name" placeholder="نام محل" />
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
                        minLength={6}
                        name="description"
                        placeholder="توضیحات محل"
                    />

                    <InputError name="description" />
                </div>
                <div className="col-span-1">
                    <Label htmlFor="parent_id">محل پدر</Label>
                    <Input
                        type="text"
                        name="parent_id"
                        className="pr-9"
                        as="select">
                        <option value="">محل اصلی</option>

                        {states?.data.map(state => (
                            <option key={state.id} value={state.id}>
                                {state.name}
                            </option>
                        ))}
                    </Input>
                    <InputError name="parent_id" />
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
                        ساخت محل
                    </button>
                    <Link
                        href="/admin/state"
                        className="btn btn-secondary mr-4">
                        انصراف
                    </Link>
                </div>
            </Form>
        </Formik>
    )
}

export default CreateStateForm
