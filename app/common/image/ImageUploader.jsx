import Label from '@/common/inputs/Label'
import InputError from '@/common/inputs/InputError'
import ImagePreview from '@/common/image/ImagePreview'
import React from 'react'

const ImageUploader = ({ value, name, setFieldValue, isLink }) => {
    console.log(value)
    return (
        <>
            <div
                className="
            relative
            h-56
            rounded-xl
            group
            overflow-hidden
            border
            border-slate-200
        ">
                {value ? (
                    <>
                        <div
                            className="
                        absolute
                        inset-0
                        bg-center
                        bg-cover
                    "
                            style={{
                                backgroundImage: `url(${
                                    value instanceof File
                                        ? URL.createObjectURL(value)
                                        : isLink
                                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${value}`
                                          : null
                                })`,
                            }}
                        />

                        <button
                            type="button"
                            className="absolute z-50 inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            onClick={() => {
                                setFieldValue(name, '')
                                document.getElementById(name).value = ''
                            }}>
                            <i className="fa fa-trash ml-2 text-red-600"></i>
                            حذف عکس
                        </button>
                    </>
                ) : (
                    <label
                        htmlFor={name}
                        className="
                    h-full
                    w-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    bg-slate-50
                    hover:bg-slate-100
                    transition
                ">
                        <i className="fa-solid fa-image text-3xl text-slate-400 mb-3" />

                        <span className="text-sm text-slate-600">
                            انتخاب تصویر
                        </span>

                        <span className="text-xs text-slate-400 mt-1">
                            JPG, PNG, WEBP
                        </span>
                    </label>
                )}

                <input
                    hidden
                    id={name}
                    name={name}
                    type="file"
                    onChange={event =>
                        setFieldValue(name, event.currentTarget.files?.[0])
                    }
                />
            </div>

            <InputError name={name} />
        </>
    )
}

export default React.memo(ImageUploader)
