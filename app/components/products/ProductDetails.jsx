import React from 'react'
import GallerySlider from './GallerySlider'

const ProductDetails = ({ product }) => {
    const {
        title,
        description,
        product_type = '',
        product_status,
        allCategories,
        city,
        view,
        contact = '',
        is_special,
        is_ladder,
        image,
        gallery,
        category_attributes,
        category_values,
        category_attribute_with_values,
        slug,
        price,
        tags,
        lat,
        lng,
        willing_to_trade,
        created_at,
    } = product
    return (
        <div>
            <div className="flex mb-8 relative">
                {allCategories.map(cat => (
                    <div
                        key={cat.id}
                        className="group flex items-center transition-all duration-300 relative">
                        <h5 className="text-lg font-bold text-gray-500 hover:text-gray-700 ml-2">
                            {cat.name}
                        </h5>
                        <span
                            className={`chevron group-hover:rotate-180 fa fa-chevron-left ml-4 transition-transform duration-300 ease-in-out text-gray-500 group-hover:text-gray-700`}
                        />
                    </div>
                ))}
                <h5 className="text-lg font-bold text-gray-400">{title}</h5>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-medium">{title}</h1>
                    <div className="flex justify-between">
                        <h3 className="text-lg text-gray-500">
                            پارچه {city.name}
                        </h3>
                        <h3 className="text-lg text-gray-500">
                            تعداد بازدید: {view}
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-lg text-gray-500">
                            {product_type}
                        </h3>
                        <div className="flex space-x-reverse space-x-3">
                            {is_special == 1 && (
                                <h3 className="text-lg font-bold text-red-500">
                                    ویژه
                                </h3>
                            )}
                            {is_ladder == 1 && (
                                <h3 className="text-lg font-bold text-red-500">
                                    نردبان{' '}
                                </h3>
                            )}
                        </div>
                    </div>
                    <h3 className="text-xl text-gray-500">{product_status}</h3>
                    {price && (
                        <div className="flex justify-between border-t-4 pt-3  text-xl ">
                            <h3 className=" text-gray-500 ">قیمت </h3>
                            <h3>{price} تومان</h3>
                        </div>
                    )}
                    <div className="flex justify-between border-t-4 pt-3  text-xl ">
                        <h3 className=" text-gray-500 ">رنگ </h3>
                        <div className="flex ">
                            <div className="transition-all delay-200 size-7 ml-2 cursor-pointer hover:ring-2 ring-slate-800  rounded-full bg-slate-400"></div>
                            <div className="size-7 rounded-full bg-red-400"></div>
                        </div>
                    </div>
                    {category_attribute_with_values.length > 0 &&
                        category_attribute_with_values.map(item => (
                            <div
                                className="flex justify-between border-t-4 pt-3 text-xl "
                                key={item.id}>
                                <h3 className="text-gray-500">{item.name} </h3>
                                <h3>
                                    {item.value} {item.unit}
                                </h3>
                            </div>
                        ))}
                    {contact && (
                        <div className="flex justify-between border-t-4 pt-3 text-xl ">
                            <h3 className=" text-gray-500"> اظلاعات تماس </h3>
                            <h3>{contact}</h3>
                        </div>
                    )}
                    <h5 className="text-xl ">توضیحات</h5>
                    <h5 className="text-xl whitespace-break-spaces">
                        {description}
                    </h5>
                </div>
                <GallerySlider gallery={gallery} image={image} slug={slug} />
            </div>
        </div>
    )
}

export default ProductDetails
