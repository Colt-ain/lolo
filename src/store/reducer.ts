import { combineReducers } from "redux";

import auth from "~slices/auth";
import onboarding from "~slices/onboarding";

export const rootReducer = combineReducers({
	auth,
	onboarding,
});


export type RootReducerType = typeof rootReducer;
export type AppRootStateType = ReturnType<RootReducerType>;
