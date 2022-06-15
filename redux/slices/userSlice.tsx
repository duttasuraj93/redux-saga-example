import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    getUser: (state: any, action: PayloadAction) => {},
    setUser: (state: any, action: PayloadAction) => state = action.payload,
  }
})


export const { setUser, getUser } = userSlice.actions

export default userSlice.reducer