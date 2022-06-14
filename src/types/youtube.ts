export interface Youtube {
	getPopularVideo: () => Promise<VideoType[]>;
	onSearch: (query: string) => Promise<VideoType[]>;
}

export type VideoType = {
	id: string;
	snippet: {
		title: string;
		publishedAt: string;
		channelTitle: string;
		description: string;
		thumbnails: {
			medium: {
				url: string;
				width: string;
				height: string;
			};
		};
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
		thumbnails: {
			medium: {
				url: string;
				width: string;
				height: string;
			};
		};
	};
};
