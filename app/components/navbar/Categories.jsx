import React from 'react'

const Categories = () => {
    return (
        <div className="relative ">
            <li className="flex items-center peer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
                <button className="mr-1">دسته بندی</button>
            </li>
            <div className="absolute w-1/2 h-1/2 bg-white rounded hidden peer-hover:block"></div>
        </div>
    )
}

export default Categories
