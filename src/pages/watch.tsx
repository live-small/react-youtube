import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { VideoType, Youtube } from "types/youtube";
import RelatedVideos from "@components/watch/related-videos";
import Player from "@components/watch/player";

const Container = styled.main`
	display: grid;
	grid-template-columns: 880px 450px;
	justify-content: center;
	padding-top: 30px;
`;

export default function Watch({ youtube }: { youtube: Youtube }) {
	const video = useLocation().state as VideoType;

	return (
		<Container>
			<Player video={video} />
			<RelatedVideos videoId={video.id} youtube={youtube} />
		</Container>
	);
}
