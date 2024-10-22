
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/04
// Modified-Date: 


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const doctorApi = createApi({
  reducerPath: 'doctorApi',

  // https://s2e.tech-glazers.com/api
  // 'https://pokeapi.co/api/v2/'
  // https://reqres.in/api/login
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  tagTypes: ['doctors', 'doctor'],
  endpoints: (builder) => ({


    getDoctors: builder.query({
      query: () => {
        return {
          url: '/users'

        }
      },
      providesTags: ['doctors']
    }),

    // paginatedDoctorList
    getDoctorPerPage: builder.query({
        query:(pageNumber)=>{
            console.log('pageNumber', pageNumber)
            return{
                url: `users?page=${pageNumber}`
            }
        }
    }),



    // get individual doctor
    getDoctorByID: builder.query({
      query: (id) => {
        console.log('id', id)
        return {
          url: `users/${id}`,
        }
      },

      // providesTags: ['doctor']
      providesTags: (result, error, id) => [{ type: 'doctor', id }],

    }),

    // add/create new doctor

    addDoctor:builder.mutation({
        query:(data)=>{
        console.log('data', data)

            return{
                url:`users`,
                method:'POST',
                body:data


            }
        }
    }),


    //update a doctor
    updateDoctor: builder.mutation({
      query: (id, data) => {
        console.log('id, data', id, data)
        return {
          url: `users/${id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'doctor', id }],


    }),

     

   

  }),
})


export const { useGetDoctorsQuery, useGetDoctorByIDQuery,useGetDoctorPerPageQuery, useAddDoctorMutation,useUpdateDoctorMutation } = doctorApi