import { configureStore } from "@reduxjs/toolkit"
import keyReducer from "./keyHandler"

export default configureStore({
  reducer: {
    keyHandler: keyReducer,
  },
})
