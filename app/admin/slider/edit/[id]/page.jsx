import UpdateSliderForm from './UpdateSliderForm'
import { getSlider } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params
    const slider = await getSlider(id)

    return (
        <div className="w-full ">
            <UpdateSliderForm slider={slider.data} />
        </div>
    )
}

export default page
