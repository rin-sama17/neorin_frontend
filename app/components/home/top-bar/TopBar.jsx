import React from 'react'

const TopBar = () => {
    return (
        <div className="w-full flex justify-between py-2 px-3 bg-primary">
            <div className="flex text-white space-x-2 items-center ">
                <i className="fa fa-brush text-secondary"></i>
                <h2 className="test-bold text-lg">امکان سقارشی سازی روتختی</h2>
            </div>
            <div className="flex text-white space-x-2 items-center">
                <h2 className="test-bold text-lg text-secondary">نئورین</h2>

                <h2 className="test-bold text-lg">یه خواب خوب و شیرین</h2>
                <i className="fa-solid fa-moon text-secondary"></i>
            </div>
        </div>
    )
}

export default TopBar
