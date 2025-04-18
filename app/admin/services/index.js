'use server'

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}

export async function getAttribute(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-attribute/${id}`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت نسبت')
    }

    return res.json()
}

export async function getAttributes() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-attribute`,
        {
            ...options,
            cache: 'force-cache',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت نسبت ها')
    }

    return res.json()
}

export async function getCategories() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category`,
        {
            ...options,
            cache: 'force-cache',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت دسته بندی ها')
    }

    return res.json()
}

export async function getCategory(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category/${id}`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت دسته بندی')
    }

    return res.json()
}

export async function getCategoryValues() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-value`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت مقدار ها')
    }

    return res.json()
}

export async function getCategoryValue(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-value/${id}`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت مقدار')
    }

    return res.json()
}

export async function getPages() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/content/page`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت  صفحه ها')
    }

    return res.json()
}
export async function getPage(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/content/page/${id}`,
        {
            ...options,
            cache: 'no-store',
        },
    )
    if (!res.ok) {
        throw new Error('خطا در دریافت  صفحه')
    }

    return res.json()
}

export async function getProducts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/products`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت محصولات')
    }

    return res.json()
}

export async function getProduct(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/products/${id}`,
        {
            ...options,
            cache: 'no-store',
        },
    )
    if (!res.ok) {
        throw new Error('خطا در دریافت محصول')
    }

    return res.json()
}

export async function getCities() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities`,
        {
            ...options,
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت شهر ها')
    }

    return res.json()
}
