import SliderList from './SliderList'
import Link from 'next/link'
import { getSliders } from '@/admin/services'

const page = async () => {
    const sliders = await getSliders()
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت اسلایدر ها</h1>
                <Link href="/admin/slider/create" className="btn btn-success">
                    ساخت اسلایدر جدید
                </Link>

                <SliderList sliders={sliders} />
            </div>
        </div>
    )
}

export default page
