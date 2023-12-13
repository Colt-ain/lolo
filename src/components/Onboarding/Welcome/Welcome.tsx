import React from "react";
import { ImageBackground, Text, useColorScheme, View } from "react-native";
import { colors } from "~constants/colors";
import AppButton from "~components/@common/AppButton";
import { useAppDispatch, useAppSelector } from "~store/store";
import { getAuth } from "~store/selectors";
import { setIsAuth } from "~slices/auth";
import { onboardingRouteNames } from "~routes/onboarding/onboardingRouteNames";

function Welcome({ navigation }: any) {
	const { isAuth } = useAppSelector(getAuth);
	const dispatch = useAppDispatch();


	const isDarkMode = useColorScheme() === "dark";

	const handleLogin = () => {
		console.log('handleLogin');
		dispatch(setIsAuth({ isAuth: !isAuth }));

		navigation.navigate(onboardingRouteNames.areasToImprove);
	}

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "space-around",
				backgroundColor: colors.background.white,
			}}
		>
			<View
				style={{
					width: 160,
					height: 160,
					borderRadius: 80,
					overflow: 'hidden',
				}}
			>
				<ImageBackground
					source={require('~assets/img/ob-1.png')}
					style={{
						width: 500,
						height: 500,
						position: 'absolute',
						top: -195,
						left: -110,
					}}
					resizeMode='contain'
				/>
			</View>
			<Text
				style={{
					lineHeight: 32,
					textAlign: 'center',
					fontWeight: '500',
					fontFamily: "Montserrat",
				}}
			>
				<Text
					style={{
						fontSize: 28,
						color: colors.text.black,
					}}
				>Welcome to Lolo{"\n\n"}</Text>
				<Text
					style={{
						fontSize: 24,
						color: colors.text.black,
						fontWeight: '500',
					}}
				>
					A space of love and support,{"\n"} designed to help you{"\n"}<Text
					style={{ color: colors.purple }}>
					discover your inner strength{"\n"}
				</Text> with daily affirmations.
				</Text>
			</Text>
			<AppButton title={'Let\'s Start'} onPress={handleLogin}/>
		</View>
	)
}

export default Welcome;
