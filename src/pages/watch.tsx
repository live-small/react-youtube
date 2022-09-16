import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { VideoType, Youtube } from "types/youtube";
import RelatedVideos from "@components/watch/related-videos";
import Player from "@components/watch/player";

const Container = styled.main<{ mediaMaxWidth: string }>`
	display: flex;
	justify-content: center;
	padding-top: 30px;

	.content {
		display: flex;
		max-width: 1440px;

		.player-container {
			flex: 70%;
			padding: 0 24px 0 24px;
		}

		.related-videos {
			flex: 30%;
			padding-right: 24px;
		}
	}

	@media only screen and (max-width: ${(props) => props.mediaMaxWidth}) {
		.content {
			display: flex;
			flex-direction: column;

			.related-videos {
				padding: 24px 24px 0 24px;
			}
		}
	}
`;

export default function Watch({ youtube }: { youtube: Youtube }) {
	const video = useLocation().state as VideoType;

	return (
		<Container mediaMaxWidth={`${Math.floor(window.innerWidth * 0.7)}px`}>
			<div className="content">
				<Player video={video} />
				<RelatedVideos videoId={video.id} youtube={youtube} />
			</div>
		</Container>
	);
}
