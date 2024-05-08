const passOrFail = (value: boolean) => {
    return value ? 'Pass' : 'Fail'
}

const CuttingProficiency = (props: any) => {
    console.log(props.firstTechnique)
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5">Cutting Techiniques</div>

            <div className="px-4 py-5">
                First Stance: {passOrFail(props.firstTechnique)}
            </div>

            <div className="px-4 py-5">
                Second Stance: {passOrFail(props.secondTechnique)}
            </div>

            <div className="px-4 py-5">
                Third Stance: {passOrFail(props.thirdTechnique)}
            </div>
        </div>
    )
}

export default CuttingProficiency
