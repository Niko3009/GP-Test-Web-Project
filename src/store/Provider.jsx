import store from 'store'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
}
export { StoreProvider as Provider }
