import React from 'react';
import { ArrowBack } from '~assets/icons/index';
import { NavigationType } from "../../../interfaces";
import { Pressable } from "react-native";

export interface BackButtonProps {
	title?: string;
	navigation?: NavigationType;
	isBackButton: boolean;
	onPress?: () => void;
}

export default BackButton;

function BackButton({ navigation, title, isBackButton, onPress }: BackButtonProps) {
	const goBack = (): void => {
		if (navigation) navigation.goBack();
		else if (onPress) onPress();
	};

	return (
		<Pressable
			onPress={goBack}
			style={{
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<ArrowBack/>
		</Pressable>
	);
}
