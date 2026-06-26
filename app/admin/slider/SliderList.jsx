'use client'
import Link from 'next/link'
import ConfirmAllert from '@/common/other/ConfirmAllert'
import Table from '@/common/other/Table'
import { useSliderRequest } from '@/hooks/admin/useSliderRequest'
import { converterToJalali } from '@/utility'

const SliderList = ({ sliders }) => {
    const { deleteSlider } = useSliderRequest()

    const getStatus = status => {
        if (status === 1)
            return { text: 'فعال', color: 'bg-green-50 text-green-700' }
        return { text: 'غیرفعال', color: 'bg-red-50 text-red-700' }
    }

    return (
        <Table
            headers={[
                '#',
                'عنوان',
                'توضیحات',
                'لینک',
                'نوع',
                'وضعیت',
                'تاریخ',
                '',
            ]}>
            {sliders.data.map(slider => (
                <tr
                    key={slider.id}
                    className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-sm">{slider.id}</td>

                    <td className="px-3 py-3">
                        <p className="font-medium text-sm">
                            {slider.title === 'no value' ? '-' : slider.title}
                        </p>
                    </td>

                    <td className="px-3 py-3 max-w-52">
                        <p className="text-sm text-slate-500 line-clamp-2">
                            {slider.description === 'no value'
                                ? '-'
                                : slider.description}
                        </p>
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600 max-w-40 truncate">
                        {slider.link || '-'}
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {slider.type === 1 ? 'کپشن دار' : 'عکس'}
                    </td>

                    <td className="px-3 py-3">
                        <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs ${getStatus(slider.status).color}`}>
                            {getStatus(slider.status).text}
                        </span>
                    </td>

                    <td className="px-3 py-3 text-slate-500">
                        {converterToJalali(slider.created_at)}
                    </td>

                    <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                            <Link
                                href={`/admin/slider/edit/${slider.id}`}
                                className="icon-btn hover:text-blue-600 hover:bg-blue-50">
                                <i className="fa-solid fa-pen" />
                            </Link>
                            <ConfirmAllert
                                title="حذف اسلایدر"
                                helper={`ایا از حذف اسلایدر ${slider.title === 'no value' ? '' : slider.title} مطمعن هستید`}
                                onConfirm={() =>
                                    deleteSlider({ sliderId: slider.id })
                                }
                            />
                        </div>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default SliderList
