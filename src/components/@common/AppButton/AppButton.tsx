
import React, { JSX, useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "~store/store";
import { setOnboarding } from "~slices/onboarding";
import { getOnboarding } from "~store/selectors";
import { mmkvStorage } from "../../../localStorage/mmkvStorage";
import { colors } from "~constants/colors";

type Props = {
	title: string;
	onPress?: () => void;
	disabled?: boolean;
};

export default function AppButton({
	onPress,
	title,
	disabled,
}: Props): JSX.Element {
	const [isPressed, setIsPressed] = useState(false);

	const handlePress = () => {
		if (onPress) onPress();
	};

	const onPressIn = () => {
		setIsPressed(true);
	};

	const onPressOut = () => {
		setIsPressed(false);
	}

	return (
		<Pressable
			onPress={handlePress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			style={{
				backgroundColor: disabled ? colors.background.disable : colors.background.black,
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 46,
				paddingVertical: 18,
				borderRadius: 18,
			}}
		>
			<Text
				style={{
					fontSize: 18,
					color: disabled
						? colors.text.black
						: isPressed
							? colors.text.pressed
							: colors.text.white,
					opacity: disabled ? 0.5 : 1,
				}}
			>
				{title}
			</Text>
		</Pressable>
	);
}
