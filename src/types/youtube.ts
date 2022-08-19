export interface Youtube {
	getPopularVideo: () => Promise<VideoType[]>;
	onSearch: (query: string) => Promise<VideoType[]>;
}

export type ThumbnailsType = {
	medium: {
		url: string;
		width: string;
		height: string;
	};
};

export type VideoType = {
	id: string;
	snippet: {
		title: string;
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

export type VideoTypeOfSearch = {
	kind: string;
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		title: string;
		publishedAt: string;
		channelTitle: string;
		description: string;
		thumbnails: ThumbnailsType;
	};
};
