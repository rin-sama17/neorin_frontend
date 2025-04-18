import CreateCategoryValueForm from './CreateCategoryValueForm'
import { getAttributes } from '@/admin/services'

const page = async () => {
    const attributes = await getAttributes()
    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت مقدار جدید</h2>
            <CreateCategoryValueForm attributes={attributes} />
        </div>
    )
}

export default page
