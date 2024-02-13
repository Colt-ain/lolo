import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isOnboarding: boolean;
	avatar: {
		title: string;
		text: string;
		imagePath: string;
	} | null;
}

const initialState: InitialState = {
	isOnboarding: true,
	avatar: null,
};

const onboarding = createSlice({
	name: 'onboarding',
	initialState,
	reducers: {
		setOnboarding: (state, action: PayloadAction<{ isOnboarding: boolean }>) => {
			state.isOnboarding = action.payload.isOnboarding;
		},
		setAvatar: (state, action: PayloadAction<{
			avatar: {
				title: string;
				text: string;
				imagePath: any;
			};
		}>) => {
			state.avatar = action.payload.avatar;
		},
	},
});

export const { setOnboarding, setAvatar } = onboarding.actions;

export default onboarding.reducer;
