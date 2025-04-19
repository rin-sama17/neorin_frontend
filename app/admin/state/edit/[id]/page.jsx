import UpdateStateForm from './UpdateStateForm'
import { getState, getStates } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params
    const state = await getState(id)
    const states = await getStates()

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش صفحه</h2>
            <UpdateStateForm state={state.data} states={states} />
        </div>
    )
}

export default page
