import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const passOrFail = (value: boolean) => {
    return value ? 'Pass' : 'Fail'
}

const StanceProficiency = (props: any) => {
    console.log(props.firstTechnique)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Stance Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
                <p>First Stance: {passOrFail(props.firstTechnique)}</p>
                <p>Second Stance: {passOrFail(props.secondTechnique)}</p>
                <p>Third Stance: {passOrFail(props.thirdTechnique)}</p>
            </CardContent>
        </Card>
    )
}

export default StanceProficiency
