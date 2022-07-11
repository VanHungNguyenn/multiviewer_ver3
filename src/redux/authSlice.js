import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	username: '',
	token: '',
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.username = action.payload.username
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		logout: (state, action) => {
			state.username = ''
			state.token = ''
			state.isLoggedIn = false
		},
		getToken: (state, action) => {
			state.token = action.payload
			state.isLoggedIn = true
		},
		getUser: (state, action) => {
			state.username = action.payload.username
		},
	},
})

export const { login, logout, getToken, getUser } = authSlice.actions
export default authSlice.reducer
