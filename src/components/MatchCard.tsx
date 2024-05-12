import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const MatchCard = ({ match }) => {
    const date = new Date(match.createdAt).toDateString()
    return (
        <div className="flex-1 px-2 justify-center w-16  h-300px">
            <Card>
                <CardHeader>
                    <CardTitle>Highlights</CardTitle>
                    <CardDescription>Date: May 1st, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Score: 99/100</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default MatchCard
