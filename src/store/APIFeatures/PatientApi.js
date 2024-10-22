
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/09/30
// Modified-Date: 


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getPatientDetail } from '../reducerSlices/PatientSlice'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const patientApi = createApi({
  reducerPath: 'patientApi',

  // https://s2e.tech-glazers.com/api
  // 'https://pokeapi.co/api/v2/'
  // https://reqres.in/api/login
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  tagTypes: ['patients', 'patient'],
  endpoints: (builder) => ({


    // get all the patients
    getPatients: builder.query({
      query: () => {
        return {
          url: '/pokemon'

        }
      },
      providesTags: ['patients']
    }),



    // get individual patient
    getPatientByID: builder.query({
      query: (id) => {
        console.log('id', id)
        return {
          url: `pokemon/${id}`,
        }
      },

      // providesTags: ['patient']
      providesTags: (result, error, id) => [{ type: 'patient', id }],

    }),


    //update a patient
    updatePatient: builder.mutation({
      query: (id, data) => {
        return {
          url: `pokemon/${id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'patient', id }],


    }),

    // login patient
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka
    patientlogin: builder.mutation({
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
          const { data: logggedInPatientData } = await queryFulfilled
          console.log('sucessful logindata = ', logggedInPatientData);

          // debugger
          dispatch(getPatientDetail(logggedInPatientData))
        } catch (error) {
          console.log('error', error)
        }


      }
    }),

    // register a staff
    patientRegister: builder.mutation({
      query: (data) => {
        console.log('DATA', data)
        return {
          url: '/register',
          method: 'POST',
          body: data

        }
      },

      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   // no need of try catch as error middleware already looks for error if any
      //   try {
      //     const { data: logggedInStaffData } = await queryFulfilled

      //     // debugger
      //     dispatch(getStaffDetail(logggedInStaffData))
      //   } catch (error) {
      //     console.log('error', error)
      //   }


      // }
    }),


  }),
})


export const { useGetPatientsQuery, usePrefetch, usePatientloginMutation, usePatientRegisterMutation } = patientApi