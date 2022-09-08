export interface Youtube {
	getVideoData: () => Promise<VideoAndChannelType[]>;
	onSearch: (query: string) => Promise<VideoAndChannelType[]>;
	getChannelThumbnails: (channelIdList: string) => Promise<ChannelType[]>;
}

export type VideoResponseType = {
	items: VideoType[];
};

export type SearchResponseType = {
	items: VideoTypeOfSearch[];
};

export type ThumbnailsType = {
	default: {
		url: string;
		width: string;
		height: string;
	};
	medium: {
		url: string;
		width: string;
		height: string;
	};
};

export type ChannelType = {
	id: string;
	snippet: {
		thumbnails: ThumbnailsType;
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
	};
	contentDetails: {
		duration: string;
	};
	statistics: {
		viewCount: number;
	};
};

export type VideoAndChannelType = VideoType & {
	channel: ChannelType;
};

export type VideoTypeOfSearch = {
	id: {
		kind: string;
		videoId: string;
	};
};
