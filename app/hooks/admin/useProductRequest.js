import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useProductRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createProduct = async ({ data, setErrors }) => {
        await csrf()
        setErrors(null)

        axios
            .post('/api/admin/product/products', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            })
            .then(res => {
                if (res.status === 201) {
                    toast.success(`محصول با موفقیت ساخته شد`)
                    router.push('/admin/product')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateProduct = async ({ setErrors, productId, data }) => {
        await csrf()
        setErrors(null)
        data.append('_method', 'PUT')

        const updatePromise = axios
            .post(`/api/admin/product/products/${productId}`, data)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/product')
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
            success: 'محصول با موفقیت بروزرسانی شد',
            error: 'خطا در انجام عملیات',
        })
    }

    const deleteProduct = async ({ productId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/product/products/${productId}`)
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
        createProduct,
        updateProduct,
        deleteProduct,
    }
}
