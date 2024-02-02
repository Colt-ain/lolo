import React from "react";
import { colors } from "~constants/colors";
import { Pressable, Text, View } from "react-native";
import TickIcon from "~components/@common/Icons/TickIcon";

function SubscriptionCard({
	                          onClick,
	                          subscription,
	                          isTrial,
	                          isActive,
                          }: {
	onClick: (sub: string) => void;
	subscription: {
		key: string;
		isTrial?: boolean;
		trialText?: string;
		text: string;
		description: string;
	};
	isTrial?: boolean;
	isActive?: boolean;
}) {
	const handleClick = () => {
		onClick(subscription.key);
	};

	return (
		<Pressable
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				height: 120,
				padding: 20,
				marginTop: 20,
				marginBottom: 20,
				marginLeft: 20,
				marginRight: 20,
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
			onPress={handleClick}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View
					style={{
						flexDirection: "column",
						justifyContent: "space-between",
						marginTop: 10,
					}}
				>
					{isTrial && <View
						style={{
							padding: 4,
							width: 140,
							backgroundColor: '#FCF3E0',
							borderRadius: 4,
							marginBottom: 8,
						}}
					>
						<Text
							style={{
								fontWeight: '400',
								color: '#C53E13',
							}}
						>
							{subscription.trialText}
						</Text>
					</View>
					}
					<Text
						style={{
							fontWeight: '500',
						}}
					>{subscription.text}</Text>
					<Text style={{
						color: '#5B5F5E',
						fontWeight: '300',
					}}>{subscription.description}</Text>
				</View>

				{isActive
					? <View
						style={{
							width: 32,
							height: 32,
							flexDirection: "column",
							justifyContent: "center",
							alignSelf: "center",
							borderRadius: 16,
							backgroundColor: colors.purple,
							paddingLeft: 7,
						}}
					>
						<TickIcon />
					</View>
					: <View
						style={{
							width: 32,
							height: 32,
							flexDirection: "column",
							justifyContent: "center",
							alignSelf: "center",
							borderRadius: 16,
							borderWidth: 1,
							borderColor: "#1C1F1E",
							opacity: 0.35,
						}}
					></View>
				}
			</View>
		</Pressable>
	);
}

export default SubscriptionCard;
