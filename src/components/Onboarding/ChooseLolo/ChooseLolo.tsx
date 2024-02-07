import React, { useRef, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import {Dimensions} from 'react-native';
import AppButton from '~components/@common/AppButton';
import { onboardingRouteNames } from '~routes/onboarding/onboardingRouteNames';
import Carousel from "react-native-snap-carousel";
import { colors } from "~constants/colors";

const { width: viewportWidth, height } = Dimensions.get('window');

function ChooseLolo({ navigation }: { navigation: any }) {
	const carouselContainerRef = useRef(null);
	const carouselRef = useRef(null);

	const onNextPress = () => {
		navigation.navigate(onboardingRouteNames.notifivationExpamples);
	};

	const [state, setState] = useState({
		activeIndex: 1,
		carouselItems: [
			{
				title:"Item 1",
				text: "Text 1",
				imagePath: require('../../../assets/img/avatars/av-1.png'),
			},
			{
				title:"Item 2",
				text: "Text 2",
				imagePath: require('../../../assets/img/avatars/av-2.png'),
			},
			{
				title:"Item 3",
				text: "Text 3",
				imagePath: require('../../../assets/img/avatars/av-3.png'),
			},
			{
				title:"Item 4",
				text: "Text 4",
				imagePath: require('../../../assets/img/avatars/av-4.png'),
			},
			{
				title:"Item 5",
				text: "Text 5",
				imagePath: require('../../../assets/img/avatars/av-5.png'),
			},
		]
	});

	const padding = 25;
	const carouselItemWidth = viewportWidth - padding * 2 - 14;
	const carouselHeight = viewportWidth - padding * 2;

	const _renderItem = ({ item, index }: { item: { title: string; text: string, imagePath: number, }; index: number }) => {
		const isActive = state.activeIndex === index;

		return (
			<View
				key={index+item.title}
				style={{
					backgroundColor:'floralwhite',
					borderRadius: 15,
					// overflow: 'hidden',
				}}>
				<Image
					source={item.imagePath}
					style={{
						width: carouselItemWidth,
						height: carouselItemWidth,
						borderRadius: 10,
						overflow: 'hidden',
					}}
				/>
			</View>

		)
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-between',
				backgroundColor: colors.background.white,
			}}
		>
			<View
			>
				<Text
					style={{
						fontSize: 22,
						fontWeight: '600',
						lineHeight: 32,
						textAlign: 'center',
						marginLeft: 25,
						marginRight: 25,
					}}
				>Meet Lolo — an avatar of <Text
					style={{
						color: colors.purple,
					}}
				>your inner loving and supportive self</Text>
				</Text>
			</View>
			<View>
				<Text
					style={{
						fontSize: 18,
						fontWeight: '300',
						lineHeight: 32,
						textAlign: 'center',
						marginBottom: 20,
					}}
				>
					Pick the one that resonates with you
				</Text>
				<View ref={carouselContainerRef}>
					<View
						style={{
							position: 'absolute',
							top: -7,
							left: padding,
							width: carouselHeight,
							height: carouselHeight,
							borderRadius: 15,
							borderColor: '#1BC88A',
							borderWidth: 3,
						}}
					/>
					<Carousel
						ref={carouselRef}
						data={state.carouselItems}
						renderItem={_renderItem}
						sliderWidth={viewportWidth}
						itemWidth={carouselItemWidth}
						onSnapToItem = { index => setState((prevState) => ({
							...prevState,
							activeIndex: index,
						}))}
						onBeforeSnapToItem={() => {
							console.log('snap');
						}}
						inactiveSlideOpacity={1}
						firstItem={state.activeIndex}
						inactiveSlideScale={1}
						layout={'default'}
					/>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					padding: 16,
					marginTop: 20,
					marginLeft: padding,
					marginRight: padding,
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
							fontSize: 15,
							letterSpacing: -0.5,
							fontWeight: '300',
							lineHeight: 20,
						}}
					>
						I am me, and that is my strength
					</Text>
				</View>
			</View>
			<AppButton
				style={{
					marginLeft: padding,
					marginRight: padding,
					marginBottom: 25,
				}}
				title={'Pick this Lolo'}
				onPress={onNextPress}
			/>
		</View>
	);
}

export default ChooseLolo;
