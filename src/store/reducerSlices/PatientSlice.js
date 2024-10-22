import { createSlice } from '@reduxjs/toolkit'

const patient = JSON.parse(localStorage.getItem('patient'));

const initialState = patient ? {  patient } : {  patient: null };




export const patientSlice = createSlice({
    name: 'patientSlice',
    initialState,
    reducers: {
        getPatientDetail: (state, action) => {
            
            console.log('action', action)
            console.log('payload', action.payload)

            state.patient = action.payload;
            sessionStorage.setItem('patient', JSON.stringify(action.payload));
        },
        

    },
})

// Action creators are generated for each case reducer function
export const { getPatientDetail } = patientSlice.actions

export default patientSlice.reducer