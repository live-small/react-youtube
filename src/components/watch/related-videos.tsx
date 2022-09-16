import Video from "@components/common/video_item/video";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { VideoType, Youtube } from "types/youtube";
import VideoExplain from "@components/common/video_item/video-explain";

const Container = styled.article`
	display: flex;
	flex-direction: column;

	.video-list {
		display: flex;
		flex-direction: column;
	}
`;

// suspense 적용하기 **
export default function RelatedVideos({
	videoId,
	youtube,
}: {
	videoId: string;
	youtube: Youtube;
}) {
	const [relatedVideo, setRelatedVideo] = useState<VideoType[]>();

	useEffect(() => {
		youtube //
			.getRelatedVideo(videoId)
			.then((list) => setRelatedVideo(list));
	}, [videoId, youtube]);

	return (
		<Container>
			<section>관련 콘텐츠</section>
			<section className="video-list">
				{relatedVideo ? (
					relatedVideo.map((video) => (
						<Video
							key={video.id}
							video={video}
							explainOfVideo={<VideoExplain video={video} />}
							thumbnailSize={{ width: "168px", height: "94px" }}
							layout={{
								videoWidth: "100%",
								margin: "10px 0 10px 0",
								thumbnailAndExplainDirection: "row",
							}}
						/>
					))
				) : (
					<div>loading...</div>
				)}
			</section>
		</Container>
	);
}
