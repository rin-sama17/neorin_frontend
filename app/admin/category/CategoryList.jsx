import Link from 'next/link'
import Table from '@/common/other/Table'
import { converterToJalali } from '@/utility'
import DeleteCategory from './DeleteCategory'

const CategoryList = ({ categories }) => {

    const getParentName = parentId => {
        const parent = categories.data.find(cat => cat.id === parentId)
        return parent ? parent.name : 'دسته اصلی'
    }

 
    return (
      <Table
    headers={[
        '#',
        'نام',
        'دسته پدر',
        'وضعیت',
        'تاریخ',
        'عملیات',
    ]}
>
    {categories.data.map(category => (
        <tr
            key={category.id}
            className="border-b hover:bg-slate-50 transition-colors"
        >
            <td className="px-3 py-3">{category.id}</td>

            <td className="px-3 py-3 font-medium">
                {category.name}
            </td>

            <td className="px-3 py-3 text-gray-500">
                {getParentName(category.parent_id)}
            </td>

            <td className="px-3 py-3">
                <span
                    className={`px-2 py-1 rounded-full text-xs ${
                        category.status === 1
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {category.status === 1 ? 'فعال' : 'غیرفعال'}
                </span>
            </td>

            <td className="px-3 py-3 text-gray-500">
                {converterToJalali(category.created_at)}
            </td>

            <td className="px-3 py-3">
                <div className="flex gap-2">
                  <Link
        href={`/admin/category/edit/${category.id}`}
        className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
    >
        <i className="fa fa-edit" />
    </Link>

                    <DeleteCategory
                        categoryName={category.name}
                        categoryId={category.id}
                    />
                </div>
            </td>
        </tr>
    ))}
</Table>
    )
}

export default CategoryList
