import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { VideoType, Youtube } from "types/youtube";
import RelatedVideos from "@components/videoItem/watch/related-videos";

const Container = styled.main`
	display: flex;
	justify-content: center;
`;

export default function Watch({ youtube }: { youtube: Youtube }) {
	const video = useLocation().state as VideoType;

	return (
		<Container>
			<RelatedVideos videoId={video.id} youtube={youtube} />
		</Container>
	);
}
