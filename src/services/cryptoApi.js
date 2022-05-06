import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cyptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '3476e61f1emshc6fdaecd5aace85p101b59jsncafe799738ea'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cyptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
})

export const { useGetCryptosQuery} = cryptoApi;
