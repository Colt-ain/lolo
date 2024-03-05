import React, { useState } from 'react';
import { ArrowBack } from '~assets/icons/index';
import { NavigationType } from '../../../interfaces';
import { Pressable } from 'react-native';

export interface BackButtonProps {
	title?: string;
	navigation?: NavigationType;
	isBackButton: boolean;
	onPress?: () => void;
}

export default BackButton;

function BackButton({ navigation, title, isBackButton, onPress }: BackButtonProps) {
	const [isTouch, setIsTouch] = useState(false);

	const goBack = (): void => {
		if (navigation) navigation.goBack();
		else if (onPress) onPress();
	};

	const onTouchStart = (): void => {
		setIsTouch(true);
		console.log('touch start');
	};

	const onTouchEnd = (): void => {
		setIsTouch(false);
		console.log('touch end');
	};

	return (
		<Pressable
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			onPress={goBack}
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				opacity: isTouch ? 0.5 : 1,
				padding: 10,
				paddingLeft: 0,
			}}
		>
			<ArrowBack isTouch={isTouch}/>
		</Pressable>
	);
}
