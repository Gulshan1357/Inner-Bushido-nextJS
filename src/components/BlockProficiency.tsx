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

const BlockProficiency = (props: any) => {
    console.log(props.firstTechnique)
    return (
        // <div className="overflow-hidden">
        //     <div className="px-4 py-5"></div>

        //     <div className="px-4 py-5">
        //         First Stance: {passOrFail(props.firstTechnique)}
        //     </div>

        //     <div className="px-4 py-5">
        //         Second Stance: {passOrFail(props.secondTechnique)}
        //     </div>

        //     <div className="px-4 py-5">
        //         Third Stance: {passOrFail(props.thirdTechnique)}
        //     </div>
        // </div>
        <Card>
            <CardHeader>
                <CardTitle>Blocking techniques</CardTitle>
            </CardHeader>
            <CardContent>
                <p>First Stance: {passOrFail(props.firstTechnique)}</p>
                <p>Second Stance: {passOrFail(props.secondTechnique)}</p>
                <p>Third Stance: {passOrFail(props.thirdTechnique)}</p>
            </CardContent>
        </Card>
    )
}

export default BlockProficiency
