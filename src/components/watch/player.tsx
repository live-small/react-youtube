import ChannelProfile from "@components/common/video_item/channel-profile";
import ViewcountAndPublishDate from "@components/common/video_item/viewcount-publishdate";
import Tag from "@components/watch/tag";
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

	.description {
		border-bottom: 0.1px solid gray;

		.title {
			font-size: 18px;
			margin-top: 6px;
		}

		.viewCount-publishAt {
			display: flex;
			color: gray;
			font-size: 14px;
			padding: 20px 0 20px 0;
		}
	}
`;

export default function Player({ video }: { video: VideoType }) {
	const {
		snippet: { title, channelTitle, publishedAt, description, tags },
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
			<section className="description">
				<div className="tags-title">
					<Tag tags={tags} />
					<h1 className="title">{title}</h1>
				</div>
				<div className="viewCount-publishAt">
					<div>조회수&nbsp;</div>
					<ViewcountAndPublishDate
						viewCount={viewCount}
						publishedAt={publishedAt}
						detail={true}
					/>
				</div>
			</section>
			<section className="channel">
				<div className="meta-data">
					<div className="channel-profile">
						{channel && <ChannelProfile channel={channel} />}
						<div className="id-viewer">
							<span className="channel-id">{channelTitle}</span>
						</div>
					</div>
					<button className="subscribe-button">구독</button>
				</div>
				<div className="see-more">{description}</div>
			</section>
		</Container>
	);
}
