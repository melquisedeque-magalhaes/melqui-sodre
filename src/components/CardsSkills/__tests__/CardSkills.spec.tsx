import { render } from '@testing-library/react'
import { CardSkills } from '../CardsSills'

describe("[Componet] - CardSkills", () => {
    it("should render correctly", () => {
        const {container} = render(
            <CardSkills
                srcImg='testImage'
                altImg='altImage'
                titleCard='titleTest'
                descriptionCard='descriptionTest'
            />
        )

    expect(container).toBeDefined()

    })
})
