import Link from 'next/link'

const LinkButton = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="relative font-medium text-gray-700 group mb-2 mx-2 text-sm transition-all duration-300">
            {title}
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 rounded-full bg-indigo-600 group-hover:w-full transform -translate-x-1/2  transition-all duration-300"></span>
        </Link>
    )
}

export default LinkButton
