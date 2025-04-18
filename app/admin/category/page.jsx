import CategoryList from './CategoryList'
import Link from 'next/link'
import { getCategories } from '@/admin/services'

const page = async () => {
    const categories = await getCategories()

    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت دسته بندی ها</h1>
                <Link href="/admin/category/create" className="btn btn-success">
                    ساخت دسته بندی جدید
                </Link>

                <CategoryList categories={categories} />
            </div>
        </div>
    )
}

export default page
