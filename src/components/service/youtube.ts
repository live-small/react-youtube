import axios, { AxiosInstance } from "axios";
import {
	ChannelType,
	SearchResponseType,
	VideoResponseType,
	VideoType,
} from "types/youtube";

class Youtube {
	readonly youtubeAPI: AxiosInstance;

	constructor() {
		this.youtubeAPI = axios.create({
			baseURL: `https://youtube.googleapis.com/youtube/v3/`,
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async getVideoUseVideoId(videoId: string) {
		// - videoId에 해당하는 video 정보를 가져온다
		try {
			const { data }: { data: VideoResponseType } =
				await this.youtubeAPI.get(`videos`, {
					params: {
						part: `snippet,statistics,contentDetails`,
						maxResults: 24,
						id: videoId,
					},
				});
			return data.items.map((video) => ({ ...video, hasChannel: false }));
		} catch (error) {
			throw new Error(`Not working on get video api, ${error}`);
		}
	}

	async onSearch(query: string) {
		// query에 맞는 video를 가져온다
		try {
			const { data }: { data: SearchResponseType } =
				await this.youtubeAPI.get(`search`, {
					params: {
						part: `snippet`,
						type: `video`,
						maxResults: 24,
						q: query,
					},
				});
			const videoIdString = data.items
				.map((video) => video.id.videoId)
				.join(",");
			const videos = await this.getVideoUseVideoId(videoIdString);
			const videoAndChannel = await this.getVideoAndChannelData(videos);

			return videoAndChannel.map((video) => ({
				...video,
				hasChannel: true,
				snippet: data.items
					.filter((v) => v.id.videoId === video.id)
					.pop()!.snippet,
			}));
		} catch (error) {
			throw new Error(`Not working onSearch, ${error}`);
		}
	}

	private async getChannelThumbnails(channelIdList: string) {
		const { data } = await this.youtubeAPI.get(`channels`, {
			params: {
				part: `snippet`,
				id: channelIdList,
			},
		}); // 호출한 순서대로 불러오고 싶다면? -> 호출순서 보장하려면?
		return data.items;
	}

	async getVideoAndChannelData(videos: VideoType[]) {
		// videoType의 정보를 이용해 video와 channel정보를 리턴한다
		try {
			const channelIdListString = videos
				.map((video) => video.snippet.channelId)
				.join(",");
			const channelThumbnails: ChannelType[] =
				await this.getChannelThumbnails(channelIdListString);

			return videos.map((video) => ({
				...video,
				channel: channelThumbnails
					.filter((channel) => video.snippet.channelId === channel.id)
					.pop(),
			}));
		} catch (error) {
			throw new Error(`Not working getVideoAndChannelData, ${error}`);
		}
	}

	async getPopularVideo() {
		try {
			const { data }: { data: VideoResponseType } =
				await this.youtubeAPI.get(`videos`, {
					params: {
						part: `snippet,statistics,contentDetails`,
						chart: `mostPopular`,
						regionCode: `KR`,
						maxResults: 24,
					},
				});
			return await this.getVideoAndChannelData(data.items);
		} catch (error) {
			throw new Error(`Not working getPopularVideo, ${error}`);
		}
	}

	async getRelatedVideo(videoId: string) {
		try {
			const { data }: { data: SearchResponseType } =
				await this.youtubeAPI.get(`search`, {
					params: {
						part: `snippet`,
						type: `video`,
						relatedToVideoId: videoId,
						maxResults: 24,
					},
				});
			const videoIdString = data.items
				.map((video) => video.id.videoId)
				.join(",");
			return await this.getVideoUseVideoId(videoIdString);
		} catch (error) {
			throw new Error(`Not working getRelatedVideo, ${error}`);
		}
	}
}

export default Youtube;
