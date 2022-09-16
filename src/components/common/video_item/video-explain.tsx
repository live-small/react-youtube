import { VideoType } from "types/youtube";
import styled from "styled-components";
import ChannelProfile from "@components/common/video_item/channel-profile";
import ViewcountAndPublishDate from "@components/common/video_item/viewcount-publishdate";

const Container = styled.section<{ layout: { margin: string } }>`
	display: flex;
	color: black;
	margin: ${(props) => props.layout.margin};

	.explain {
		display: flex;
		flex-direction: column;

		.title {
			font-weight: 600;
			line-height: 20px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			font-size: 0.875em;
			margin-bottom: 0.375em;
		}

		.channel-videoview {
			color: gray;
			font-weight: 400;
			display: flex;
			flex-direction: column;
			font-size: 0.75em;

			.channel-name {
				padding-bottom: 0.375em;
			}
		}
	}
`;

export default function VideoExplain({
	video,
	layout,
}: {
	video: VideoType;
	layout: { margin: string };
}) {
	const {
		snippet: { title, channelTitle, publishedAt },
		statistics: { viewCount },
		channel,
	} = video;

	return (
		<Container layout={layout}>
			{channel && <ChannelProfile channel={channel} />}
			<div className="explain">
				<div className="title">{title}</div>
				<div className="channel-videoview">
					<div className="channel-name">{channelTitle}</div>
					<ViewcountAndPublishDate
						viewCount={viewCount}
						publishedAt={publishedAt}
					/>
				</div>
			</div>
		</Container>
	);
}
