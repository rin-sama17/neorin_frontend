import Link from 'next/link'

const sidebarItems = [
    {
        title: 'مدیریت محصول',
        href: '/panel/product',
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
