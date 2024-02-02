import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import SubscriptionCard from "./SubscriptionCard";
import { colors } from "~constants/colors";
import AppButton from "~components/@common/AppButton";

const subs = [
	{
		key: 'free',
		isTrial: true,
		trialText: '7 DAYS FREE TRIAL',
		text: '$2 Monthly subscription',
		description: 'Cancel any time!',
		buttonText: 'Start free trial',
	},
	{
		key: 'premium',
		isTrial: false,
		text: '$10 Lifetime access',
		description: 'Pay just once 😉',
		buttonText: 'Get Lifetime Access',
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
			<Text
				style={{
					width: 334,
					fontSize: 24,
					fontWeight: 'bold',
					marginTop: 20,
					marginLeft: 20,
					marginBottom: 20,
					textAlign: 'center',
				}}
			>Unlock <Text style={{
				color: colors.purple,
			}}>your inner strength with Lolo!</Text></Text>
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
					renderItem={({ item }) => {
						return(
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'flex-start',
								}}
							>
								<View style={{
									marginTop: 18,
									height: 2,
									width: 2,
									borderRadius: 1,
									backgroundColor: '#000s',
									marginLeft: 20,
								}}/>
								<Text style={{
									marginTop: 10,
									marginBottom: 0,
									marginLeft: 5,
									marginRight: 20,
								}}>{item.text}</Text>
							</View>
						);
					}}

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
			<View>
				<Text style={{
					textAlign: 'center',
				}}>
					7 days for free, then $2 billed monthly
				</Text>
			</View>
			<View>
				<AppButton
					title={subscription?.buttonText || 's'}
				/>
			</View>
		</View>
	);
}

export default Subscription;
