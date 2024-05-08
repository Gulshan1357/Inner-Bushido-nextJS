import { getUserByClerkId } from '@/app/utils/auth'
import { prisma } from '@/app/utils/db'
import BlockProficiency from './BlockProficiency'
import CuttingProficiency from './CuttingProficiency'
import StanceProficiency from './StanceProficiency'

const getTechniques = async () => {
    const user = await getUserByClerkId()
    const techniques = await prisma.techniqueProficiency.findFirst({
        where: {
            userId: user.id,
        },
    })
    return techniques
}

const Techiniques = async () => {
    const techniques = await getTechniques()

    return (
        <div className="grid grid-cols-3 gap-4 mb-14">
            <CuttingProficiency
                firstTechnique={techniques?.firstCutting}
                secondTechnique={techniques?.secondCutting}
                thirdTechnique={techniques?.thirdCutting}
            />
            <BlockProficiency
                firstTechnique={techniques?.firstBlockTechnique}
                secondTechnique={techniques?.secondBlockTechnique}
                thirdTechnique={techniques?.thirdBlockTechnique}
            />
            <StanceProficiency
                firstTechnique={techniques?.firstSwordStance}
                secondTechnique={techniques?.secondSwordStance}
                thirdTechnique={techniques?.thirdSwordStance}
            />
        </div>
    )
}

export default Techiniques
