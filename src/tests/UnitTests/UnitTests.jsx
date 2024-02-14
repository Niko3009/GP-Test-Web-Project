import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent } from '@testing-library/react'
import uniqid from 'uniqid'

import { ControlPanel } from 'app'

export const UnitTests = () => {
    describe('<App />', AppTest)
}
export default UnitTests

const AppTest = () => {
    describe('<ControlPanel />', ControlPanelTest)
}

function ControlPanelTest() {
    const cb = jest.fn()
    const testId = uniqid()

    describe('Appeal adding control callback tests', () => {
        it('should set appeal adding button', async () => {
            render(<ControlPanel />)
            const btn = await screen.findByText('+ создать обращение')
            expect(btn).toBeInTheDocument()
        })

        it('should call `onClick` prop', () => {
            render(<ControlPanel addAppeal={cb} btnTestId={testId} />)
            const btn = screen.getByTestId(testId)
            fireEvent.click(btn)
            expect(cb).toBeCalledTimes(1)
        })
    })
}
