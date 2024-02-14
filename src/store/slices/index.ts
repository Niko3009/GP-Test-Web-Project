import { createSlice } from '@reduxjs/toolkit'

export const initialState = { data: {} }

export const slice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, { payload }) => {
            state.data = payload
        },
    },
})
export default slice

export const { actions, reducer } = slice
export const { setData } = actions
