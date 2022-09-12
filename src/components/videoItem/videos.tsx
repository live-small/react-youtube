import LandingVideoExplain from "@components/videoItem/landing-video-explain";
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
				return (
					<Video
						key={video.id}
						video={video}
						explainOfVideo={<LandingVideoExplain video={video} />}
						layout={{
							videoWidth: "320px",
							margin: "0 8px 40px 8px",
						}}
					/>
				);
			})}
		</VideosLayout>
	);
}
