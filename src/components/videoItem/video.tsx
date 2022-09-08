import ChannelProfile from "@components/channel/channel-profile";
import Thumbnails from "@components/videoItem/thumbnails";
import { getGapTimeCurrent, numberIntoUnit } from "@components/videoItem/utils";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VideoAndChannelType } from "types/youtube";

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
		margin-top: 12px;

		.explain {
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
				margin-bottom: 6px;
			}
			.channel-videoview {
				font-size: 12px;
				font-weight: 400;
				color: gray;
				display: flex;
				flex-direction: column;
				margin-top: 6px;

				.channel-name {
					padding-bottom: 6px;
				}

				.viewcount-publishdate {
					display: flex;

					.divide-dot {
						padding: 0 6px 0 6px;
					}
				}
			}
		}
	}
`;

const Video = memo(function Video({ video }: { video: VideoAndChannelType }) {
	const {
		snippet: { thumbnails, title, channelTitle, publishedAt },
		contentDetails: { duration },
		statistics: { viewCount },
		channel,
	} = video;

	return (
		<VideoLayout>
			<Link to={`/watch/${video.id}`}>
				<Thumbnails thumbnails={thumbnails} duration={duration} />
				<span className="description">
					<ChannelProfile channel={channel} />
					<div className="explain">
						<div className="title">{title}</div>
						<div className="channel-videoview">
							<div className="channel-name">{channelTitle}</div>
							<div className="viewcount-publishdate">
								<div>{numberIntoUnit(viewCount)}</div>
								<span className="divide-dot"> · </span>
								<div>{getGapTimeCurrent(publishedAt)} 전</div>
							</div>
						</div>
					</div>
				</span>
			</Link>
		</VideoLayout>
	);
});

export default Video;
