import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newmarketAPI = createApi({
    reducerPath: 'newmarketAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/',
    }),

    tagTypes: ['addProduct'],
    endpoints: (builder) => ({
        insertProduct: builder.mutation({
            query: (payload) => ({
                url: '/product',
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['addProduct'],
        }),
        getProduct: builder.query({
            query: () => '/product',
            providesTags: ['addProduct'],
        }),
    }),
});

export const {
    useInsertProductMutation,
    useGetProductQuery
} = newmarketAPI;
