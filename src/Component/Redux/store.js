import { configureStore } from '@reduxjs/toolkit'
import roomData from './Sclice'
import userData from './userSclice';

export default configureStore({
  reducer: {
    roomdata: roomData,
    userdata: userData,
  },
})