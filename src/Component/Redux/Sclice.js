import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'roomdata',
  initialState: {
    roomData:[],
    roomId: {roomId:0},
    checkInDate: "",
    checkOutDate: "",
  },
  reducers: {
    setRoomData: (state, action) => {
      state.roomData = action.payload;
  },
    roomId: (state, action) => {
        state.roomId.roomId = action.payload;
    },
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { roomId, setCheckInDate, setCheckOutDate, decrement, incrementByAmount, setRoomData } = counterSlice.actions

export default counterSlice.reducer