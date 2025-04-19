import UpdateSliderForm from './UpdateSliderForm'
import { getSlider } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params
    const slider = await getSlider(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش اسلایدر</h2>
            <UpdateSliderForm slider={slider.data} />
        </div>
    )
}

export default page
