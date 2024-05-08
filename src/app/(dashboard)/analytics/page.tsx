import { getUserByClerkId } from '@/app/utils/auth'
import { prisma } from '@/app/utils/db'
import MatchCard from '@/components/MatchCard'

const getMatches = async () => {
    const user = await getUserByClerkId()
    const matches = await prisma.matchHistroy.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return matches
}

const AnalyticsPage = async () => {
    const matches = await getMatches()

    return (
        <div className="p-10 bg-zinc-400/10">
            <h2 className="text-3xl mb-8">Recent matches</h2>
            <div className="grid grid-cols-3 gap-4">
                {matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
        </div>
    )
}

export default AnalyticsPage
