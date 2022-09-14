import Thumbnails from "@components/videoItem/thumbnails";
import { memo, ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VideoType } from "types/youtube";

type Layout = {
	thumbnailAndExplainDirection?: "row";
	videoWidth: string;
	margin?: string;
};

const VideoLayout = styled.article<Layout>`
	width: ${(props) => props.videoWidth};
	margin: ${(props) => props.margin};
	a {
		display: flex;
		flex-direction: ${(props) =>
			props.thumbnailAndExplainDirection
				? props.thumbnailAndExplainDirection
				: "column"};
	}
`;

const Video = memo(function Video({
	video,
	layout,
	explainOfVideo,
}: {
	video: VideoType;
	layout: Layout;
	explainOfVideo: ReactElement;
}) {
	return (
		<VideoLayout {...layout}>
			<Link to={`/watch/${video.id}`} state={video}>
				<Thumbnails
					thumbnails={video.snippet.thumbnails}
					duration={video.contentDetails.duration}
				/>
				{explainOfVideo}
			</Link>
		</VideoLayout>
	);
});

export default Video;
