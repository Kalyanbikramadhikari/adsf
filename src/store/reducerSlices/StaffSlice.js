import { createSlice } from '@reduxjs/toolkit'

const staff = JSON.parse(localStorage.getItem('staff'));

const initialState = staff ? {  staff } : {  staff: null };




export const staffSlice = createSlice({
    name: 'staffSlice',
    initialState,
    reducers: {
        getStaffDetail: (state, action) => {
            
            console.log('action', action)
            console.log('payload', action.payload)

            state.staff = action.payload;
            sessionStorage.setItem('staff', JSON.stringify(action.payload));
        },
        

    },
})

// Action creators are generated for each case reducer function
export const { getStaffDetail } = staffSlice.actions

export default staffSlice.reducer