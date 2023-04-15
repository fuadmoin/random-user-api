import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
   isLoading: false,
    error: false,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://randomuser.me/api/?results=5')
    return response.data.results;
})

const usersSlice = createSlice({ 
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users.push( action.payload);
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    },
})

export default usersSlice.reducer;