import { getUserByClerkId } from '@/app/utils/auth'
import { prisma } from '@/app/utils/db'
import { NextResponse } from 'next/server'

export const POST = async () => {
    const user = await getUserByClerkId()
    const match = await prisma.matchHistroy.create({
        data: {
            userId: user.id,
            score: 83,
        },
    })

    return NextResponse.json({ data: match })
}
