import { Toaster } from 'react-hot-toast'
import Header from './Header'
import Sidebar from './Sidebar'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/6 min-h-screen bg-indigo-800">
                <Sidebar />
            </div>

            <div className="w-5/6">
                <Toaster />
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout
