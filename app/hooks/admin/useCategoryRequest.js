import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useCategoryRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createCategory = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors(null)
        axios
            .post('/api/admin/product/category', props)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`دسته بندی با موفقیت ساخته شد`)
                    router.push('/admin/category')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateCategory = async ({
        setErrors,

        categoryId,
        ...props
    }) => {
        await csrf()
        setErrors(null)

        const updatePromise = axios
            .put(`/api/admin/product/category/${categoryId}`, props)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/category')
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
            success: 'دسته بندی با موفقیت بروزرسانی شد',
            error: 'خطا در انجام عملیات',
        })
    }

    const deleteCategory = async ({ categoryId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/product/category/${categoryId}`)
            .then(res => {
                if (res.status === 200) {
                    router.refresh()
                    return res.data.message
                }
                throw new Error('مشکلی پیش امده')
            })
            .catch(error => {
                const message =
                    error.response?.data?.message || 'An error occurred'
                throw new Error(message)
            })

        toast.promise(deletePromise, {
            loading: 'در حال حذف...',
            success: message => message,
            error: err => err.message,
        })
    }

    return {
        createCategory,
        updateCategory,
        deleteCategory,
    }
}
