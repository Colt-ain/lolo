import React from 'react';
import { Text, View } from 'react-native';
import AppButton from '~components/@common/AppButton';
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';

function ChooseLolo({ navigation }: { navigation: any }) {
	const onNextPress = () => {
		navigation.navigate(onboardingRouteNames.notifivationExpamples);
	};

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 32,
				justifyContent: 'space-between',
				paddingBottom: '8%',
			}}
		>
			<Text
				style={{
					fontSize: 22,
					fontWeight: '600',
					lineHeight: 32,
					textAlign: 'center',
				}}
			>Meet Lolo — an avatar of your inner loving and supportive self</Text>
			<View
				style={{
					marginTop: 20,
					marginBottom: 20,
				}}
				>
				<Text
					style={{
						fontSize: 22,
						fontWeight: '600',
						lineHeight: 32,
						textAlign: 'center',
					}}
				>
					Pick the one that resonates with you
				</Text>
			</View>
			<View>
				<Text>
					Here will be a slider
				</Text>
			</View>
			<AppButton
				title={'Pick this Lolo'}
				onPress={onNextPress}
			/>
		</View>
	);
}

export default ChooseLolo;
