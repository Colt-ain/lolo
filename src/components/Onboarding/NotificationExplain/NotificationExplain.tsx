import React, { useEffect, useRef, useState } from 'react';
import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from '~constants/colors';
import AppButton from '~components/@common/AppButton';
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background.white,
		paddingHorizontal: 30,
		paddingBottom: 60,
	},
});

const fadeTime = 500;
const showingInterval = 1000;

function NotificationExplain({ navigation }: { navigation: any }) {
	const [_, setCount] = useState(0);

	const fadeAnim1 = useRef(new Animated.Value(0)).current;
	const fadeAnim2 = useRef(new Animated.Value(0)).current;
	const fadeAnim3 = useRef(new Animated.Value(0)).current;
	const fadeAnim4 = useRef(new Animated.Value(0)).current;

	const fadeAnimTranslate1 = useRef(new Animated.Value(70)).current;
	const fadeAnimTranslate2 = useRef(new Animated.Value(70)).current;
	const fadeAnimTranslate3 = useRef(new Animated.Value(70)).current;
	const fadeAnimTranslate4 = useRef(new Animated.Value(70)).current;

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount===0) fadeIn1();
				if (prevCount===1) fadeIn2();
				if (prevCount===2) fadeIn3();
				if (prevCount===3) fadeIn4();

				return prevCount + 1;
			});
		}, showingInterval);
		return () => clearInterval(interval);
	}, []);

	const fadeIn1 = () => {
		console.log('fade in 1');

		Animated.timing(fadeAnimTranslate1, {
			toValue: 0, duration: fadeTime, useNativeDriver: true,
		}).start();
		Animated.timing(fadeAnim1, {
			toValue: 1, duration: fadeTime, useNativeDriver: true,
		}).start();
	};

	const fadeIn2 = () => {
		console.log('fade in 2');

		Animated.timing(fadeAnimTranslate2, {
			toValue: 0, duration: fadeTime, useNativeDriver: true,
		}).start();
		Animated.timing(fadeAnim2, {
			toValue: 1, duration: fadeTime, useNativeDriver: true,
		}).start();
	};

	const fadeIn3 = () => {
		console.log('fade in 3');

		Animated.timing(fadeAnimTranslate3, {
			toValue: 0, duration: fadeTime, useNativeDriver: true,
		}).start();
		Animated.timing(fadeAnim3, {
			toValue: 1, duration: fadeTime, useNativeDriver: true,
		}).start();
	};

	const fadeIn4 = () => {
		console.log('fade in 3');

		Animated.timing(fadeAnimTranslate4, {
			toValue: 0, duration: fadeTime, useNativeDriver: true,
		}).start();
		Animated.timing(fadeAnim4, {
			toValue: 1, duration: fadeTime, useNativeDriver: true,
		}).start();
	};

	return (<ScrollView
				contentContainerStyle={styles.container}
				style={{
					backgroundColor: colors.background.white,
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: '600',
						color: colors.text.black,
						textAlign: 'center',
						marginBottom: 40,
						fontFamily: 'Montserrat',
					}}
				>
					Carefully designed affirmation program provides <Text
						style={{
							fontFamily: 'Montserrat',
							color: colors.purple,
						}}
				>
					complex support throughout the day</Text>, considering life's natural ups and downs.
				</Text>
				<Animated.View
					style={{
						backgroundColor: '#DFA58A',
						borderRadius: 14,
						opacity: fadeAnim1,
						transform: [
							{
								translateY: fadeAnimTranslate1,
							},
						],
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 4,
						},
						shadowOpacity: 0.25,
						shadowRadius: 14,
						elevation: 8,
						marginBottom: 30,
						paddingHorizontal: 24,
						paddingVertical: 24,
					}}
				>
					<ImageBackground
						source={require('~assets/img/sunrise.png')}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							right: -34,
						}}
					>
					</ImageBackground>
					<Text
							style={{
								fontSize: 20,
								fontWeight: '500',
								textAlign: 'left',
								marginBottom: 10,
								color: colors.text.white,
								lineHeight: 24,
								fontFamily: 'Montserrat',
							}}
					>
						Morning
					</Text>
					<View
							style={{
								flexDirection: 'row',
								alignItems: 'flex-start',
								justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							feel positive for the day ahead;
						</Text>
					</View>
					<View
							style={{
								flexDirection: 'row',
								alignItems: 'flex-start',
								justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							believe in your powers;
						</Text>
					</View>
				</Animated.View>
				<Animated.View
						style={{
							backgroundColor: '#CAAAD8',
							borderRadius: 14,
							paddingHorizontal: 24,
							paddingVertical: 24,
							opacity: fadeAnim2,
							transform: [
								{
									translateY: fadeAnimTranslate2,
								},
							],
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 4,
							},
							shadowOpacity: 0.25,
							shadowRadius: 14,
							elevation: 8,
							marginBottom: 30,
						}}
				>
					<ImageBackground
							resizeMode='cover'
							source={require('~assets/img/sun.png')}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								bottom: 0,
								right: -35,
							}}
					>
					</ImageBackground>
					<Text
							style={{
								fontSize: 20,
								fontWeight: '500',
								textAlign: 'left',
								marginBottom: 10,
								color: colors.text.white,
								lineHeight: 24,
								fontFamily: 'Montserrat',
							}}
					>
						Day
					</Text>
					<View
							style={{
								flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							act like yourself;
						</Text>
					</View>
					<View
							style={{
								flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							stand against the challenges;
						</Text>
					</View>
					<View
							style={{
								flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							practice self care;
						</Text>
					</View>
				</Animated.View>
				<Animated.View
						style={{
							backgroundColor: '#6DB2BC',
							borderRadius: 14,
							opacity: fadeAnim3,
							transform: [
								{
									translateY: fadeAnimTranslate3,
								},
							],
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 4,
							},
							shadowOpacity: 0.25,
							shadowRadius: 14,
							elevation: 8,
							marginBottom: 40,
							paddingHorizontal: 24,
							paddingVertical: 24,
						}}
				>
					<ImageBackground
							resizeMode='cover'
							source={require('~assets/img/moon.png')}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								bottom: 0,
								right: -10,
							}}
					>
					</ImageBackground>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '500',
							textAlign: 'left',
							marginBottom: 10,
							color: colors.text.white,
							lineHeight: 24,
							fontFamily: 'Montserrat',
						}}
					>
						Evening
					</Text>
					<View
							style={{
								flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							be self compassionate;
						</Text>
					</View>
					<View
							style={{
								flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							proud for your achievements;
						</Text>
					</View>
					<View
							style={{
								flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
							}}
					>
						<Text
								style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
									color: colors.text.white,
								}}
						>• </Text>
						<Text
								style={{
									fontSize: 18,
									fontWeight: '500',
									textAlign: 'left',
									color: colors.text.white,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
						>
							feel grateful for what you{'\n'} have;
						</Text>
					</View>
				</Animated.View>
				<Animated.View
					style={{
						opacity: fadeAnim4,
						transform: [
							{
								translateY: fadeAnimTranslate4,
							},
						],
					}}
				>
					<AppButton
						title='Get my Plan'
						onPress={() => navigation.navigate(onboardingRouteNames.subscription)}
						style={{
							width: 204,
							alignSelf: 'center',
						}}
					/>
				</Animated.View>
			</ScrollView>
	);
}

export default NotificationExplain;
