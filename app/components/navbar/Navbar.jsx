import { LoginLinks, NavContainer, NavMenu, NavSearch } from '.'
import ApplicationLogo from '../ApplicationLogo'
import LinkButton from '../LinkButton'

const Navbar = () => {
    const navBtn = [
        { title: 'خانه', to: '/' },
        { title: 'محصولات', to: '/products' },
        { title: 'درباره ما', to: '/about-us' },
    ]
    return (
        <NavContainer>
            <header>
                <div className="flex justify-between items-center w-full px-4 container mx-auto">
                    <div className="flex items-center space-x-4 space-x-reverse ">
                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                        <h1 className="text-md lg:text-2xl lg:font-medium ">
                            فروشگاه من
                        </h1>
                    </div>
                    <ul className="sm:flex space-x-4 space-x-reverse hidden">
                        {navBtn.map((item, index) => (
                            <li key={index}>
                                <LinkButton href={item.to} title={item.title} />
                            </li>
                        ))}
                    </ul>

                    <div className="hidden sm:block">
                        <LoginLinks />
                    </div>
                    <NavMenu />
                </div>
            </header>
        </NavContainer>
    )
}

export default Navbar
