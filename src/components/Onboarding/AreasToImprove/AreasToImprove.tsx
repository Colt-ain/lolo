import React, { useState } from "react";
import { Text, View } from "react-native";
import Tips from "~components/@common/Tips/Tips";
import { areasToImprove } from "../../../content/onboarding/areasToImprove";
import AppButton from "~components/@common/AppButton";
import { useNavigation } from "@react-navigation/native";
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';
import { colors } from "~constants/colors";

function AreasToImprove({ navigation }: { navigation: any }) {
	const [areas, setAreas] = useState(areasToImprove.map((area) => ({
		...area,
		isActive: false,
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
	}

	const onNextPress = () => {
		console.log('Next');

		navigation.navigate(onboardingRouteNames.chooseLolo);
	};

	const isChosen = areas.some((area) => area.isActive);

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 32,
				justifyContent: 'space-between',
				paddingBottom: '8%',
				backgroundColor: colors.background.white,
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
				Which areas of life would{'\n'}you like to improve?
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
				title={isChosen ? 'Next' : 'Skip'}
				onPress={onNextPress}
				disabled={!isChosen}
			/>
		</View>
	);
}

export default AreasToImprove;
