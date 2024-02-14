import { cleanup } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

/**
 * Функция для мока api
 * @link https://github.com/reduxjs/redux-toolkit/blob/64a30d83384d77bcbc59231fa32aa2f1acd67020/packages/toolkit/src/query/tests/helpers.tsx#L170
 */
export const setupApiStore = (api, extraReducers, withoutListeners) => {
    const getStore = () =>
        configureStore({
            reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
            middleware: (gdm) =>
                gdm({ serializableCheck: false, immutableCheck: false }).concat(
                    api.middleware
                ),
        })

    const initialStore = getStore()
    const refObj = {
        api,
        store: initialStore,
        wrapper: withStoreProvider(initialStore),
    }

    let cleanupListeners

    beforeEach(() => {
        const store = getStore()
        refObj.store = store
        refObj.wrapper = withStoreProvider(store)

        if (!withoutListeners) {
            cleanupListeners = setupListeners(store.dispatch)
        }
    })

    afterEach(() => {
        cleanup()

        if (!withoutListeners) {
            cleanupListeners()
        }

        refObj.store.dispatch(api.util.resetApiState())
    })

    return refObj
}
