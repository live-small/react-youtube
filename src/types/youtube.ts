export interface Youtube {
	getVideoUseVideoId: (videoId: string) => Promise<VideoType[]>;
	onSearch: (query: string) => Promise<VideoType[]>;
	getChannel: (channelIdList: string) => Promise<ChannelType[]>;
	getVideoAndChannelData: (videos: VideoType[]) => Promise<VideoType[]>;
	getPopularVideo: () => Promise<VideoType[]>;
	getRelatedVideo: (videoId: string) => Promise<VideoType[]>;
}

export type VideoResponseType = {
	items: VideoType[];
};

export type SearchResponseType = {
	items: VideoTypeOfSearch[];
};

type ThumbnailPropertyType = {
	url: string;
	width: string;
	height: string;
};

export type ThumbnailsType = {
	default: ThumbnailPropertyType;
	medium: ThumbnailPropertyType;
	high: ThumbnailPropertyType;
	standard: ThumbnailPropertyType;
};

export type ChannelType = {
	id: string;
	snippet: {
		thumbnails: ThumbnailsType;
		title: string;
	};
	statistics: {
		subscriberCount: string;
	};
};

export type VideoType = {
	id: string;
	snippet: {
		title: string;
		channelId: string;
		publishedAt: string;
		channelTitle: string;
		description: string;
		thumbnails: ThumbnailsType;
		tags: string[];
	};
	contentDetails: {
		duration: string;
	};
	statistics: {
		viewCount: number;
	};
	channel: ChannelType | null;
};

export type VideoTypeOfSearch = {
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		description: string;
	};
};
