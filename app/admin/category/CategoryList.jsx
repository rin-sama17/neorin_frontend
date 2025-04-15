'use client'
import React, { useState } from 'react'
import { converterToJalali, useAdminRequest } from '../services'
import Link from 'next/link'
import ConfirmAllert from '../../components/ConfirmAllert'

const CategoryList = ({ categories }) => {
    const { deleteCategory } = useAdminRequest()

    const getParentName = parentId => {
        const parent = categories.data.find(cat => cat.id === parentId)
        return parent ? parent.name : 'دسته اصلی'
    }

    const handleDelete = async categoryId => {
        deleteCategory({ categoryId })
    }
    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-right">شناسه</th>
                        <th className="border px-4 py-2 text-right">نام</th>
                        <th className="border px-4 py-2 text-right">
                            دسته پدر
                        </th>
                        <th className="border px-4 py-2 text-right">توضیحات</th>
                        <th className="border px-4 py-2 text-right">وضعیت</th>
                        <th className="border px-4 py-2 text-right">تاریخ</th>
                        <th className="border px-4 py-2 text-right">عملیات</th>
                    </tr>
                </thead>

                <tbody>
                    {categories.data.map(category => (
                        <tr className="hover:bg-gray-50" key={category.id}>
                            <td className="border px-4 py-2 text-right">
                                {category.id}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {category.name}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {getParentName(category.parent_id)}{' '}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {category.description}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {category.status === 1 ? 'فعال' : 'غیرفعال'}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {converterToJalali(category.created_at)}{' '}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                <Link
                                    href={`/admin/category/edit/${category.id}`}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                                    <i className="fa fa-edit"></i>
                                </Link>
                                <ConfirmAllert
                                    title="حذف دسته بندی"
                                    helper={`ایا از حذف دسته بندی ${category.name} مطمعن هستید`}
                                    onConfirm={() => handleDelete(category.id)}
                                />
                                {/* <button
                                    onClick={() => handleDelete(category.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fa fa-trash"></i>
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList
