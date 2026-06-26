import Link from 'next/link'

const sidebarItems = [
    {
        title: 'مدیریت محصول',
        href: '/admin/product',
        icon: 'fa-box',
    },
    {
        title: 'مدیریت دسته بندی',
        href: '/admin/category',
        icon: 'fa-folder-tree',
    },
    {
        title: 'مدیریت تخفیف',
        href: '/admin/discount',
        icon: 'fa-box',
    },
    {
        title: 'مدیریت صفحات',
        href: '/admin/pages',
        icon: 'fa-file-lines',
    },
    {
        title: 'مدیریت اسلایدر ها',
        href: '/admin/slider',
        icon: 'fa-images',
    },
    {
        title: 'مدیریت نسبت دسته بندی',
        href: '/admin/category-attribute',
        icon: 'fa-tags',
    },
    {
        title: 'مدیریت مقدار دسته بندی',
        href: '/admin/category-value',
        icon: 'fa-tag',
    },
    {
        title: 'مدیریت پارچه ها',
        href: '/admin/fabric',
        icon: 'fa-file-lines',
    },
    {
        title: 'مدیریت کاربران',
        href: '/admin/users',
        icon: 'fa-users',
    },
    {
        title: 'مدیریت ادمین',
        href: '/admin/admin',
        icon: 'fa-user-shield',
    },
    {
        title: 'تنظیمات سایت',
        href: '/admin/setting',
        icon: 'fa-gear',
    },
]
const Sidebar = () => {
    return (
        <div className="sticky top-0 py-2">
            <nav className="flex flex-col gap-0.5">
                {sidebarItems.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className="flex items-center px-2   text-white/70 hover:text-white hover:bg-white/10 transition">
                        <i className={`fa-solid ${item.icon} w-10 h-10`} />
                        <p className="px-3 py-2 text-sm ">{item.title}</p>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Sidebar
