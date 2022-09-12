import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  name: string;
}
export const nameApiFromNextApi = createApi({
  reducerPath: "nameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      nameFetch: builder.query<User, string>({
        query: (page) => `/${page}`,
      }),
    };
  },
});

export const { useNameFetchQuery } = nameApiFromNextApi;
