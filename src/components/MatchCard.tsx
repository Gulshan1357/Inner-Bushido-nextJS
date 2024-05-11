'use client'

const MatchCard = ({ match }) => {
    const date = new Date(match.createdAt).toDateString()
    return (
        <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="">
                <p className="text-gray-900 font-bold">Highlights</p>
                <p className="py-4 font-bold">Date: {date}</p>
                <p className="text-green-300">Score: {match.score}</p>
            </div>
        </div>
    )
}

export default MatchCard
