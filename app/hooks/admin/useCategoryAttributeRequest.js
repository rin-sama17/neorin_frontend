import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useCategoryAttributeRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createAttribute = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors(null)
        axios
            .post('/api/admin/product/category-attribute', props)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`نسبت با موفقیت ساخته شد`)
                    router.push('/admin/category-attribute')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateAttribute = async ({ setErrors, attributeId, ...props }) => {
        await csrf()
        setErrors(null)
        axios
            .put(`/api/admin/product/category-attribute/${attributeId}`, props)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/category-attribute')
                    router.refresh()
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const deleteAttribute = async ({ attributeId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/product/category-attribute/${attributeId}`)
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
        createAttribute,
        updateAttribute,
        deleteAttribute,
    }
}
