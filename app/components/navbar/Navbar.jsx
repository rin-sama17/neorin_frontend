import { Cart, LoginLinks, NavContainer, NavMenu, NavSearch } from '.'
import LinkButton from '../navigation/LinkButton'
import Categories from './Categories'

const Navbar = () => {
    const navBtn = [
        { title: 'دسته بندی', to: '/products' },
        { title: ' خانه', to: '/products' },
        { title: 'محصولات', to: '/products' },
        { title: 'محصولات', to: '/products' },
        { title: 'درباره ما', to: '/about-us' },
    ]
    return (
        <NavContainer>
            <header>
                <div className="flex  justify-around items-center w-full px-4 py-2 ">
                    <ul className="sm:flex space-x-4 space-x-reverse hidden">
                        <Categories />
                        {navBtn.map((item, index) => (
                            <li key={index}>
                                <LinkButton href={item.to} title={item.title} />
                            </li>
                        ))}
                    </ul>
                    {/* <div className="flex space-x-1 align-middle">
                        <LoginLinks />
                        <Cart />
                    </div> */}
                    {/* <NavMenu /> */}
                </div>
            </header>
        </NavContainer>
    )
}

export default Navbar
