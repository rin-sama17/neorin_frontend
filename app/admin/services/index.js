import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export { default as converterToJalali } from './converterToJalali'
export { default as ImageUploader } from './ImageUploader'

export const useAdminRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createProductGallery = async ({ data, setErrors }) => {
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

    const deleteProductGallery = async ({ id, setState }) => {
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
    const convertToForm = values => {
        const formData = new FormData()

        Object.keys(values).forEach(key => {
            if (key !== 'image' && key !== 'images' && values[key] !== null) {
                formData.append(key, values[key])
            }
        })

        if (values.image) {
            formData.append('image', values.image)
        }
        if (values.images) {
            for (let i = 0; i < values.images.length; i++) {
                if (values.images[i] instanceof File)
                    formData.append(`images[${i}]`, values.images[i])
            }
        }

        return formData
    }

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
        axios
            .put(`/api/admin/product/category/${categoryId}`, props)
            .then(res => {
                if (res.status === 200) {
                    router.push('/admin/category')
                    router.refresh()
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
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
        createProduct,
        updateProduct,
        deleteProduct,
        convertToForm,
        createProductGallery,
        deleteProductGallery,
        createPage,
        updatePage,
        deletePage,
    }
}
