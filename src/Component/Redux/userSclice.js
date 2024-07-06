import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userName: false
  },
  reducers: {
    userData: (state, action) => {
        state.userName = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions

export default userSlice.reducer