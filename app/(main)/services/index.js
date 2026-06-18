'use server'

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
    cache: 'no-store',
}

export async function getProducts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت محصول ها')
    }

    return res.json()
}
export async function getProduct(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت محصول')
    }

    return res.json()
}

export async function getPages() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pages`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت صفحات')
    }

    return res.json()
}

export async function getStates() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/states`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت محل ها')
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
export async function getCity(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities/${id}`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت شهر')
    }

    return res.json()
}

export async function getSliders() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sliders`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت اسلایدر ها')
    }

    return res.json()
}

export async function getCategories() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`,
        options,
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت دسته بندی ها')
    }

    return res.json()
}
