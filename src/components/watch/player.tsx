import ChannelMetadata from "@components/watch/channel-metadata";
import VideoDescription from "@components/watch/video-description";
import styled from "styled-components";
import { VideoType } from "types/youtube";

const Container = styled.article`
	display: flex;
	flex-direction: column;
	line-height: 15px;

	.player {
		height: 540px;
		padding-bottom: 30px;
	}

	.channel {
		display: flex;
		flex-direction: column;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding-bottom: 16px;
	}
`;

export default function Player({ video }: { video: VideoType }) {
	const {
		snippet: { title, publishedAt, description, tags },
		statistics: { viewCount },
		channel,
	} = video;

	return (
		<Container>
			<section className="player">
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${video.id}`}
					// https://www.youtube-nocookie.com/embed/QL4bz3QXWEo
					frameBorder="0"
					title="video"
					allowFullScreen
				/>
			</section>
			<VideoDescription
				title={title}
				tags={tags}
				viewCount={viewCount}
				publishedAt={publishedAt}
			/>
			<section className="channel">
				{channel && <ChannelMetadata channel={channel} />}
				<div className="see-more">{description}</div>
			</section>
		</Container>
	);
}
