import Link from 'next/link'
import React from 'react'

const sidebarItems = [
    {
        title: 'مدیریت دسته بندی',
        href: '/admin/category',
    },
    {
        title: 'مدیریت محصول',
        href: '/admin/product',
    },

    {
        title: 'مدیریت صفحات',
        href: '/admin/pages',
    },
    {
        title: 'مدیریت صفت دسته بندی',
        href: '/admin/attribute',
    },
    {
        title: 'مدیریت مقدار دسته بندی',
        href: '/admin/atteibute-value',
    },
    {
        title: 'مدیریت محل',
        href: '/admin/state',
    },
    {
        title: 'مدیریت کاربران',
        href: '/admin/user',
    },
    {
        title: 'مدیریت ادمین',
        href: '/admin/admin',
    },
    {
        title: 'تنظیمات سایت',
        href: '/admin/setting',
    },
]
const Sidebar = () => {
    return (
        <div className="sticky top-0 flex flex-col items-start p-4 ">
            {sidebarItems.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className="text-white text-xl hover:bg-white/5 transition-all w-full text-start p-1 py-3">
                    {item.title}
                </Link>
            ))}
        </div>
    )
}

export default Sidebar
