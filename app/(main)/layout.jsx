import TopBar from '@/components/home/top-bar/TopBar'
import { MainHeader, Navbar } from '@/components/navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <TopBar />
                            <MainHeader />
                            <Navbar />
            <div  className="mt-4">{children}</div>
        </div>
    )
}

export default Layout
