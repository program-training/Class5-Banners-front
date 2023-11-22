import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserLoginI {
    loggedIn: boolean
    isAdmin: boolean
    token: string
}

const loggedOut = { loggedIn: false, isAdmin: false, token: '' }

const initialState: UserLoginI = JSON.parse(
    localStorage.getItem('user') || JSON.stringify(loggedOut)
)

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLoginI>) => {
      state = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logOut: (state) => {
        counterSlice.caseReducers.setUser(state, loggedOut)
    }
  },
})

export const { setUser } = counterSlice.actions

export default counterSlice.reducer