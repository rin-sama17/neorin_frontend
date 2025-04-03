const ProductGrid = () => (
    <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-medium mb-4">محصولات ویژه</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(product => (
                <div
                    key={product}
                    className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={`/product${product}.jpg`}
                        alt={`محصول ${product}`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">
                            نام محصول {product}
                        </h3>
                        <p className="text-gray-600 mt-2">
                            توضیحات کوتاه محصول {product} و ویژگی‌های آن
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-blue-500 font-bold">
                                1,299,000 تومان
                            </span>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                خرید
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default ProductGrid
