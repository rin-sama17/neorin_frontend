import Label from '@/components/Label'
import InputError from '@/components/InputError'
import ImagePreview from '@/common/ImagePreview'

const ImageUploader = ({ value, name, setFieldValue }) => {
    return (
        <>
            {value && (
                <div className="relative group inline-block rounded border-4 border-gray-500">
                    <ImagePreview item={value} />
                    <button
                        type="button"
                        className="absolute top-0 right-0 h-full w-full bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        onClick={() => {
                            setFieldValue(name, '')
                            document.getElementById(name).value = ''
                        }}>
                        <i className="fa fa-trash ml-2 text-red-600"></i>
                        حذف عکس
                    </button>
                </div>
            )}
            <Label htmlFor={name}>عکس</Label>
            <input
                type="file"
                onChange={event => {
                    setFieldValue(name, event.currentTarget.files[0])
                }}
                name={name}
                className="w-full rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-2 border-gray-300   file:ml-2 file:py-2 file:px-4 file:rounded-s-lg file:border-0 file:text-lg file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-700"
                id={name}
            />
            <InputError name={name} />
        </>
    )
}

export default ImageUploader
