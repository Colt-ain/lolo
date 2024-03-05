import React, { useRef, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import AppButton from '~components/@common/AppButton';
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';
import Carousel from 'react-native-snap-carousel';
import { colors } from '~constants/colors';
import { KeenSliderNativeInstance, useKeenSliderNative } from "keen-slider/react-native";
import { useDispatch } from 'react-redux';
import { setAvatar } from "~slices/onboarding";
import notificationExample from "../../../content/notificationExamples";

const { width: viewportWidth, height } = Dimensions.get('window');

const styles = {
	slider: {
		overflow: 'hidden',
	},
	slide: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	},
	text: {
		color: 'white',
		fontSize: 30,
	},
};

const carouselItems = [
	{
		title: 'Item 1',
		text: 'Text 1',
		imagePath: require('../../../assets/img/avatars/av-1.png'),
	},
	{
		title: 'Item 2',
		text: 'Text 2',
		imagePath: require('../../../assets/img/avatars/av-2.png'),
	},
	{
		title: 'Item 3',
		text: 'Text 3',
		imagePath: require('../../../assets/img/avatars/av-3.png'),
	},
	{
		title: 'Item 4',
		text: 'Text 4',
		imagePath: require('../../../assets/img/avatars/av-4.png'),
	},
	{
		title: 'Item 5',
		text: 'Text 5',
		imagePath: require('../../../assets/img/avatars/av-5.png'),
	},
];

function ChooseLolo({ navigation }: { navigation: any }) {
	const dispatch = useDispatch();

	const padding = 25;
	const carouselItemWidth = viewportWidth - padding * 2 - 14;

	const carouselWidth = carouselItemWidth * 2;
	const carouselHeight = carouselItemWidth * 0.9;

	const slider = useKeenSliderNative({
		mode: 'snap',
		slides: {
			number: carouselItems.length,
			origin: 'center',
			perView: 2,
			spacing: 20,
		},
		initial: 0,
		slideChanged(s: KeenSliderNativeInstance) {
			setState({ ...state, activeIndex: s.track.details.abs });
		},
	});

	const onNextPress = () => {
		if (carouselItems[state.activeIndex]) {
			dispatch(setAvatar({ avatar: carouselItems[state.activeIndex]! }));

			navigation.navigate(onboardingRouteNames.notifivationExpamples);
		}
	};

	const [state, setState] = useState({
		activeIndex: 0,
		carouselItems: [
			{
				title: 'Item 1',
				text: 'Text 1',
				imagePath: require('../../../assets/img/avatars/av-1.png'),
			},
			{
				title: 'Item 2',
				text: 'Text 2',
				imagePath: require('../../../assets/img/avatars/av-2.png'),
			},
			{
				title: 'Item 3',
				text: 'Text 3',
				imagePath: require('../../../assets/img/avatars/av-3.png'),
			},
			{
				title: 'Item 4',
				text: 'Text 4',
				imagePath: require('../../../assets/img/avatars/av-4.png'),
			},
			{
				title: 'Item 5',
				text: 'Text 5',
				imagePath: require('../../../assets/img/avatars/av-5.png'),
			},
		],
	});

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-between',
				backgroundColor: colors.background.white,
				overflow: 'hidden',
			}}
		>
			<View
					style={{
						marginTop: 30,
					}}
			>
				<Text
					style={{
						fontFamily: 'Montserrat',
						fontSize: 22,
						fontWeight: '600',
						lineHeight: 32,
						textAlign: 'center',
						marginLeft: 25,
						marginRight: 25,
					}}
				>Meet Lolo — an avatar of <Text
					style={{
						fontFamily: 'Montserrat',
						color: colors.purple,
					}}
				>your inner loving and supportive self</Text>
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
				}}
			>
				<Text
					style={{
						fontFamily: 'Montserrat',
						fontSize: 18,
						lineHeight: 32,
						textAlign: 'center',
						alignSelf: 'center',
						marginBottom: 25,
						fontWeight: '400',
					}}
				>
					Pick the one that resonates with you
				</Text>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/*@ts-ignore*/}
				<View
					{...slider.containerProps}
					style={{
						height: carouselHeight,
						width: carouselWidth,
						marginLeft: - carouselWidth / 4 + 20 + 12,
					}}
				>
					<View
							style={{
								alignSelf: 'center',
								left: padding,
								width: carouselItemWidth + 4,
								height: carouselHeight + 14,
								marginTop: -7,
								marginLeft: -50,
								borderRadius: 15,
								borderColor: '#1BC88A',
								borderWidth: 3,
							}}
					/>
					{[...Array(carouselItems.length).keys()].map(idx => {
						return (
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								<View
										key={idx}
										{...slider.slidesProps[idx]}
										style={{
											borderRadius: 10,
											overflow: 'hidden',
											width: carouselItemWidth,
											height: carouselItemWidth * 0.9,
										}}
								>
									<ImageBackground
										source={carouselItems[idx]?.imagePath}
										style={{
											flex: 1,
											justifyContent: 'center',
										}}
										resizeMode='cover'
									/>
								</View>
						);
					})}
				</View>
				<View
					style={{
						width: '100%',
						height: 100,
						marginTop: 27,
					}}
				>
					<View
							style={{
								flexDirection: 'row',
								backgroundColor: colors.background.white,
								borderRadius: 15,
								shadowColor: '#000',
								shadowOffset: {
									width: 2,
									height: 4,
								},
								shadowOpacity: 0.08,
								shadowRadius: 6,
								elevation: 0,
								marginLeft: padding,
								marginRight: padding,
								padding: 16,
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
									source={state.carouselItems[state.activeIndex]?.imagePath}
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
								{notificationExample[state.activeIndex]?.text}
							</Text>
						</View>
					</View>
				</View>
			</View>

			<AppButton
				style={{
					marginLeft: padding,
					marginRight: padding,
					marginBottom: 40,
					width: 250,
					alignSelf: 'center',
				}}
				title={'Pick this Lolo'}
				onPress={onNextPress}
			/>
		</View>
	);
}

export default ChooseLolo;
