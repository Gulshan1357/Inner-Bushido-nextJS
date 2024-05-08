const MatchCard = ({ match }) => {
    const date = new Date(match.createdAt).toDateString()
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5">Date: {date}</div>
            <div className="px-4 py-5">Score: {match.score}</div>
        </div>
    )
}

export default MatchCard
