import { AppState } from "react-native";
import { AppStore } from "~store/store";
import { AppRootStateType } from "~store/reducer";

export function getOnboarding(store: AppRootStateType) {
	return store.onboarding;
}

export function getAuth(store: AppRootStateType) {
	return store.auth;
}
