import Link from 'next/link'

const EditLink = ({ href, id }) => {
    return (
        <Link
            href={`${href}/${id}`}
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition">
            <i className="fa fa-edit" />
        </Link>
    )
}

export default EditLink
