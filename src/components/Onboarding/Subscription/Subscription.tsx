import React, { useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import TickIcon from "~components/@common/Icons/TickIcon";
import { colors } from "~constants/colors";
import SubscriptionCard from "./SubscriptionCard";

const subs = [
	{
		key: 'free',
		isTrial: true,
		trialText: '7 DAYS FREE TRIAL',
		text: '$2 Monthly subscription',
		description: 'Cancel any time!',
	},
	{
		key: 'premium',
		isTrial: false,
		text: '$2 Monthly subscription',
		description: 'Cancel any time!',
	},
];

function Subscription() {
	const [subscription, setSubscription] = useState(subs[0]);

	const handleChangeSubscription = (sub: string) => {
		console.log(sub);
		setSubscription(subs.find((s) => s.key === sub));
	}

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<Text>Unlock your inner strength with Lolo!</Text>
			<View>
				<FlatList
					data={[
						{
							key: '1',
							text: 'Special affirmations program, carefully designed in collaboration with psychologists 👍'
						},
						{ key: '2', text: 'Tailored support throughout the whole day 🙏' },
						{ key: '3', text: 'Unlimited affirmations 🔥' },
					]}
					renderItem={({ item }) => (
						<Text style={{}}>{item.text}</Text>
					)}
				/>
			</View>
			<View>
				<FlatList
					data={subs}
					renderItem={({ item }) => {
						return (
							<SubscriptionCard
								onClick={handleChangeSubscription}
								subscription={item}
								isTrial={item.isTrial}
								isActive={subscription?.key === item.key}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

export default Subscription;
