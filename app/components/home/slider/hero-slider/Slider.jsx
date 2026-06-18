import ShowImage from '@/common/image/ShowImage'
import Link from 'next/link'

const Slider = ({ slider }) => (
    <Link href={slider.link} target="_blank">
        {slider.type == 0 ? (
            <ShowImage
                src={slider.image}
                width={800}
                height={400}
                alt="slider image"
                className="rounded h-96 w-full "
            />
        ) : (
            <div className="flex justify-between relative w-full h-96 overflow-hidden rounded">
                {/* <ShowImage
                    src={slider.image}
                    alt="Slider background"
                    fill
                    className="object-cover w-full h-full"
                    priority
                /> */}

                <div className="text-right max-w-md p-4">
                    <h5 className="text-2xl font-semibold text-gray-800">
                        {slider.title}
                    </h5>
                    <p className="text-lg text-gray-600 mt-2">
                        {slider.description}
                    </p>
                </div>
                <div className="h-full w-2/5">
                    <ShowImage
                        src={slider.image}
                        width={230}
                        height={270}
                        alt="Slider thumbnail"
                        className="rounded-lg object-cover h-full w-full"
                    />
                </div>
            </div>
        )}
    </Link>
)

export default Slider
