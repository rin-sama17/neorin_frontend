'use server'

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
    cache: 'no-store',
}

export async function getCategories() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-categories`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت دسته بندی ها')
    }

    return res.json()
}

export async function getProducts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/panel/product/products`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت محصولات')
    }

    return res.json()
}

export async function getProduct(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/panel/product/products/${id}`,
        options,
    )
    if (!res.ok) {
        throw new Error('خطا در دریافت محصول')
    }

    return res.json()
}

export async function getCities() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت شهر ها')
    }

    return res.json()
}
