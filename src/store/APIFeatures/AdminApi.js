
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/02
// Modified-Date: 


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAdminDetail } from '../reducerSlices/AdminSlice'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',

  // https://s2e.tech-glazers.com/api
  // 'https://pokeapi.co/api/v2/'
  // https://reqres.in/api/login
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  tagTypes: ['admins', 'admin'],
  endpoints: (builder) => ({


    // get all the admins
    getAllAdmin: builder.query({
      query: () => {
        return {
          url: '/pokemon'

        }
      },
      providesTags: ['admins']
    }),



    // get individual admin
    getAdminByID: builder.query({
      query: (id) => {
        console.log('id', id)
        return {
          url: `pokemon/${id}`,
        }
      },

      providesTags: (result, error, id) => [{ type: 'admin', id }],

    }),


    //update a patient. this uses id
    updateAdmin: builder.mutation({
      query: (id, data) => {
        return {
          url: `pokemon/${id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'admin', id }],


    }),

    // login patient
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka
    adminLogin: builder.mutation({
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
          dispatch(getAdminDetail(logggedInStaffData))
        } catch (error) {
          console.log('error', error)
        }


      }
    }),

    // admin login mutation
    adminRegister: builder.mutation({
        query: (data) => {
          console.log('DATA', data)
          return {
            url: '/register',
            method: 'POST',
            body: data
  
          }
        },
  
      }),


  }),
})


export const { useGetAllAdminQuery, useGetAdminByIDQuery, useAdminLoginMutation, useAdminRegisterMutation } = adminApi