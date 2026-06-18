import React from 'react'
import ApplicationLogo from '../../navigation/ApplicationLogo'
import { NavSearch } from '../../navbar'

const MainHeader = () => {
    return (
        <div className="block  w-full p-4 ">
            <div className="flex justify-between">
                <div className="flex items-center space-x-4 space-x-reverse ">
                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                    <h1 className="text-md lg:text-2xl lg:font-medium ">
                        فروشگاه من
                    </h1>
                </div>
                <NavSearch />
                <div className="flex space-x-2 items-center">
                    <i className="fa fa-user  text-primary"></i>
                    <i className="fa-solid fa-basket-shopping  text-primary"></i>
                </div>
            </div>
        </div>
    )
}

export default MainHeader
