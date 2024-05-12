import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center px-4 py-2">
                <div className="w-full">
                    <div className="pr-4 ">
                        <Input
                            type="text"
                            className="px-4 py-2 rounded-md"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="flex items-center"></div>
                <UserButton />
            </nav>
        </>
    )
}

export default Navbar
