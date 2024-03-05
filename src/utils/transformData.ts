import { format } from 'date-fns';

export interface Affirmation {
	text: string;
	time: string;
	emoji: string;
}

export interface NotificationInterface {
	message: string;
	date: number;
}

const times = [9, 12, 15, 18, 21];

export function shuffleArray<T>(array: T[]): T[] {
	// Create a copy of the original array to avoid modifying the original array
	const newArray = [...array];

	// Fisher-Yates (Knuth) Shuffle algorithm
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}

	return newArray;
}

export function transformData(affirmations: Affirmation[]): NotificationInterface[] {
	const outputData: {message: string; date: number}[] = [];

	const messageTracker: Record<string, boolean> = {};
	const daysTracker: Record<string, boolean> = {};

	const dateNow = Date.now();
	const daysCount = 60;
	const days = Array.from({ length: daysCount }, (_, i) => {
		const date = new Date(dateNow);
		date.setDate(date.getDate() + i);

		return format(date, 'yyyy-MM-dd');
	});

	const shuffledAffirmations = shuffleArray(affirmations);

	console.log(days);

	for (const day of days) {
		const dayAffirmations = [];

		while (dayAffirmations.length < 5) {
			const randomAffirmation = shuffledAffirmations[Math.floor(Math.random() * shuffledAffirmations.length)];

			const isInUse = outputData.some((item) => {
				return item.message===randomAffirmation?.text;
			});

			if (!isInUse) {
				dayAffirmations.push(randomAffirmation);
			}
		}

		let prevHour: string | undefined;

		for (const affirmation of dayAffirmations) {
			if (!affirmation) {
				continue;
			}

			if (messageTracker[affirmation.text]) {
				continue;
			}

			if (daysTracker[day]) {
				continue;
			}

			const hours = affirmation.time.split(',');
			const randomHour: string | undefined = hours.filter(hour => {
				return hour !== prevHour;
			})[Math.floor(Math.random() * hours.length)];
			prevHour = randomHour;

			if (!randomHour) {
				continue;
			}

			const date = new Date(day);
			date.setHours(Number(randomHour), 0, 0, 0);

			outputData.push({
				message: affirmation?.text,
				date: date.getTime(),
			});

			messageTracker[affirmation.text] = true;

			if (affirmations[affirmations.length - 1]?.text === affirmation.text) {
				daysTracker[day] = true;
			}
		}
	}

	return outputData;
}
