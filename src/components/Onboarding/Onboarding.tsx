import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '~components/Onboarding/Welcome';

import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';
import AreasToImprove from '~components/Onboarding/AreasToImprove/AreasToImprove';
import { Text, View } from 'react-native';
import BackButton from '~components/@common/BackBtn';
import { NavigationType } from '../../interfaces';
import { colors } from '~constants/colors';
import ChooseLolo from '~components/Onboarding/ChooseLolo';
import NotificationExamples from '~components/Onboarding/NotificationExamples';
import YouWillStartWith from '~components/Onboarding/YouWillStartWith';
import Subscription from '~components/Onboarding/Subscription';
import NotificationExplain from '~components/Onboarding/NotificationExplain';

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
	headerShown = true,
	isBackButton: boolean,
) => ({ navigation }: { navigation: NavigationType }) => ({
	title: '',
	headerTitle: () => {
		return (
			<View
				style={{
					borderRadius: 4,
					backgroundColor: title ? '#F3ECD9' : 'transparent',
					paddingTop: 5,
					paddingBottom: 5,
					paddingLeft: 8,
					paddingRight: 8,
				}}
			>
				<Text style={{
					fontFamily: 'Montserrat',
					fontSize: 12,
					fontWeight: 'bold',
					color: '#C53E13',
					textAlign: 'center',
				}}>
					{title}
				</Text>
			</View>
		);
	},
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
			<Stack.Navigator initialRouteName={onboardingRouteNames.welcome}>
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
				<Stack.Screen
					name={onboardingRouteNames.notificationExplain}
					component={NotificationExplain}
					options={screenOptions('', true, true)}
				/>
				<Stack.Screen
					name={onboardingRouteNames.subscription}
					component={Subscription}
					options={screenOptions('GET PREMIUM 👑', true, true)}
				/>
			</Stack.Navigator>
		</NavigationContainer>
		</View>
	);
};

export default Onboarding;
