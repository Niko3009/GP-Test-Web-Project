import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import env from 'global/config/environment'

const baseUrl = env.REACT_APP_API_URL
const headers = { 'Content-type': 'application/json' }
const appealsTag = { type: 'APPEALS', id: 'LIST' }

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllAppeals: builder.query({
            query: () => ({ url: '/appeals', headers }),
            providesTags: (result) => getTags(result?.data),
        }),
        postNewAppeal: builder.mutation({
            query: (body) => {
                return { url: '/appeals/add', method: 'POST', body, headers }
            },
            invalidatesTags: [appealsTag],
        }),
    }),
})
export default api

export const { reducerPath, reducer, middleware, endpoints } = api
export const { useGetAllAppealsQuery, usePostNewAppealMutation } = api
export const { getAllAppeals, postNewAppeal } = endpoints

const getTags = (data = []) => {
    return [
        ...data.map(({ data }) => {
            return { type: appealsTag.type, id: JSON.stringify(data) }
        }),
        appealsTag,
    ]
}
