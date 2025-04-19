import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useCategoryValueRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createCategoryValue = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors(null)
        axios
            .post('/api/admin/product/category-value', props)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`مقدار با موفقیت ساخته شد`)
                    router.push('/admin/category-value')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateCategoryValue = async ({
        setErrors,
        categoryValueId,
        ...props
    }) => {
        await csrf()
        setErrors(null)
        const updatePromise = axios
            .put(`/api/admin/product/category-value/${categoryValueId}`, props)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/category-value')
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
            success: 'مفدار با موفقیت بروزرسانی شد',
            error: 'خطا در انجام عملیات',
        })
    }

    const deleteCategoryValue = async ({ categoryValueId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/product/category-value/${categoryValueId}`)
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
        createCategoryValue,
        updateCategoryValue,
        deleteCategoryValue,
    }
}
