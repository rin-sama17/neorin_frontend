import { Toaster } from 'react-hot-toast'
import Header from './Header'
import Sidebar from './Sidebar'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
       <div className="flex min-h-screen ">
    <aside className="w-64 shrink-0 bg-primary">
        <Sidebar />
    </aside>

    <main className="flex-1 min-w-0">
        <Toaster />
        <Header />
        <div className="p-6">
            {children}
        </div>
    </main>
</div>
    )
}

export default Layout
