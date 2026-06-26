import CreateCategoryValueForm from './CreateCategoryValueForm'
import { getAttributes } from '@/admin/services'

const page = async () => {
    const attributes = await getAttributes()
    return (
        <div className="w-full ">
            <CreateCategoryValueForm attributes={attributes} />
        </div>
    )
}

export default page
