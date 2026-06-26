import CategoryValueList from './CategoryValueList'
import Link from 'next/link'
import { getCategoryValues } from '@/admin/services'

const page = async () => {
    const categoryValues = await getCategoryValues()

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت مقدار نسبت ها</h1>
                <Link
                    href="/admin/category-value/create"
                    className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>مقدار جدید</span>
                </Link>
            </div>

            <CategoryValueList categoryValues={categoryValues} />
        </div>
    )
}

export default page
