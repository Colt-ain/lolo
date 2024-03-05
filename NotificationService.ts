import PushNotification from 'react-native-push-notification';

class NotificationService {
	constructor() {
		console.log('NotificationService constructor');

		PushNotification.configure({
			onRegister: function (token) {
				console.log('TOKEN:', token);
			},
			onNotification: function (notification) {
				console.log('NOTIFICATION:', notification);
			},
			permissions: {
				alert: true,
				badge: true,
				sound: true,
			},
			popInitialNotification: true,
			requestPermissions: true,
		});

		PushNotification.createChannel(
			{
				channelId: 'channel-id',
				channelName: 'My channel',
				channelDescription: 'Affirmation channel',
				playSound: true,
				soundName: 'default',
				importance: 4,
				vibrate: true,
			},
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				() => {},
		);

		PushNotification.getScheduledLocalNotifications((notifications) => {
			console.log(notifications);
		});
	}

	scheduleNotification({ message, date }: { message: string; date: number }) {
		PushNotification.localNotificationSchedule({
			message,
			// title: '🔔 Reminder!',
			date: new Date(date),
			channelId: 'channel-id',
		});
	}

	cancelAllNotifications() {
		PushNotification.cancelAllLocalNotifications();
	}
}

export default new NotificationService();
