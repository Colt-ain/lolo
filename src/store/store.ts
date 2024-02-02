import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware, PreloadedState } from "@reduxjs/toolkit";

import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];


export function setupStore(preloadedState: PreloadedState<RootState> = {}, isDevTools = true) {
	const middlewares = getDefaultMiddleware({
		thunk: true,
		devTools: isDevTools,
	})

	return configureStore({
		reducer: rootReducer,
		preloadedState,
		devTools: isDevTools,
		middleware: middlewares,
	});
}

export const store = setupStore();

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppStore = ReturnType<typeof setupStore>
