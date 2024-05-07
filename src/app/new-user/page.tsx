import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from '../utils/db'

const createNewUser = async () => {
    const user = await currentUser()
    console.log(user)

    if (user == null) {
        console.log('User is null')
        return
    }

    const match = await prisma.user.findUnique({
        where: {
            clerkId: user.id as string,
        },
    })

    if (!match) {
        await prisma.user.create({
            data: {
                clerkId: user.id,
                email: user?.emailAddresses[0].emailAddress,
            },
        })
    }

    redirect('/dashboard')
}

const NewUser = async () => {
    await createNewUser()
    return <div>Hello!, New User! Loading...</div>
}

export default NewUser
