import PageList from './PageList'
import Link from 'next/link'
import { getPages } from '@/admin/services'

const page = async () => {
    const pages = await getPages()
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت صفحه ها</h1>
                <Link href="/admin/pages/create" className="btn btn-success">
                    ساخت صفحه جدید
                </Link>

                <PageList pages={pages} />
            </div>
        </div>
    )
}

export default page
