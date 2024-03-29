import styled from "styled-components";
import { VideoType } from "types/youtube";
import ChannelProfile from "@components/common/video_item/channel-profile";
import ViewcountAndPublishDate from "@components/common/video_item/viewcount-publishdate";

const Container = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	color: gray;
	font-size: 0.75rem;

	.title {
		color: black;
		font-size: 1.125rem;
		line-height: 20px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 0.375rem;
	}

	.channel {
		display: flex;
		align-items: center;
		padding: 0.75rem 0 0.75rem 0;
	}

	.description {
		font-size: 0.75rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
`;

export default function SearchVideoExplain({ video }: { video: VideoType }) {
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
				{channel && <ChannelProfile channel={channel} />}
				<div className="channel-name">{channelTitle}</div>
			</div>
			<div className="description">{description}</div>
		</Container>
	);
}
