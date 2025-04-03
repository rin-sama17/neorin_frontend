'use client'

import { useAuth } from '@/hooks/auth'
import LinkButton from '../LinkButton'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            {user ? (
                <LinkButton href="/dashboard" title="داشبورد" />
            ) : (
                <div className="flex gap-2">
                    <LinkButton href="/login" title="ورود" />

                    <LinkButton href="/register" title="ثبت نام" />
                </div>
            )}
        </>
    )
}

export default LoginLinks
