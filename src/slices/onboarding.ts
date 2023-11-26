import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isOnboarding: boolean;
}

const initialState: InitialState = {
	isOnboarding: true,
};

const onboarding = createSlice({
	name: 'onboarding',
	initialState,
	reducers: {
		setOnboarding: (state, action: PayloadAction<{ isOnboarding: boolean }>) => {
			state.isOnboarding = action.payload.isOnboarding;
		},
	},
});

export const { setOnboarding } = onboarding.actions;

export default onboarding.reducer;
