import Navbar from '@/components/NavBar'
import Sidebar from '@/components/SideBar'

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className="flex dark:bg-white">
                <Sidebar />
                <main className="flex-grow ml-64 relative ">
                    <Navbar />
                    <div>
                        <div>{children}</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
