import { promises as fs } from 'fs'

export default async function Analytics() {
    const file = await fs.readFile(
        process.cwd() + 'src/app/utils/testdata.json',
        'utf8',
    )
    const data = JSON.parse(file)

    return data
}
