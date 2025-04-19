import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useUserRequest = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const createUser = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors(null)
        axios
            .post('/api/admin/users/user', props)
            .then(res => {
                if (res.status === 201) {
                    toast.success(`کاربر با موفقیت ساخته شد`)
                    router.push('/admin/users')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const deleteUser = async ({ userId }) => {
        await csrf()
        const deletePromise = axios
            .delete(`/api/admin/users/user/${userId}`)
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
        createUser,
        deleteUser,
    }
}
