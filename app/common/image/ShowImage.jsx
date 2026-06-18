import Image from 'next/image'

const ShowImage = ({ alt, src, ...props }) => {
    const fullSrc = src.startsWith('http')
        ? src
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/${src}`

    return <Image alt={alt} src={fullSrc} priority {...props} />
}

export default ShowImage
