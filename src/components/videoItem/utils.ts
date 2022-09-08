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
// ref : https://stackoverflow.com/questions/19061360/how-to-convert-youtube-api-duration-iso-8601-duration-in-the-format-ptms-to

const checkTimeFormat = (time: string): string => {
	return time.length < 2 ? `0${time}` : time;
};

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
// ref: https://github.com/Instagram-Clone-Coding/React_instagram_clone/blob/develop/src/hooks/useGapText.ts
