import axios, { AxiosInstance } from "axios";
import {
	ChannelType,
	SearchResponseType,
	VideoResponseType,
} from "types/youtube";

class Youtube {
	readonly youtubeAPI: AxiosInstance;

	constructor() {
		this.youtubeAPI = axios.create({
			baseURL: `https://youtube.googleapis.com/youtube/v3/`,
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async getVideoData(videoId?: string) {
		const params = videoId
			? {
					part: `snippet,statistics,contentDetails`,
					id: videoId,
			  }
			: {
					part: `snippet,statistics,contentDetails`,
					chart: `mostPopular`,
					regionCode: `KR`,
					maxResults: 24,
			  };

		try {
			const { data }: { data: VideoResponseType } =
				await this.youtubeAPI.get(`videos`, {
					params,
				});

			const channelIdListString = data.items
				.map((video) => video.snippet.channelId)
				.join(",");
			const channelThumbnails: ChannelType[] =
				await this.getChannelThumbnails(channelIdListString);

			return data.items.map((video) => ({
				...video,
				channel: channelThumbnails
					.filter((channel) => video.snippet.channelId === channel.id)
					.pop(),
			}));
		} catch (error) {
			console.log(error);
		}
	}

	async getChannelThumbnails(channelIdList: string) {
		const { data } = await this.youtubeAPI.get(`channels`, {
			params: {
				part: `snippet`,
				id: channelIdList,
			},
		}); // 호출한 순서대로 불러오고 싶다면? -> 호출순서 보장하려면?
		return data.items;
	}

	async onSearch(query?: string, videoId?: string) {
		const params = query
			? {
					part: `snippet`,
					type: `video`,
					maxResults: 25,
					q: query,
			  }
			: {
					part: `snippet`,
					type: `video`,
					relatedToVideoId: videoId,
			  };

		try {
			const { data }: { data: SearchResponseType } =
				await this.youtubeAPI.get(`search`, {
					params,
				});
			const videoIdList = data.items
				.map((video) => video.id.videoId)
				.join(",");
			return await this.getVideoData(videoIdList);
		} catch (error) {
			console.log(error); // 에러페이지 -> 찾는 영상이 없습니다
		}
	}
}

export default Youtube;
