import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
	isAuth: boolean;
}

const initialState: InitialState = {
	isAuth: false,
}

const authentication = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
			console.log('setIsAuth', action.payload.isAuth);
			state.isAuth = action.payload.isAuth;
		},
	},
});

export const { setIsAuth } = authentication.actions;

export default authentication.reducer;
