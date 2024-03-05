import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import SubscriptionCard from './SubscriptionCard';
import { colors } from '~constants/colors';
import AppButton from '~components/@common/AppButton';
import * as RNIap from 'react-native-iap';

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

	useEffect(() => {
		RNIap.initConnection().then((connected) => {
			console.log('connected', connected);

			RNIap.getSubscriptions({ skus: ['com.paliakova.lolo'] }).then((res) => {
				console.log('subs', res);
			});
		}).catch((err: any) => {
			console.log('err', err);
		});
	}, []);

	const handleChangeSubscription = (sub: string) => {
		console.log(sub);
		setSubscription(subs.find((s) => s.key === sub));
	};

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<Text
				style={{
					fontFamily: 'Montserrat',
					width: 334,
					fontSize: 24,
					fontWeight: '600',
					marginTop: 10,
					marginLeft: 20,
					marginBottom: 20,
					textAlign: 'center',
				}}
			>Unlock <Text style={{
				color: colors.purple,
			}}>your inner power with Lolo!</Text></Text>
			<View
					style={{
						marginHorizontal: 27,
						marginBottom: 10,
					}}
			>
				<FlatList
					data={[
						{
							key: '1',
							text: 'Special affirmations program, carefully designed in collaboration with psychologists 👍',
						},
						{ key: '2', text: 'Tailored support throughout the whole day 🙏' },
						{ key: '3', text: 'Unlimited affirmations 🔥' },
					]}
					scrollEnabled={false}
					renderItem={({ item }) => {
						return (
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'flex-start',
									justifyContent: 'flex-start',
									marginTop: 10,
								}}
							>
								<Text
										style={{
											fontFamily: 'Montserrat',
											fontSize: 18,
											fontWeight: '400',
										}}
								>• </Text>
								<Text style={{
									fontFamily: 'Montserrat',
									fontSize: 18,
									fontWeight: '400',
								}}>{item.text}</Text>
							</View>
						);
					}}
				/>
			</View>
			<View>
				{
					subs.map((item) => {
						return (
							<SubscriptionCard
								key={item.key}
								onClick={handleChangeSubscription}
								subscription={item}
								isTrial={item.isTrial}
								isActive={subscription?.key === item.key}
							/>
						);
					})
				}
			</View>
			<View>
				<Text style={{
					textAlign: 'center',
					marginTop: 30,
					marginBottom: 18,
				}}>
					7 days for free, then $2 billed monthly
				</Text>
			</View>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<AppButton
					title={subscription?.buttonText || ''}
				/>
			</View>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 20,
			}}>
				<Text>Terms of Service   </Text>
				<Text>Privacy Policy</Text>
			</View>
		</View>
	);
}

export default Subscription;
