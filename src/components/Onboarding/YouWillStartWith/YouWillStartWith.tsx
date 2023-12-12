import React, { useEffect, useRef, useState } from "react";
import { Animated, ImageBackground, Text, View } from "react-native";
import { colors } from "~constants/colors";
import AppButton from "~components/@common/AppButton";

const texts = ['to believe in your strength', 'to love and accept  yourself', 'to take care of yourself'];

function YouWillStartWith() {
	const [isMovedImage, setIsMovedImage] = useState(false);
	const [activeText, setActiveText] = useState<number>();
	const [isAnimationFinished, setIsAnimationFinished] = useState(false);
	const [isLastTextShown, setIsLastTextShown] = useState(false);

	const fadeAnim = useRef(new Animated.Value(0)).current;

	const hideText = () => {
		fadeOut();

		const timer = setTimeout(() => {
			showText();

			clearTimeout(timer);
		}, 1000);
	};

	const showText = () => {
		fadeIn();
		setActiveText(activeText === undefined ? 0 : activeText + 1);

		const stimer = setTimeout(() => {
			hideText();

			clearTimeout(stimer);
		}, 4000);
	};

	useEffect(() => {
		setTimeout(() => {
			showText();
		}, 1000);
	}, []);

	const handleNext = () => {
		console.log('next');
	}
	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View
			style={{
				paddingHorizontal: 32,
				justifyContent: 'space-between',
				paddingBottom: '8%',
			}}
		>
			{!isAnimationFinished && (
				<Text
					style={{
						fontSize: 22,
						fontWeight: '600',
						lineHeight: 32,
						textAlign: 'center',
					}}
				>
					As you read and internalize <Text
					style={{
						fontSize: 22,
						fontWeight: '600',
						lineHeight: 32,
						textAlign: 'center',
						color: colors.purple,
					}}
				>Lolo’s affirmations</Text>, you will start...
				</Text>
			)}
			{activeText !== undefined && (
				<Animated.View
					style={[
						{
							// Bind opacity to animated value
							opacity: fadeAnim,
						},
					]}
				>
					<Text
						style={{
							fontSize: 51,
							lineHeight: 58,
							fontWeight: '600',
							textAlign: 'center',
							color: colors.purple,
						}}
					>
						{texts[activeText]}
					</Text>
				</Animated.View>
			)}
			<Animated.View>
				<View
					style={{
						height: 200,
						width: 200,
						alignSelf: 'center',
						marginTop: isAnimationFinished ? 0 : 32,
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
			{isLastTextShown && (
				<>
					<Text
						style={{
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
								fontSize: 22,
								fontWeight: '600',
								lineHeight: 32,
								textAlign: 'center',
							}}
							>while staying realistic!</Text>
					</Text>
					<AppButton
						title='Continue'
						style={{
							paddingLeft: 46,
							paddingRight: 46,
						}}
						onPress={handleNext}
					/>
				</>
			)
			}
		</View>
	);
}

export default YouWillStartWith;
