'use client'

import { Formik, Form } from 'formik'
import Input from '@/common/inputs/Input'
import Label from '@/common/inputs/Label'
import SelectDropdown from '@/common/inputs/Selector'
import { useDiscountRequest } from '@/hooks/admin/useDiscountRequest'
import DateSelector from '@/common/other/DateSelector'
import TimeSelectore from '@/common/other/TimeSelectore'
import { getRelativeDateText } from '@/utility/getRelativeDateText'
import InputError from '@/common/inputs/InputError'
import Link from 'next/link'
import { combineDateTime } from '@/utility/combineDateTime'

const UpdateDiscountForm = ({ discount, products, categories }) => {
    console.log(discount)
    const { updateDiscount } = useDiscountRequest()
    const start = new Date(discount.starts_at)
    const end = new Date(discount.ends_at)
    return (
        <Formik
            initialValues={{
                product_id: discount.product?.id ?? '',
                category_id: discount.category?.id ?? '',
                discount_type: discount.product?.id ? 'product' : 'category',

                description: discount.description,
                value: discount.value,
                is_active: discount.is_active,

                start_date: start,
                end_date: end,

                start_hour: start.getHours().toString().padStart(2, '0'),
                start_minute: start.getMinutes().toString().padStart(2, '0'),

                end_hour: end.getHours().toString().padStart(2, '0'),
                end_minute: end.getMinutes().toString().padStart(2, '0'),
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

                if (new Date(data.ends_at) <= new Date(data.starts_at)) {
                    setErrors({
                        end_date:
                            'تاریخ پایان نمی‌تواند قبل از تاریخ شروع باشد',
                    })

                    return
                }

                console.log(data)
                updateDiscount({
                    ...data,
                    discountId: discount.id,
                    setErrors,
                })
            }}>
            {({ values, setFieldValue }) => (
                <Form>
                    <div className="flex items-center justify-between border-b border-slate-100 p-6">
                        <div>
                            <h2 className="font-bold text-xl">ایجاد تخفیف</h2>
                            <p className="text-sm text-slate-500 mt-1">
                                تنظیم زمان‌بندی و مشخصات تخفیف
                            </p>
                        </div>
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

                            {values.discount_type === 'product' && (
                                <SelectDropdown
                                    label="انتخاب محصول"
                                    name="product_id"
                                    options={products.data}
                                />
                            )}

                            {values.discount_type === 'category' && (
                                <SelectDropdown
                                    label="انتخاب دسته بندی"
                                    name="category_id"
                                    options={categories.data}
                                />
                            )}
                        </div>

                        <div className="col-span-3 rounded-3xl border border-slate-200 bg-slate-50/60 p-5">
                            <div className="mb-5">
                                <h3 className="font-semibold">
                                    زمان‌بندی تخفیف
                                </h3>

                                <p className="text-sm text-slate-500 mt-1">
                                    تاریخ و ساعت شروع و پایان تخفیف
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
                                            value={values.start_date}
                                            setFieldValue={setFieldValue}
                                            name="start_date"
                                        />
                                        <TimeSelectore name="start" />
                                        <InputError name="starts_at" />
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
                                            minDate={values.start_date}
                                            value={values.end_date}
                                            setFieldValue={setFieldValue}
                                            name="end_date"
                                        />
                                        <TimeSelectore
                                            name="end"
                                            values={values}
                                        />
                                        <InputError name="ends_at" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                                <p className="text-sm text-slate-700">
                                    تخفیف تا
                                    <span className="mx-1 font-semibold text-primary">
                                        {getRelativeDateText(values.end_date)}
                                    </span>
                                    ساعت
                                    <span className="mx-1 font-semibold">
                                        {values.end_hour}:{values.end_minute}
                                    </span>
                                    معتبر است.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 border-t border-slate-100 p-6">
                        <Link
                            href="/admin/discount"
                            className="h-9 px-4 flex items-center rounded-md border border-slate-200 text-sm hover:bg-slate-50">
                            انصراف
                        </Link>

                        <button type="submit" className="btn btn-primary">
                            ذخیره تخفیف
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default UpdateDiscountForm
