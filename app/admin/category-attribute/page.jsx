import AttributeList from './AttributeList'
import Link from 'next/link'
import { getAttributes } from '@/admin/services'

const page = async () => {
    const attributes = await getAttributes()

    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت نسبت ها</h1>
                <Link
                    href="/admin/category-attribute/create"
                    className="btn btn-success">
                    ساخت نسبت جدید
                </Link>

                <AttributeList attributes={attributes} />
            </div>
        </div>
    )
}

export default page
