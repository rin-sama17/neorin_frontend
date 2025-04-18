import CategoryValueList from './CategoryValueList'
import Link from 'next/link'
import { getCategoryValues } from '@/admin/services'

const page = async () => {
    const categoryValues = await getCategoryValues()

    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت مقدار دسته بندی ها</h1>
                <Link
                    href="/admin/category-value/create"
                    className="btn btn-success">
                    ساخت مقدار جدید
                </Link>

                <CategoryValueList categoryValues={categoryValues} />
            </div>
        </div>
    )
}

export default page
