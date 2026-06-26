import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useGalleryRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createGallery = async ({ data, setErrors }) => {
        await csrf()

        axios
            .post('/api/admin/product/gallery', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            })
            .then(res => {
                if (res.status === 201) {
                    toast.success(`گالری محصول با موفقیت ساخته شد`)
                    router.push('/admin/product')
                    router.refresh()
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }
    const updateGallery = async ({ galleryId, ...props }) => {
        await csrf()

        const updatePromise = axios
            .put(`/api/admin/product/gallery/${galleryId}`, props)
            .then(() => {
                router.refresh()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                throw new Error()
            })
        toast.promise(updatePromise, {
            loading: 'در حال بروزرسانی...',
            success: 'با موفقیت بروزرسانی شد',
            error: 'خطا در انجام عملیات',
        })
    }

    const deleteGallery = async ({ id, setState }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/product/gallery/${id}`)
            .then(res => {
                if (res.status === 200) {
                    router.refresh()
                    setState()
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
        createGallery,
        updateGallery,
        deleteGallery,
    }
}
