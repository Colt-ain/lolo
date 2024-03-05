import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Tips from '~components/@common/Tips/Tips';
import { areasToImprove } from '../../../content/onboarding/areasToImprove';
import AppButton from '~components/@common/AppButton';
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';
import { colors } from '~constants/colors';
import { RootState } from '~store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setAreasToImprove } from '~slices/onboarding';

function AreasToImprove({ navigation }: { navigation: any }) {
	const dispatch = useDispatch();

	const chosenAreasToImprove = useSelector((state: RootState) => state.onboarding.areasToImprove);

	const [areas, setAreas] = useState(areasToImprove.map((area) => ({
		...area,
		isActive: chosenAreasToImprove.some((item) => item.id === area.id),
	})));

	const handleTipPress = (id: string | number) => {
		setAreas((prev) => {
			return prev.map((tip) => {
				if (tip.id === id) {
					return {
						...tip,
						isActive: !tip.isActive,
					};
				}

				return tip;
			});
		});
	};

	const onNextPress = () => {
		dispatch(setAreasToImprove({ areas: areas.filter((area) => area.isActive) }));

		navigation.navigate(onboardingRouteNames.areasToSupportNow);
	};

	const isChosen = areas.some((area) => area.isActive);

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 32,
				justifyContent: 'space-between',
				paddingBottom: 40,
				backgroundColor: colors.background.white,
			}}
		>
			<Text
				style={{
					fontFamily: 'Montserrat',
					fontSize: 22,
					fontWeight: '600',
					lineHeight: 32,
					textAlign: 'center',
				}}
			>
				In which areas do you need{'\n'}support the most?
			</Text>
			<View
				style={{
					marginTop: 20,
					marginBottom: 20,
				}}
			>
				<Tips
					tips={areas}
					onTipPress={handleTipPress}
				/>
			</View>
			<AppButton
				title={isChosen ? 'Continue' : 'Skip'}
				onPress={onNextPress}
				disabled={!isChosen}
				style={{
					width: 180,
					alignSelf: 'center',
				}}
			/>
		</View>
	);
}

export default AreasToImprove;
