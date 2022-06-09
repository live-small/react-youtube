import axios from "axios";

class Youtube {
	constructor() {
		this.youtubeAPI = axios.create({
			baseURL: `https://youtube.googleapis.com/youtube/v3/`,
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async getPopularVideo() {
		try {
			const { data } = await this.youtubeAPI.get(`videos`, {
				params: {
					part: `snippet`,
					chart: `mostPopular`,
					regionCode: `KR`,
					maxResults: 25,
				},
			});
			return data.items;
		} catch (error) {
			console.log(error); // 에러페이지 만들기 -> 발생할 케이스: 네트워크 off, api 문제?
		}
	}

	async onSearch(query) {
		try {
			const { data } = await this.youtubeAPI.get(`search`, {
				params: {
					part: `snippet`,
					type: `video`,
					maxResults: 25,
					q: query,
				},
			});
			return data.items.map((video) => ({
				...video,
				id: video.id.videoId,
			}));
		} catch (error) {
			console.log(error); // 에러페이지 -> 찾는 영상이 없습니다
		}
	}
}

export default Youtube;
