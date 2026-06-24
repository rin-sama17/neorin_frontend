import CategoryList from './CategoryList'
import Link from 'next/link'
import { getCategories } from '@/admin/services'

const page = async () => {
    const categories = await getCategories()

    return (
        <div className="w-full">
           <div className="flex items-center justify-between mb-4">
    <h1 className="text-lg font-semibold">
        مدیریت دسته بندی
    </h1>

       <Link
    href="/admin/category/create"
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/50 hover:bg-secondary/30 text-sm transition-all duration-500"
>
        <i className="fa-solid fa-plus" />
    <span>دسته جدید</span>
</Link>

            </div>
                <CategoryList categories={categories} />
        </div>
    )
}

export default page
