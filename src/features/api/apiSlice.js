import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/all_categors', // Using the endpoint that appeared to be public/all
        }),
        getBrands: builder.query({
            query: () => '/brandname', // Using the standard index endpoint
        }),
        // Placeholder for news if backend endpoint is created later
        getNews: builder.query({
            query: () => '/news',
        }),
    }),
})

export const { useGetCategoriesQuery, useGetBrandsQuery, useGetNewsQuery } = apiSlice
