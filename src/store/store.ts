import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import api from 'store/api'
import slices from 'store/slices'

export const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [slices.name]: slices.reducer,
})

export const middleware = (getMiddleware) =>
    getMiddleware({ serializableCheck: false }).concat([api.middleware])

export const store = configureStore({ reducer, middleware })
export default store
