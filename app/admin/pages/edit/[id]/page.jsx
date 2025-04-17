import React from 'react'
import UpdatePageForm from './UpdatePageForm'
async function getPage(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/content/page/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )
    if (!res.ok) {
        throw new Error('خطا در دریافت  صفحه')
    }

    return res.json()
}

const page = async ({ params }) => {
    let { id } = await params
    const page = await getPage(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش صفحه</h2>
            <UpdatePageForm page={page.data} />
        </div>
    )
}

export default page
