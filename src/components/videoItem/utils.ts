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
export const getGapTimeCurrent = (compareTime: string) => {
	const gap = Date.now() - Date.parse(compareTime); // unit: ms
	if (gap >= 86400000 * 365) {
		return `${Math.floor(gap / (86400000 * 365))}년`;
	} else if (gap >= 604800000) {
		return `${Math.floor(gap / 604800000)}주`;
	} else if (gap >= 86400000) {
		return `${Math.floor(gap / 86400000)}일`;
	} else if (gap >= 3600000) {
		return `${Math.floor(gap / 3600000)}시간`;
	} else if (gap >= 60000) {
		return `${Math.floor(gap / 60000)}분`;
	} else {
		return "방금";
	}
};

type UnitType = 1000 | 10000 | 100000000;

export const numberIntoUnit = (number: number) => {
	const Unit: UnitType[] = [100000000, 10000, 1000];
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
