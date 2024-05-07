import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function Home() {
    const { userId } = await auth()

    let href = userId ? '/dashboard' : '/new-user'

    console.log(`User Id at home page: ${userId}`)

    return (
        <div className="w-screen h-screen flex justify-center items-center text-white">
            <div className="w-full max-w-[600px] mx-auto ">
                <h1 className="text-6xl mb-4">Inner-Bushido</h1>
                <p className="text-2xl text-white/60 mb-4">
                    This is the best Samurai Simulator VR app to learn Bushido
                </p>
                <div>
                    <Link href={href}>
                        <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
                            get started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
