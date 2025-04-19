'use client'
import Link from 'next/link'
import ConfirmAllert from '@/components/ConfirmAllert'
import Table from '@/common/Table'
import { useSliderRequest } from '@/hooks/admin/useSliderRequest'
import { converterToJalali } from '@/utility'

const SliderList = ({ sliders }) => {
    const { deleteSlider } = useSliderRequest()
    const handleDelete = async sliderId => {
        deleteSlider({ sliderId })
    }
    return (
        <Table
            headers={[
                'شناسه',
                'عنوان',
                'توضیحات',
                'لینک',
                'نوع',
                'وضعیت',
                'تاریخ',
                'عملیات',
            ]}>
            {sliders.data.length > 0 &&
                sliders.data.map(slider => (
                    <tr className="hover:bg-gray-50" key={slider.id}>
                        <td className="border px-4 py-2 text-right">
                            {slider.id}
                        </td>
                        <td className="border px-4 py-2 text-right">
                            {slider.title === 'no value' ? '-' : slider.title}
                        </td>

                        <td className="border px-4 py-2 text-right max-w-52">
                            <h6 className="line-clamp-2">
                                {' '}
                                {slider.description === 'no value'
                                    ? '-'
                                    : slider.description}
                            </h6>
                        </td>
                        <td className="border px-4 py-2 text-right max-w-52">
                            {slider.link}
                        </td>
                        <td className="border px-4 py-2 text-right">
                            {slider.type === 1 ? 'کپشن دار' : 'عکس'}
                        </td>
                        <td className="border px-4 py-2 text-right">
                            {slider.status === 1 ? 'فعال' : 'غیرفعال'}
                        </td>
                        <td className="border px-4 py-2 text-right">
                            {converterToJalali(slider.created_at)}{' '}
                        </td>
                        <td className="border px-4 py-2 text-right">
                            <Link
                                href={`/admin/slider/edit/${slider.id}`}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                                <i className="fa fa-edit"></i>
                            </Link>
                            <ConfirmAllert
                                title="حذف اسلایدر"
                                helper={`ایا از حذف اسلایدر ${slider.title === 'no value' ? '' : slider.title} مطمعن هستید`}
                                onConfirm={() => handleDelete(slider.id)}
                            />
                        </td>
                    </tr>
                ))}
        </Table>
    )
}

export default SliderList
