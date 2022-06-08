class Youtube {
	constructor(key) {
		this.key = key;
	}

	async getPopularVideo() {
		try {
			const response = await fetch(
				`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${this.key}`
			);
			const data = await response.json();
			return data.items;
		} catch (error) {
			console.log(error); // 에러페이지 만들기 -> 발생할 케이스: 네트워크 off, api 문제?
		}
	}

	async onSearch(query) {
		try {
			const response = await fetch(
				`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`
			);
			const data = await response.json();
			const videos = await data.items;
			return videos.map((video) => ({
				...video,
				id: video.id.videoId,
			}));
		} catch (error) {
			console.log(error); // 에러페이지 -> 찾는 영상이 없습니다
		}
	}
}

export default Youtube;
