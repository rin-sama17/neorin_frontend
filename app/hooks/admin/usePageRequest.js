import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const usePageRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createPage = async ({ data, setErrors }) => {
        await csrf()
        setErrors(null)

        axios
            .post('/api/admin/content/page', data)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`صفحه با موفقیت ساخته شد`)
                    router.push('/admin/pages')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updatePage = async ({ setErrors, pageId, data }) => {
        await csrf()
        setErrors(null)

        const updatePromise = axios
            .put(`/api/admin/content/page/${pageId}`, data)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/pages')
                    router.refresh()
                    return
                }
                throw new Error()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
                throw new Error()
            })
        toast.promise(updatePromise, {
            loading: 'در حال بروزرسانی...',
            success: 'صفحه با موفقیت بروزرسانی شد',
            error: 'خطا در انجام عملیات',
        })
    }

    const deletePage = async ({ pageId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/content/page/${pageId}`)
            .then(res => {
                if (res.status === 200) {
                    router.refresh()
                    return res.data.message
                }

                throw new Error('مشکلی پیش امده')
            })
            .catch(error => {
                console.log(error)
                const message =
                    error.response?.data?.message || 'خطا در انجام عملیات'
                throw new Error(message)
            })

        toast.promise(deletePromise, {
            loading: 'در حال حذف...',
            success: message => message,
            error: err => err.message,
        })
    }

    return {
        createPage,
        updatePage,
        deletePage,
    }
}
