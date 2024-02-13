import React, { useState } from 'react';
import { areasToImprove } from '../../content/onboarding/areasToImprove';
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';
import { Text, View } from 'react-native';
import { colors } from '~constants/colors';
import Tips from '~components/@common/Tips/Tips';
import AppButton from '~components/@common/AppButton';
import { RootState } from '~store/store';
import { useDispatch, useSelector } from "react-redux";
import { setAreasToSupportNow } from '~slices/onboarding';

function AreasToSupportNow({ navigation }: { navigation: any }) {
	const dispatch = useDispatch();

	const areasToSupportNow = useSelector((state: RootState) => state.onboarding.areasToSupportNow);

	console.log(areasToSupportNow);

	const [areas, setAreas] = useState(areasToImprove.map((area) => ({
		...area,
		isActive: areasToSupportNow.some((areaToSupportNow) => areaToSupportNow.id === area.id),
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
		dispatch(setAreasToSupportNow({ areas: areas.filter((area) => area.isActive) }));

		navigation.navigate(onboardingRouteNames.chooseLolo);
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
					In which areas do you need{'\n'}support right now?
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

export default AreasToSupportNow;
