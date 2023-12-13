import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "~components/Onboarding/Welcome";

import { onboardingRouteNames } from "~routes/onboarding/onboardingRouteNames";
import AreasToImprove from "~components/Onboarding/AreasToImprove/AreasToImprove";
import { SafeAreaView, Text, View } from "react-native";
import BackButton from "~components/@common/BackBtn";
import { NavigationType } from "../../interfaces";
import { colors } from "~constants/colors";
import ChooseLolo from '~components/Onboarding/ChooseLolo';
import NotificationExamples from '~components/Onboarding/NotificationExamples';
import YouWillStartWith from "~components/Onboarding/YouWillStartWith";

const { welcome, areasToImprove } = onboardingRouteNames;

const Stack = createNativeStackNavigator();

export const linking = {
	prefixes: [
		'lolo://',
	],
	config: {
		screens: {
			[welcome]: welcome,
			[areasToImprove]: areasToImprove,
		},
	},
};

const headerLeftIcon = (navigation: NavigationType, title: string, isBackButton: boolean) => () =>
	<BackButton navigation={navigation} title={title} isBackButton={isBackButton}/>;

const screenOptions = (
	title: string,
	headerShown: boolean = true,
	isBackButton: boolean,
) => ({ navigation }: { navigation: NavigationType }) => ({
	title: '',
	headerShown: headerShown,
	headerBackTitleVisible: false,
	headerLeft: headerLeftIcon(navigation, title, isBackButton),
	headerShadowVisible: false,
	gestureEnabled: isBackButton,
	headerStyle: {
		backgroundColor: colors.background.white,
	},
});

const Onboarding = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.purple,
			}}
		>
		<NavigationContainer linking={linking}>
			<Stack.Navigator initialRouteName={welcome}>
				<Stack.Screen
					name={onboardingRouteNames.welcome}
					component={Welcome}
					options={screenOptions('', false, false)}
				/>
				<Stack.Screen
					name={onboardingRouteNames.areasToImprove}
					component={AreasToImprove}
					options={screenOptions('', true, true)}
				/>
				<Stack.Screen
					name={onboardingRouteNames.chooseLolo}
					component={ChooseLolo}
					options={screenOptions('', true, true)}
				/>
				<Stack.Screen
					name={onboardingRouteNames.notifivationExpamples}
					component={NotificationExamples}
					options={screenOptions('', true, true)}
				/>
				<Stack.Screen
					name={onboardingRouteNames.youWillStartWith}
					component={YouWillStartWith}
					options={screenOptions('', true, true)}
				/>
			</Stack.Navigator>
		</NavigationContainer>
		</View>
	);
};

export default Onboarding;
