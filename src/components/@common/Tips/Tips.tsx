import React from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "~constants/colors";

export function Tip({
	id,
	title,
	onPress,
	isActive = false,
}: {
	id: string | number;
	title: string;
	onPress: (id: string | number) => void;
	isActive?: boolean;
}) {
	const handlePress = () => {
		onPress(id);
	};

	return (
		<Pressable
			onPress={handlePress}
			style={{
				borderRadius: 15,
				backgroundColor: isActive ? colors.background.black : "#fff",
				padding: 32,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 15,
				},
				shadowOpacity: 0.08,
				shadowRadius: 10,
				elevation: 0,
			}}
		>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					fontWeight: "400",
					color: isActive ? "#fff" : colors.text.black,
				}}
			>{title}</Text>
		</Pressable>
	);
}

function Tips({
	tips,
	onTipPress,
	style,
	gap = 20,
}: {
	tips: {
		id: string | number;
		title: string;
		isActive?: boolean;
	}[];
	onTipPress: (id: string | number) => void;
	style?: any;
	gap?: number;
}) {
	const handleTipPress = (id: string | number) => {
		onTipPress(id);
	};

	return (
		<View
			style={{ ...style, gap }}
		>
			{tips.map((tip) => {
				return (
					<Tip
						key={tip.id}
						id={tip.id}
						title={tip.title}
						onPress={() => handleTipPress(tip.id)}
						isActive={tip.isActive}
					/>
				);
			})}
		</View>
	);
}

export default Tips;
