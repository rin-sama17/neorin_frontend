import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
export const useDiscountRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createDiscount = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors(null)
        axios
            .post('/api/admin/product/discounts', props)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`دسته بندی با موفقیت ساخته شد`)
                    router.push('/admin/discount')
                    router.refresh()
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateDiscount = async ({
        setErrors,

        discountId,
        ...props
    }) => {
        await csrf()
        setErrors(null)

        const updatePromise = axios
            .put(`/api/admin/product/discounts/${discountId}`, props)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/discount')
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

    const deleteDiscount = async ({ id }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/product/discounts/${id}`)
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
        createDiscount,
        updateDiscount,
        deleteDiscount,
    }
}
