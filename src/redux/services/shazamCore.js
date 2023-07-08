/* eslint-disable no-console */
/* eslint-disable arrow-parens */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '16dd8d3f3dmsh758a8a4bf4165acp1624b8jsn1727776d04f3',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
});
