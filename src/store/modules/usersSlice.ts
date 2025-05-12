import { createSlice } from '@reduxjs/toolkit'
import cookie from 'js-cookie'

export interface UserState {
  username: string
  token: string
}
const initialState: UserState = {
  username: "",
  token: ""
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.username = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
      cookie.set('token', state.token)
    },
    clearStorage: (state) => {
      state.token = ''
      cookie.remove('token')
    }
  }
})

export const {
  setUserInfo,
  setToken,
  clearStorage
} = userSlice.actions

export default userSlice.reducer
