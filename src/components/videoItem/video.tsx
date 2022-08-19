import Thumbnails from "@components/videoItem/thumbnails";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VideoType } from "types/youtube";

const VideoLayout = styled.article`
	display: flex;
	flex-direction: column;
	width: 320px;
	margin: 0 8px 40px 8px;
	a {
		text-decoration: none;
	}

	.description {
		display: flex;
		flex-direction: column;
		.title {
			font-size: 14px;
			font-weight: 600;
			line-height: 20px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			color: black;
		}
		.channel-name {
			font-size: 12px;
			font-weight: 400;
			color: gray;
		}
	}
`;

const Video = memo(function Video({ video }: { video: VideoType }) {
	const {
		snippet: { thumbnails, title, channelTitle },
		contentDetails: { duration },
		statistics: { viewCount },
	} = video;

	return (
		<VideoLayout>
			<Link to={`/watch/${video.id}`}>
				<Thumbnails thumbnails={thumbnails} duration={duration} />
				<span className="description">
					<span className="title">{title}</span>
					<span className="channel-name">{channelTitle}</span>
				</span>
			</Link>
		</VideoLayout>
	);
});

export default Video;
