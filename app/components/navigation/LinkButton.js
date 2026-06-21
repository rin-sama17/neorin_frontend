import Link from 'next/link'

const LinkButton = ({ href, title, className }) => {
    return (
        <Link
            href={href}
            className={`${className} relative font-medium text-text-primary group mb-2 mx-2 text-sm transition-all duration-300`}>
            {title}
            <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 rounded-full bg-secondary group-hover:w-full transform -translate-x-1/2  transition-all duration-300"></span>
        </Link>
    )
}

export default LinkButton
