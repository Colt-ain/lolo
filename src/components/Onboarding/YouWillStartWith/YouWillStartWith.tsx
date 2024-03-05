import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Easing, ImageBackground, Text, View } from "react-native";
import { colors } from "~constants/colors";
import AppButton from "~components/@common/AppButton";
import { onboardingRouteNames } from "~routes/onboarding/onboardingRouteNames";

const texts = [
	{
		color: colors.text.lightBlue,
		text: 'to believe\n in your\n strength'
	},
	{
		color: colors.text.lightPurple,
		text: 'to love\n and accept\n yourself',
	},
	{
		color: colors.text.grayBrown,
		text: 'to take\n care of\n yourself',
	},
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const initialTimeout = 3000;
const fadeTime = 300;
const timeoutTime = 3000;
const moveTimeBelow = 400;
const moveTimeAbove = 500;
const imageBottom = viewportHeight / 2 - 50;


function YouWillStartWith({ navigation }: { navigation: any }) {
	const [isFadeAnimEnded, setIsFadeAnimEnded] = useState(false);
	const [activeText, setActiveText] = useState<number>(0);

	const activeTextRef = useRef<number>(0);

	// const [isAnimationFinished, setIsAnimationFinished] = useState(false);
	const [isLastTextShown, setIsLastTextShown] = useState(false);

	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeAnimTranslate = useRef(new Animated.Value(10)).current;

	const fadeAnimNext = useRef(new Animated.Value(0)).current;
	const fadeAnimNextTranslate = useRef(new Animated.Value(10)).current;

	const fadeAnimTitle = useRef(new Animated.Value(1)).current;
	const translateAnimation = useRef(new Animated.Value(140)).current;
	const fadeAnimBottomContent = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (activeTextRef.current > texts.length - 1) {
			setIsFadeAnimEnded(true);
		}
	}, [activeText]);

	const fadeOut = () => {
		if (isFadeAnimEnded) {
			return;
		}

		console.log('fade out');

		Animated.timing(fadeAnimTranslate, {
			toValue: 10,
			duration: fadeTime,
			useNativeDriver: true,
		}).start()

		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: fadeTime,
			useNativeDriver: true,
		}).start();

		if (activeText === undefined || activeTextRef.current > texts.length - 1) {
			return;
		}

		const timer = setTimeout(() => {
			if (activeTextRef.current > texts.length - 1) {
				clearTimeout(timer);

				return;
			}

			activeTextRef.current = activeTextRef.current + 1;

			fadeIn();

			clearTimeout(timer);
		}, fadeTime);
	};

	const fadeIn = () => {
		if (isFadeAnimEnded) {
			return;
		}

		console.log('fade in');

		Animated.timing(fadeAnimTranslate, {
			toValue: 0,
			duration: fadeTime,
			useNativeDriver: true,
		}).start()

		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: fadeTime,
			useNativeDriver: true,
		}).start();

		const timer = setTimeout(() => {
			fadeOut();

			clearTimeout(timer);
		}, timeoutTime);

		if (activeText !== undefined && activeText > texts.length - 1) {
			clearTimeout(timer);
		}
	};

	const fadeOutTitle = () => {
		console.log('fade out title');

		Animated.timing(fadeAnimTitle, {
			toValue: 0,
			duration: fadeTime,
			useNativeDriver: true,
		}).start();
	};

	const moveImageBelow = () => {
		console.log('move below');

		Animated.timing(translateAnimation, {
			toValue: imageBottom,
			duration: moveTimeBelow,
			useNativeDriver: true,
			easing: Easing.bezier(0, 1, 1, 1),
		}).start();
	};

	const moveImageAbove = () => {
		console.log('move above');

		Animated.timing(translateAnimation, {
			toValue: 30,
			duration: moveTimeAbove,
			useNativeDriver: true,
			easing: Easing.bezier(0, 1, 1, 1),
		}).start();
	}

	const fadeInBottomContent = () => {
		console.log('fade in bottom content');

		Animated.timing(fadeAnimBottomContent, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			fadeIn();

			clearTimeout(timeout);
		}, initialTimeout);

		return () => {
			clearTimeout(timeout);
		}
	}, []);

	const handleNext = () => {
		navigation.navigate(onboardingRouteNames.notificationExplain);
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setActiveText((prevActiveText) => {
				if (prevActiveText > texts.length - 1) {
					clearInterval(timeout);

					return prevActiveText;
				}

				return prevActiveText + 1;
			});
		}, initialTimeout * 2 + fadeTime);

		return () => {
			clearInterval(timeout);
		}
	}, []);

	useEffect(() => {
		if (activeText === 0) return;

		const interval = setInterval(() => {
			setActiveText((prevActiveText) => {
				if (prevActiveText > texts.length - 1) {
					clearInterval(interval);

					return prevActiveText;
				}

				return prevActiveText + 1;
			});

			return () => {
				clearInterval(interval);
			};
		}, timeoutTime + fadeTime);
	}, [activeText]);

	useEffect(() => {
		const timer = setTimeout(() => {
			moveImageBelow()
		}, initialTimeout);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			moveImageAbove();
		}, initialTimeout + timeoutTime * 3 + fadeTime * 3);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			fadeOutTitle();
		}, initialTimeout + timeoutTime * 3 + fadeTime * 3);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLastTextShown(true);

			fadeInBottomContent();
		}, initialTimeout + timeoutTime * 3 + fadeTime * 3);

		return () => clearTimeout(timer);
	}, []);

	console.log(fadeAnimTranslate);

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 32,
				justifyContent: isLastTextShown ? 'space-between' : 'flex-start',
				paddingBottom: '8%',
				backgroundColor: colors.background.white,
			}}
		>
			<Animated.View
				style={[
					{
						opacity: fadeAnimTitle,
					},
				]}
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
					As you read and internalize <Text
					style={{
						fontFamily: 'Montserrat',
						fontSize: 22,
						fontWeight: '600',
						lineHeight: 32,
						textAlign: 'center',
						color: colors.purple,
					}}
				>Lolo’s affirmations</Text>, you will start...
				</Text>
			</Animated.View>
			<Animated.View
				style={[
					{
						opacity: fadeAnim,
						transform: [
							{
								translateY: fadeAnimTranslate,
							},
						],
					},
				]}
			>
				<Text
					style={{
						fontFamily: 'Montserrat',
						fontSize: 51,
						lineHeight: 58,
						fontWeight: '600',
						textAlign: 'center',
						color: activeText !== undefined ? texts[activeText]?.color : colors.text.greenBlue,
						marginTop: 40,
					}}
				>
					{activeText !== undefined && texts[activeText]?.text}
				</Text>
			</Animated.View>
			<Animated.View
				style={[
					{
						position: 'absolute',
						transform: [
							{
								translateX: viewportWidth / 2 - 100,
							},
							{
								translateY: translateAnimation,
							},
						],
					},
				]}
			>
				<View
					style={{
						height: 200,
						width: 200,
						alignSelf: 'center',
					}}
				>
					<ImageBackground
						source={require('~assets/img/flowers.png')}
						resizeMode='cover'
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 100,
							overflow: 'hidden',
						}}
					/>
				</View>
			</Animated.View>
			<Animated.View
				style={[
					{
						opacity: fadeAnimBottomContent,
					},
					{
						marginBottom: '5%',
					},
				]}
			>
				<Text
					style={{
						fontFamily: 'Montserrat',
						fontSize: 51,
						lineHeight: 58,
						fontWeight: '600',
						textAlign: 'center',
						color: colors.text.greenBlue,
					}}
				>
					And see the bright side of things{'\n'}
					<Text
						style={{
							fontFamily: 'Montserrat',
							fontSize: 22,
							fontWeight: '600',
							lineHeight: 32,
							textAlign: 'center',
						}}
					>while staying realistic!</Text>
				</Text>
			</Animated.View>
			<Animated.View
				style={[
					{
						opacity: fadeAnimBottomContent,
					},
				]}
			>
				<AppButton
					title='Continue'
					style={{
						width: 180,
						alignSelf: 'center',
						paddingLeft: 46,
						paddingRight: 46,
					}}
					onPress={handleNext}
				/>
			</Animated.View>
		</View>
	);
}

export default YouWillStartWith;
