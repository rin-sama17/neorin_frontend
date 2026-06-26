import SliderList from './SliderList'
import Link from 'next/link'
import { getSliders } from '@/admin/services'

const page = async () => {
    const sliders = await getSliders()
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت اسلایدر ها</h1>
                <Link href="/admin/slider/create" className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>اسلایدر جدید</span>
                </Link>
            </div>

            <SliderList sliders={sliders} />
        </div>
    )
}

export default page
