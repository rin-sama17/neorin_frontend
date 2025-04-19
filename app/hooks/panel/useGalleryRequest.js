import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useGalleryRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createGallery = async ({ data, productId, setErrors }) => {
        await csrf()

        axios
            .post(`/api/panel/gallery/store/${productId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            })
            .then(res => {
                if (res.status === 201) {
                    toast.success(`گالری محصول با موفقیت ساخته شد`)
                    router.push('/panel/product')
                    router.refresh()
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const deleteGallery = async ({ id, setState }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/panel/gallery/${id}`)
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
        deleteGallery,
    }
}
