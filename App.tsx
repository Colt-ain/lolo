import React, { Component, FC, FunctionComponent, ReactElement } from "react";
import type { PropsWithChildren } from "react";
import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";
import { Provider } from "react-redux";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { store, useAppDispatch, useAppSelector } from "./src/store/store";

import AppButton from "~components/@common/AppButton";
import Auth from "~components/Auth";

import { getAuth } from "~store/selectors";
import { setIsAuth } from "~slices/auth";
import { colors } from "~constants/colors";
import { linking } from "~components/Onboarding/Onboarding";
import { NavigationContainer } from "@react-navigation/native";

function App(): ReactElement {
	const isDarkMode = useColorScheme() === "dark";

	return (
		<View style={{
			flex: 1,
			backgroundColor: colors.background.white,
		}}>
			<Provider store={store}>
				<SafeAreaView style={{
					flex: 1,
				}}>
					<Auth/>
				</SafeAreaView>
			</Provider>
		</View>
	);
}

export default App;
