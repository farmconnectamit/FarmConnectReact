import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuthToken, clearTokens } from '../src/utils/auth';
import { RefreshControl } from 'react-native/types_generated/index';
import { refreshJwtToken } from '../src/utils/token-refresh';
import { API_BASE_URL } from '../config/api-config';
import { AuthResponse, LoginRequest } from '../src/types/auth';

// Define the base URL for your Django API
// const baseUrl = 'http://10.0.2.2:8000/api/v1';
const baseUrl = 'http://192.168.1.2:8000/api/v1';
const PRODUCT_API = "Product-api.ts "

// Create a custom fetchBaseQuery with token handling
const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        // Add auth token if available from NativeKeyStore
        if (endpoint === 'login') {
            console.log('Skipping token addition for login endpoint');
            return headers;
        }
        try {
            const token = await getAuthToken(PRODUCT_API);
            console.log(PRODUCT_API + " token: " + token)
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
        } catch (error) {
            console.error('Error retrieving token from NativeKeyStore:', error);
        }
        return headers;
    },
});

// Custom fetchBaseQuery with refresh token logic
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    console.log(PRODUCT_API, "Making request to:", args.url);
    const isLoginEndpoint = args.url?.includes('login/');

    if (isLoginEndpoint) {
        console.log('🔄 Skipping token refresh logic for login endpoint');
        return await baseQuery(args, api, extraOptions);
    }
    // First attempt
    let result = await baseQuery(args, api, extraOptions);
    console.log(PRODUCT_API, "Response status:", result?.error?.status);

    // If 401 Unauthorized, try to refresh token
    if (result?.error?.status === 401) {
        console.log('🔄 Token expired, attempting to refresh...');

        try {
            // Try to refresh the token
            const refreshResult = await refreshJwtToken();

            if (refreshResult) {
                console.log('✅ Token refreshed successfully, retrying original request');

                // Retry the original request with new token
                result = await baseQuery(args, api, extraOptions);
            } else {
                console.log('❌ Token refresh failed, redirecting to login');
                // Handle refresh failure - redirect to login
                // You might want to dispatch a logout action here
                // api.dispatch(logout());
            }
        } catch (error) {
            console.error('Error during token refresh:', error);
        }
    }

    return result;
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User','Product', 'Farm', 'Category'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ search = '', category = null, ordering = '-created_at' } = {}) => {
                const params = new URLSearchParams();
                if (search) params.append('search', search);
                if (category) params.append('category', category);
                params.append('ordering', ordering);

                return {
                    url: 'products/',
                    method: 'GET',
                    params,
                };
            },
            providesTags: ['Product'],
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}/`,
            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
        getProductsByFarmId: builder.query({
            query: (farmId) => ({
                url: 'products/by_farm/',
                method: 'POST',
                body: { farm_id: farmId },
            }),
            providesTags: (result, error, farmId) => {
                // This MUST return an array
                if (result && result.products) {
                    return [
                        { type: 'Product', id: 'LIST' },
                        ...result.products.map((product: any) => ({ type: 'Product', id: product.id }))
                    ];
                }
                return [{ type: 'Product', id: 'LIST' }];
            },
        }),
        getAllFarms: builder.query({
            query: () => {
                return {
                    url: 'farms/',
                    method: 'GET',
                };
            },
            providesTags: ['Farm'],
        }),
        getFarmById: builder.query({
            query: (id) => `farms/${id}/`,
            providesTags: (result, error, id) => [{ type: 'Farm', id }],
        }),
        getAllCategories: builder.query({
            query: () => {
                return {
                    url: 'categories/',
                    method: 'GET',
                };
            },
            providesTags: ['Category'],
        }),
        getCategoryById: builder.query({
            query: (id) => `categories/${id}/`,
            providesTags: (result, error, id) => [{ type: 'Category', id }],
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: 'products/',
                method: 'POST',
                body: newProduct,
            }),
            invalidatesTags: ['Product'],
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `products/${id}/`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
        login: builder.mutation < AuthResponse, LoginRequest>({
            query: ({ username, password }) => ({
                url: 'login/',
                method: 'POST',
                body: {
                    username,
                    password
                }
            })
        }),
    }),
});

// Export hooks for usage in components
export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetProductsByFarmIdQuery,
    useGetAllFarmsQuery,
    useGetFarmByIdQuery,
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useLoginMutation,
} = productsApi;