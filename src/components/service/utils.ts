// ref : https://stackoverflow.com/questions/19061360/how-to-convert-youtube-api-duration-iso-8601-duration-in-the-format-ptms-to
export const convertISO8601ToTime = (ISO8601: string): string => {
	const format = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
	let time = "";

	if (format.test(ISO8601)) {
		const [, hours, minutes, seconds] = format.exec(ISO8601)!;
		if (hours) time += `${hours}:`;
		minutes ? (time += `${checkTimeFormat(minutes)}:`) : (time += "00:");
		seconds ? (time += `${checkTimeFormat(seconds)}`) : (time += "00");
	}

	return time;
};

const checkTimeFormat = (time: string): string => {
	return time.length < 2 ? `0${time}` : time;
};

// ref: https://github.com/Instagram-Clone-Coding/React_instagram_clone/blob/develop/src/hooks/useGapText.ts
type TimeUnitType = 60 | 3600 | 86400 | 604800 | 31536000;

export const getGapTimeCurrent = (compareTime: string) => {
	const TimeUnit: TimeUnitType[] = [31536000, 604800, 86400, 3600, 60];
	const TimeUnitKorean = {
		60: "분",
		3600: "시간",
		86400: "일",
		604800: "주",
		31536000: "년",
	};

	const gap = (Date.now() - Date.parse(compareTime)) / 1000; // unit: ms
	for (const unit of TimeUnit) {
		if (gap >= unit) {
			return `${Math.floor(gap / unit)}${TimeUnitKorean[unit]}`;
		}
	}
	return "방금";
};

type CountUnitType = 1000 | 10000 | 100000000;

export const numberIntoUnit = (number: number) => {
	const Unit: CountUnitType[] = [100000000, 10000, 1000];
	const UnitKorean = { 1000: "천", 10000: "만", 100000000: "억" };

	for (const unit of Unit) {
		if (number >= unit) {
			return `${getNumber(number, unit)}${UnitKorean[unit]}`;
		}
	}
	return number;
};

const getNumber = (number: number, unit: number) => {
	if (String(Math.floor(number / unit)).length >= 2) {
		return Math.floor(number / unit);
	}
	return Number.parseFloat(String(number / unit)).toFixed(1);
};
