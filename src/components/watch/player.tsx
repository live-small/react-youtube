import ChannelMetadata from "@components/watch/channel-metadata";
import Tag from "@components/watch/tag";
import VideoDescription from "@components/watch/video-description";
import { useState } from "react";
import styled from "styled-components";
import { VideoType } from "types/youtube";

const Container = styled.article<{ isShowDescription: boolean }>`
	display: flex;
	flex-direction: column;
	line-height: 15px;

	.player {
		height: 33.75rem;
		padding-bottom: 1.875rem;
	}

	.channel {
		display: flex;
		flex-direction: column;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding-bottom: 16px;

		.see-more {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-left: 60px;
			font-size: 14px;

			.content {
				max-width: 615px;
				white-space: pre-wrap;
				height: ${(props) => (props.isShowDescription ? null : "60px")};
				overflow: hidden;
				flex-direction: column;

				.tag {
					padding: 0.5rem 0 0.5rem 0;
				}
			}

			.description-show-toggle-button {
				font-weight: 500;
				background-color: ${(props) => props.theme.color.gray};
				color: darkgray;
				padding: 0;
			}
		}
	}
`;

export default function Player({ video }: { video: VideoType }) {
	const {
		snippet: { title, publishedAt, description, tags },
		statistics: { viewCount },
		channel,
	} = video;
	const [isShowDescription, setIsShowDescription] = useState(false);

	return (
		<Container
			className="player-container"
			isShowDescription={isShowDescription}
		>
			<section className="player">
				<iframe
					id="ytplayer"
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${video.id}/`}
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
				<div className="see-more">
					<div className="content">
						{description}
						<div className="tag">
							{tags.length > 5 && <Tag tags={tags} />}
						</div>
					</div>
					<button
						className="description-show-toggle-button"
						onClick={() => setIsShowDescription(!isShowDescription)}
					>
						{isShowDescription ? "간략히" : "더보기"}
					</button>
				</div>
			</section>
		</Container>
	);
}
