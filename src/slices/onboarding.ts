import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isOnboarding: boolean;
	avatar: {
		title: string;
		text: string;
		imagePath: string;
	} | null;
	areasToImprove: any[];
	areasToSupportNow: any[];
}

const initialState: InitialState = {
	isOnboarding: true,
	avatar: null,
	areasToImprove: [],
	areasToSupportNow: [],
};

const onboarding = createSlice({
	name: 'onboarding',
	initialState,
	reducers: {
		setOnboarding: (state, action: PayloadAction<{ isOnboarding: boolean }>) => {
			state.isOnboarding = action.payload.isOnboarding;
		},
		setAreasToImprove: (state, action: PayloadAction<{ areas: any[] }>) => {
			state.areasToImprove = action.payload.areas;
		},
		setAreasToSupportNow: (state, action: PayloadAction<{ areas: any[] }>) => {
			state.areasToSupportNow = action.payload.areas;
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

export const {
	setOnboarding,
	setAvatar,
	setAreasToImprove,
	setAreasToSupportNow,
} = onboarding.actions;

export default onboarding.reducer;
