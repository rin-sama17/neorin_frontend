'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from '../../components/Input'
import InputError from '../../components/InputError'
import Label from '../../components/Label'
import OtpVerify from '../OtpVerify'

const Page = () => {
    const { otp } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [token, setToken] = useState('')

    return (
        <Formik
            initialValues={{ mobile: '' }}
            onSubmit={async (values, { setErrors }) => {
                otp({
                    mobile: values.mobile,
                    setErrors,
                    setToken,
                    setMessage,
                })
            }}>
            {({ values }) => (
                <>
                    {token ? (
                        <OtpVerify
                            mobile={values.mobile}
                            token={token}
                            setMessage={setMessage}
                            setError={setError}
                            setToken={setToken}
                        />
                    ) : (
                        <Form>
                            <Label htmlFor="mobile">شماره</Label>

                            <Input
                                type="text"
                                name="mobile"
                                placeholder="شماره موبایل"
                            />

                            <InputError name="mobile" />

                            <div className="flex items-center justify-start mt-4">
                                <Link
                                    href="/login"
                                    className="underline text-sm text-gray-600 hover:text-gray-900">
                                    در حال حاضر حساب دارید؟
                                </Link>
                                <button
                                    className="btn btn-primary mr-4"
                                    type="submit">
                                    ثبت نام
                                </button>
                            </div>
                        </Form>
                    )}
                    {error && (
                        <div className="w-full py-5 px-3 my-2 rounded-lg bg-red-400 text-red-700">
                            {error}
                        </div>
                    )}
                    {message && !error && (
                        <div className="w-full py-5 px-3 my-2 rounded-lg bg-green-400 text-green-700">
                            {message}
                        </div>
                    )}
                </>
            )}
        </Formik>
    )
}

export default Page
