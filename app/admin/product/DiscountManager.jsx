'use client'

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

import Input from '@/common/inputs/Input'
import Label from '@/common/inputs/Label'
import SelectDropdown from '@/common/inputs/Selector'
import { useDiscountRequest } from '@/hooks/admin/useDiscountRequest'
import DateSelector from '@/common/other/DateSelector'
import TimeSelectore from '@/common/other/TimeSelectore'
import { getRelativeDateText } from '@/utility/getRelativeDateText'
import InputError from '@/common/inputs/InputError'

const combineDateTime = (date, hour, minute) => {
    if (!date) return ''

    const d = new Date(date)

    d.setHours(Number(hour))
    d.setMinutes(Number(minute))
    d.setSeconds(0)

    return d.toISOString()
}
const DiscountManager = ({ productId }) => {
    const [open, setOpen] = useState(false)

    const createDiscount = useDiscountRequest({ productId })

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="icon-btn hover:text-yellow-600 hover:bg-yellow-50">
                <i className="fa fa-percentage" />
            </button>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
                    <div
                        onClick={e => e.stopPropagation()}
                        className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl">
                        <Formik
                            initialValues={{
                                product_id: productId,
                                description: '',
                                value: '',
                                is_active: 1,

                                start_date: new Date(),
                                end_date: new Date(),
                                start_hour: '00',
                                start_minute: '00',

                                end_hour: '23',
                                end_minute: '59',
                            }}
                            onSubmit={(values, { setErrors }) => {
                                const data = {
                                    ...values,

                                    starts_at: combineDateTime(
                                        values.start_date,
                                        values.start_hour,
                                        values.start_minute,
                                    ),

                                    ends_at: combineDateTime(
                                        values.end_date,
                                        values.end_hour,
                                        values.end_minute,
                                    ),
                                }

                                if (
                                    new Date(data.ends_at) <=
                                    new Date(data.starts_at)
                                ) {
                                    setErrors({
                                        ends_date:
                                            'تاریخ پایان نمی‌تواند قبل از تاریخ شروع باشد',
                                    })

                                    return
                                }

                                createDiscount({
                                    data,
                                    setErrors,
                                })
                            }}>
                            {({ values, setFieldValue, isSubmitting }) => (
                                <Form>
                                    <div className="flex items-center justify-between border-b border-slate-100 p-6">
                                        <div>
                                            <h2 className="font-bold text-xl">
                                                ایجاد تخفیف
                                            </h2>
                                            <p className="text-sm text-slate-500 mt-1">
                                                تنظیم زمان‌بندی و مشخصات تخفیف
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="h-10 w-10 rounded-full hover:bg-slate-100 transition">
                                            ✕
                                        </button>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="grid gap-4 lg:grid-cols-3">
                                            <div>
                                                <Label>عنوان / توضیحات</Label>

                                                <Input
                                                    name="description"
                                                    placeholder="تخفیف جشنواره تابستانی"
                                                />
                                            </div>

                                            <div>
                                                <Label>مقدار تخفیف</Label>

                                                <Input
                                                    name="value"
                                                    type="number"
                                                    placeholder="20"
                                                />
                                            </div>

                                            <SelectDropdown
                                                label="وضعیت"
                                                name="is_active"
                                                options={[
                                                    {
                                                        id: 1,
                                                        name: 'فعال',
                                                    },
                                                    {
                                                        id: 0,
                                                        name: 'غیرفعال',
                                                    },
                                                ]}
                                            />
                                        </div>

                                        <div className="col-span-3 rounded-3xl border border-slate-200 bg-slate-50/60 p-5">
                                            <div className="mb-5">
                                                <h3 className="font-semibold">
                                                    زمان‌بندی تخفیف
                                                </h3>

                                                <p className="text-sm text-slate-500 mt-1">
                                                    تاریخ و ساعت شروع و پایان
                                                    تخفیف
                                                </p>
                                            </div>

                                            <div className="grid gap-5 lg:grid-cols-2">
                                                {/* شروع */}

                                                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                        <span className="font-medium">
                                                            شروع تخفیف
                                                        </span>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <DateSelector
                                                            value={
                                                                values.start_date
                                                            }
                                                            setFieldValue={
                                                                setFieldValue
                                                            }
                                                            name="start_date"
                                                        />
                                                        <TimeSelectore name="start" />
                                                        <InputError
                                                            name={'starts_at'}
                                                        />
                                                    </div>
                                                </div>

                                                {/* پایان */}

                                                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                                        <span className="font-medium">
                                                            پایان تخفیف
                                                        </span>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <DateSelector
                                                            minDate={
                                                                values.start_date
                                                            }
                                                            value={
                                                                values.end_date
                                                            }
                                                            setFieldValue={
                                                                setFieldValue
                                                            }
                                                            name="end_date"
                                                        />
                                                        <TimeSelectore
                                                            name="end"
                                                            values={values}
                                                        />
                                                        <InputError
                                                            name={'ends_at'}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-5 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                                                <p className="text-sm text-slate-700">
                                                    تخفیف تا
                                                    <span className="mx-1 font-semibold text-primary">
                                                        {getRelativeDateText(
                                                            values.end_date,
                                                        )}
                                                    </span>
                                                    ساعت
                                                    <span className="mx-1 font-semibold">
                                                        {values.end_hour}:
                                                        {values.end_minute}
                                                    </span>
                                                    معتبر است.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-3 border-t border-slate-100 p-6">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50">
                                            انصراف
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-6 py-2.5 rounded-xl bg-primary text-white disabled:opacity-50">
                                            ذخیره تخفیف
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    )
}

export default DiscountManager
