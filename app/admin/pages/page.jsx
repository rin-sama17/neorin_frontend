import PageList from './PageList'
import Link from 'next/link'
import { getPages } from '@/admin/services'

const page = async () => {
    const pages = await getPages()
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت صفحه ها</h1>
                <Link href="/admin/pages/create" className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>صفحه جدید</span>
                </Link>
            </div>

            <PageList pages={pages} />
        </div>
    )
}

export default page
