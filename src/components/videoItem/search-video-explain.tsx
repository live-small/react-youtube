import ChannelProfile from "@components/channel/channel-profile";
import ViewcountAndPublishDate from "@components/videoItem/viewcount-publishdate";
import styled from "styled-components";
import { VideoAndChannelType } from "types/youtube";

const Container = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: 1em;
	color: gray;
	font-size: 0.875em;

	.title {
		color: black;
		font-size: 1.28em;
		line-height: 20px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 0.375em;
	}

	.channel {
		display: flex;
		align-items: center;
		padding: 0.85em 0 0.85em 0;
	}

	.description {
		font-size: 0.85em;
	}
`;

export default function SearchVideoExplain({
	video,
}: {
	video: VideoAndChannelType;
}) {
	const {
		snippet: { title, channelTitle, publishedAt, description },
		statistics: { viewCount },
		channel,
	} = video;

	return (
		<Container>
			<div className="title">{title}</div>
			<ViewcountAndPublishDate
				viewCount={viewCount}
				publishedAt={publishedAt}
			/>
			<div className="channel">
				<ChannelProfile channel={channel} />
				<div className="channel-name">{channelTitle}</div>
			</div>
			<div className="description">{description}</div>
		</Container>
	);
}
