import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useSliderRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createSlider = async ({ data, setErrors }) => {
        await csrf()
        setErrors(null)

        axios
            .post('/api/admin/content/slider', data)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`اسلایدر با موفقیت ساخته شد`)
                    router.push('/admin/slider')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const updateSlider = async ({ setErrors, sliderId, data }) => {
        await csrf()
        setErrors(null)
        data.append('_method', 'PUT')
        const updatePromise = axios
            .post(`/api/admin/content/slider/${sliderId}`, data)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/slider')
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
            success: 'اسلایدر با موفقیت بروزرسانی شد',
            error: 'خطا در انجام عملیات',
        })
    }

    const deleteSlider = async ({ sliderId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/content/slider/${sliderId}`)
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
        createSlider,
        updateSlider,
        deleteSlider,
    }
}
