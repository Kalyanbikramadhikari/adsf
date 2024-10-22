import { createSlice } from '@reduxjs/toolkit'

const admin = JSON.parse(localStorage.getItem('admin'));

const initialState = admin ? {  admin } : {  admin: null };




export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        getAdminDetail: (state, action) => {
            
            console.log('action', action)
            console.log('payload', action.payload)

            state.admin = action.payload;
            sessionStorage.setItem('admin', JSON.stringify(action.payload));
        },
        

    },
})

// Action creators are generated for each case reducer function
export const { getAdminDetail } = adminSlice.actions

export default adminSlice.reducer