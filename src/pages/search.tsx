import Video from "@components/common/video_item/video";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { VideoType, Youtube } from "types/youtube";
import SearchVideoExplain from "@components/search/search-video-explain";

const Container = styled.main`
	padding: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function Search({ youtube }: { youtube: Youtube }) {
	const { query } = useParams();
	const [videoList, setVideoList] = useState<VideoType[]>();

	useEffect(() => {
		query &&
			youtube //
				.onSearch(query)
				.then((list) => setVideoList(list));
	}, [query]);

	return (
		<Container>
			{videoList ? (
				videoList.map((video) => (
					<Video
						key={video.id}
						video={video}
						explainOfVideo={<SearchVideoExplain video={video} />}
						layout={{
							thumbnailAndExplainDirection: "row",
							videoWidth: "980px",
							margin: "16px 0 0 0",
						}}
					/>
				))
			) : (
				<div>loading...</div>
			)}
		</Container>
	);
}
