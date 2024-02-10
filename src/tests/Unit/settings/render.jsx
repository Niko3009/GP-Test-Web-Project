import { render } from '@testing-library/react'
import React from 'react'

const AllProviders = ({ testContextValue, children }) => {
    return (
        <testContext.Provider value={testContextValue}>
            {children}
        </testContext.Provider>
    )
}

export default (ui, options) => {
    const testContextValue = options?.testContextValue
    return render(ui, {
        wrapper: ({ children }) => AllProviders({ testContextValue, children }),
        ...options,
    })
}

export const testContext = React.createContext()
