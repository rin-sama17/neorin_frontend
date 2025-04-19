import StateList from './StateList'
import Link from 'next/link'
import { getStates } from '@/admin/services'

const page = async () => {
    const states = await getStates()
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت محل ها</h1>
                <Link href="/admin/state/create" className="btn btn-success">
                    ساخت محل جدید
                </Link>

                <StateList states={states} />
            </div>
        </div>
    )
}

export default page
