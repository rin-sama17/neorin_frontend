import AttributeList from './AttributeList'
import Link from 'next/link'
import { getAttributes } from '@/admin/services'

const page = async () => {
    const attributes = await getAttributes()

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت نسبت ها</h1>
                <Link
                    href="/admin/category-attribute/create"
                    className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>نسبت جدید</span>
                </Link>
            </div>

            <AttributeList attributes={attributes} />
        </div>
    )
}

export default page
