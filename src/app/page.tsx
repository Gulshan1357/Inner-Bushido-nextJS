import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function Home() {
    const { userId } = await auth()

    let href = userId ? '/analytics' : '/new-user'

    console.log(`User Id at home page: ${userId}`)

    return (
        <div className="bg-zinc-950 dark:bg-white">
            <div className="w-screen h-screen flex justify-center items-center text-white">
                <div className="w-full max-w-[600px] mx-auto ">
                    <h2 className="text-6xl mb-4">Inner-Bushido</h2>

                    <blockquote className="mt-6 mb-4 border-l-2 pl-6 italic">
                        A Virtual Reality Simulator
                    </blockquote>
                    <div>
                        <Link href={href}>
                            <Button variant="default" size="lg">
                                get started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
