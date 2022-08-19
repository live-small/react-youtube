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
