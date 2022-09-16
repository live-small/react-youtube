import Thumbnails from "@components/common/video_item/thumbnails";
import { memo, ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VideoType } from "types/youtube";

type Layout = {
	thumbnailAndExplainDirection?: "row";
	videoWidth: string;
	margin?: string;
};

export type ImageSizeProps = {
	width: string;
	height: string;
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
	thumbnailSize,
}: {
	video: VideoType;
	layout: Layout;
	explainOfVideo: ReactElement;
	thumbnailSize?: ImageSizeProps;
}) {
	const {
		snippet: { thumbnails },
	} = video;

	return (
		<VideoLayout {...layout}>
			<Link to={`/watch/${video.id}`} state={video}>
				<Thumbnails
					thumbnails={thumbnails}
					duration={video.contentDetails.duration}
					size={
						thumbnailSize || {
							width: thumbnails.medium.width,
							height: thumbnails.medium.height,
						}
					}
				/>
				{explainOfVideo}
			</Link>
		</VideoLayout>
	);
});

export default Video;
