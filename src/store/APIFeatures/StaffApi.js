
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/02
// Modified-Date: 


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStaffDetail } from '../reducerSlices/StaffSlice'

// Define a service using a base URL and expected endpoints
export const staffApi = createApi({
  reducerPath: 'staffApi',

  // https://s2e.tech-glazers.com/api
  // 'https://pokeapi.co/api/v2/'
  // https://reqres.in/api/login
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  tagTypes: ['staffs', 'staff'],
  endpoints: (builder) => ({


    // get all the staffs
    getAllStaff: builder.query({
      query: () => {
        return {
          url: '/pokemon'

        }
      },
      providesTags: ['staffs']
    }),



    // get individual staff
    getStaffByID: builder.query({
      query: (id) => {
        console.log('id', id)
        return {
          url: `pokemon/${id}`,
        }
      },

      providesTags: (result, error, id) => [{ type: 'staff', id }],

    }),


    //update a patient. this uses id
    updateStaff: builder.mutation({
      query: (id, data) => {
        return {
          url: `pokemon/${id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'staff', id }],


    }),

    // login patient
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka
    staffLogin: builder.mutation({
      query: (data) => {
        console.log('DATA', data)
        return {
          url: '/login',
          method: 'POST',
          body: data

        }
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        // no need of try catch as error middleware already looks for error if any
        try {
          const { data: logggedInStaffData } = await queryFulfilled

          // debugger
          dispatch(getStaffDetail(logggedInStaffData))
        } catch (error) {
          console.log('error', error)
        }


      }
    }),

    


  }),
})


export const { useGetAllStaffQuery, useGetStaffByIDQuery, useStaffLoginMutation } = staffApi