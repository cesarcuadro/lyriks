/* eslint-disable no-console */
/* eslint-disable arrow-parens */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '16dd8d3f3dmsh758a8a4bf4165acp1624b8jsn1727776d04f3');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/world' }),
  }),
});

// "use" from rtk, "GetTopCharts" from endpoints, "Query" from baseQuery
export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
