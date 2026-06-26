import Link from 'next/link'
import { getFabrics } from '../services'
import FabricList from './FabricList'

const page = async () => {
    const fabrics = await getFabrics()
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت پارچه ها</h1>
                <Link href="/admin/fabric/create" className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>پارچه جدید</span>
                </Link>
            </div>

            <FabricList fabrics={fabrics} />
        </div>
    )
}

export default page
