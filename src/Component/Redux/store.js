import { configureStore } from '@reduxjs/toolkit'
import Sclice from './Sclice'

export default configureStore({
  reducer: {
    roomdata: Sclice,
  },
})