'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { useAuth } from '@/hooks/auth'

const OtpVerify = ({ mobile, token, setMessage, setError, setToken }) => {
    const [otpField, setOtpField] = useState(['', '', '', ''])
    const { register, otp } = useAuth()
    const inputRefs = useRef([])
    const [isResendDisabled, setIsResendDisabled] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0)
    const [errors, setErrors] = useState([])

    const handleResend = () => {
        otp({
            mobile,
            setErrors,
            setMessage,
            setToken,
        })
        setError('')
        setIsResendDisabled(true)
        setTimeLeft(120)
    }

    useEffect(() => {
        inputRefs.current[0]?.focus()
    }, [])

    useEffect(() => {
        if (timeLeft === 0) return

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(intervalId)
                    setIsResendDisabled(false)
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timeLeft])

    const handleChange = (index, value) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otpField]
            newOtp[index] = value
            setOtpField(newOtp)
        }
        if (value && index < otpField.length - 1) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otpField[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleOTPVerification = () => {
        const otpCode = otpField.join('')
        register({
            setError,
            token,
            mobile,
            otp: otpCode,
        })
    }

    // const isOtpComplete = otp.every(digit => digit !== '')

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">تایید شماره موبایل</h1>
            <p className="text-sm text-gray-600 mb-6">
                ما پیامکی حاوی کد فعالسازی به شماره {mobile} ارسال کرده ایم
            </p>

            <div className="flex gap-4 mb-4" dir="ltr">
                {otpField.map((digit, index) => (
                    <input
                        type="text"
                        key={index}
                        maxLength={1}
                        value={digit}
                        onChange={e => handleChange(index, e.target.value)}
                        onKeyDown={e => handleKeyDown(index, e)}
                        ref={el => (inputRefs.current[index] = el)}
                        className="w-16 h-16 text-center text-lg font-bold border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    />
                ))}
            </div>
            {errors?.length > 0 && (
                <>
                    {errors.map((message, index) => (
                        <p
                            className={`${className} text-sm text-red-600`}
                            key={index}>
                            {message}
                        </p>
                    ))}
                </>
            )}

            <button
                onClick={() => {
                    setToken('')
                    setMessage('')
                }}
                className=" text-sm text-gray-600 hover:text-gray-900">
                ویرایش شماره
            </button>
            <div className="text-sm text-slate-500 mt-2">
                کد تایید را دریافت نکرده اید؟
                <button
                    className={`font-medium mr-2 text-indigo-500 hover:text-indigo-600 ${isResendDisabled ? 'cursor-not-allowed' : ''}`}
                    onClick={() => !isResendDisabled && handleResend()}>
                    {isResendDisabled
                        ? `ارسال مجدد در ${timeLeft} ثانیه`
                        : 'ارسال مجدد'}
                </button>
            </div>

            <button
                onClick={handleOTPVerification}
                className="w-full my-2 btn btn-primary">
                تایید شماره موبایل
            </button>
        </div>
    )
}

export default OtpVerify
