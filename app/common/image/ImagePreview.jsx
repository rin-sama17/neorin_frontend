import ShowImage from './ShowImage'

const ImagePreview = ({ item, isLink }) => {
    return (
        <div>
            {item instanceof File ? (
                <img
                    src={URL.createObjectURL(item)}
                    alt="preview"
                    className="border-2 border-gray-300 mt-2 h-32 w-52 object-cover rounded"
                />
            ) : (
                <ShowImage
                    src={
                        isLink
                            ? item
                            : item.image
                              ? item.image.currentImage
                              : item.currentImage
                    }
                    width={208}
                    height={208}
                    alt="uploaded image"
                    className="border-2 border-gray-300 mt-2 rounded h-32 w-52 "
                />
            )}
        </div>
    )
}

export default ImagePreview
