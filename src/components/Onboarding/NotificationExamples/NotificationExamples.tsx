import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import notificationExamples from '../../../content/notificationExamples';
import { colors } from '~constants/colors';
import AppButton from '~components/@common/AppButton';
import LinearGradient from 'react-native-linear-gradient'
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { onboardingRouteNames } from "~routes/onboarding/onboardingRouteNames";
import { RootState } from "~store/store";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'column',
		paddingBottom: 40,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
});

function NotificationExamples({ navigation }: { navigation: any }) {
	const avatar = useSelector((state: RootState) => state.onboarding.avatar);

	const intervalId = useRef<TimeoutId>();

	const scrollView = useRef<ScrollView | null>(null);
	const scrollTopY = useRef<number>(0);

	const [isStoppedAnimation, setIsStoppedAnimation] = useState(false);

	useEffect(() => {
		intervalId.current = setInterval(() => {
			if (isStoppedAnimation) return;

			scrollView.current?.scrollTo({
				y: scrollTopY.current + 1,
			});
			scrollTopY.current = scrollTopY.current + 1;
		}, 50);

		return () => {
			clearInterval(intervalId.current);
		};
	}, []);

	const stopAnimation = () => {
		setIsStoppedAnimation(true);
		clearInterval(intervalId.current);
	};

	const handleNext = () => {
		navigation.navigate(onboardingRouteNames.youWillStartWith);
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-between',
				backgroundColor: colors.background.white,
			}}
		>
			<Text
					style={{
						fontFamily: 'Montserrat',
						fontSize: 22,
						fontWeight: '600',
						textAlign: 'center',
						marginBottom: 10,
					}}
			>Wonderful choice 💫</Text>
			<Text
				style={{
					fontFamily: 'Montserrat',
					paddingHorizontal: 32,
					fontSize: 22,
					fontWeight: '600',
					lineHeight: 32,
					textAlign: 'center',
					marginBottom: 30,
				}}
			>
				Your Lolo will send you wise{'\n'}<Text
					style={{
						color: colors.purple,
					}}
				>affirmations</Text> throughout the{'\n'}day, that will cultivate your{'\n'}inner strength.
			</Text>
			<ScrollView
				ref={ref => scrollView.current = ref}
				scrollEnabled={true}
				style={{
					paddingHorizontal: 32,
					marginBottom: 0,
					paddingBottom: 100,
				}}
			>
				{notificationExamples.map((example: { id: string; text: string }) => {
					return (
						<View
							key={example.id}
							style={{
								flexDirection: 'row',
								padding: 16,
								marginBottom: 20,
								backgroundColor: colors.background.white,
								borderRadius: 15,
								shadowColor: "#000",
								shadowOffset: {
									width: 2,
									height: 4,
								},
								shadowOpacity: 0.08,
								shadowRadius: 6,
								elevation: 0,
							}}
						>
							<View
								style={{
									width: 44,
									height: 44,
									borderRadius: 12,
									overflow: 'hidden',
								}}
							>
								<ImageBackground
									source={avatar?.imagePath || require('~assets/img/ob-2.png')}
									style={{
										width: '100%',
										height: '100%',
									}}
									resizeMode='cover'
								/>
							</View>
							<View
								style={{
									flex: 1,
									marginLeft: 10,
									flexDirection: 'column',
								}}
							>
								<Text
									style={{
										fontFamily: 'Montserrat',
										fontSize: 15,
										letterSpacing: -0.5,
										fontWeight: '600',
										lineHeight: 20,
									}}
								>
									Lolo
								</Text>
								<Text
									style={{
										fontFamily: 'Montserrat',
										fontSize: 15,
										letterSpacing: -0.5,
										fontWeight: '400',
										lineHeight: 20,
									}}
								>
									{example.text}
								</Text>
							</View>
						</View>
					);
				})}
				<View style={{ height: 130 }}/>
			</ScrollView>
			{!isStoppedAnimation && <Pressable
				onPressIn={stopAnimation}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: '80%',
				}}
			/>
			}
			<View
				style={{
					height: 150,
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
				}}
			>
				<LinearGradient
					style={styles.linearGradient}
					colors={['#F4F6F5', 'rgba(244, 246, 245, 0)']}
					start={{ x: 0, y: 0.65 }}
					end={{ x: 0, y: 0.0 }}
				>
					<AppButton
						title='Continue'
						style={{
							paddingLeft: 46,
							paddingRight: 46,
						}}
						onPress={handleNext}
					/>
				</LinearGradient>
			</View>
		</View>
	);
}

export default NotificationExamples;
