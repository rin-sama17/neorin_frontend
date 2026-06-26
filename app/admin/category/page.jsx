import CategoryList from './CategoryList'
import Link from 'next/link'
import { getCategories } from '@/admin/services'

const page = async () => {
    const categories = await getCategories()

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت دسته بندی</h1>
                <Link
                    href="/admin/category/create"
                    className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>دسته جدید</span>
                </Link>
            </div>
            <CategoryList categories={categories} />
        </div>
    )
}

export default page
