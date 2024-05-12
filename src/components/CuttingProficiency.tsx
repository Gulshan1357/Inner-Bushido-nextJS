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

const CuttingProficiency = (props: any) => {
    console.log(props.firstTechnique)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cutting techniques</CardTitle>
            </CardHeader>
            <CardContent>
                <p>First Stance: {passOrFail(props.firstTechnique)}</p>
                <p>Second Stance: {passOrFail(props.secondTechnique)}</p>
                <p>Third Stance: {passOrFail(props.thirdTechnique)}</p>
            </CardContent>
        </Card>
    )
}

export default CuttingProficiency
