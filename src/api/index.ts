import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
  brand: string;
  createdAt: string;
  updatedAt: string;
};

type ProductQueryResponse = {
  products: ProductType[];
  count: number;
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductQueryResponse, unknown>({
      query: () => "products?page=1&rows=8&sortBy=id&orderBy=DESC",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
