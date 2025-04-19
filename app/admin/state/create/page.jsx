import { getStates } from '@/admin/services'
import CreateStateForm from './CreateStateForm'

const page = async () => {
    const states = await getStates()
    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت محل جدید</h2>
            <CreateStateForm states={states} />
        </div>
    )
}

export default page
