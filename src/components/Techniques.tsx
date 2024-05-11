import { getUserByClerkId } from '@/app/utils/auth'
import { prisma } from '@/app/utils/db'
import BlockProficiency from './BlockProficiency'
import CutProficiencyChart from './CutProficiencyChart'
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
        <div>
            <section className="flex my-4 px-4 gap-3">
                <div className="w-1/2 h-[300px] bg-gray-700 rounded">
                    <CutProficiencyChart />
                </div>

                <div className="w-1/2 h-[300px] bg-gray-700 rounded"></div>
            </section>

            <section className="flex my-4 px-4 gap-2">
                <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
                    <CuttingProficiency
                        firstTechnique={techniques?.firstCutting}
                        secondTechnique={techniques?.secondCutting}
                        thirdTechnique={techniques?.thirdCutting}
                    />
                </div>
                <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
                    <BlockProficiency
                        firstTechnique={techniques?.firstBlockTechnique}
                        secondTechnique={techniques?.secondBlockTechnique}
                        thirdTechnique={techniques?.thirdBlockTechnique}
                    />
                </div>
                <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
                    <StanceProficiency
                        firstTechnique={techniques?.firstSwordStance}
                        secondTechnique={techniques?.secondSwordStance}
                        thirdTechnique={techniques?.thirdSwordStance}
                    />
                </div>
            </section>
        </div>
    )
}

export default Techiniques
