import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import github from './api'

const rootReduser = combineReducers({
    [github.reducerPath]: github.reducer,
})

export default configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(github.middleware),
})
