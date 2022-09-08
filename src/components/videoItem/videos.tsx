import Video from "@components/videoItem/video";
import styled from "styled-components";
import { VideoAndChannelType } from "types/youtube";

const VideosLayout = styled.main`
	display: flex;
	flex-wrap: wrap;
	padding: 30px;
	justify-content: space-between;
`;

export default function Videos({ videos }: { videos: VideoAndChannelType[] }) {
	return (
		<VideosLayout>
			{videos.map((video) => {
				return <Video key={video.id} video={video} />;
			})}
		</VideosLayout>
	);
}
