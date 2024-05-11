const passOrFail = (value: boolean) => {
    return value ? 'Pass' : 'Fail'
}

const BlockProficiency = (props: any) => {
    console.log(props.firstTechnique)
    return (
        <div className="overflow-hidden">
            <div className="px-4 py-5">Blocking Techiniques</div>

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

export default BlockProficiency
