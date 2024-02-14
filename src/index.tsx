import React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'app'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Body />)

function Body() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
